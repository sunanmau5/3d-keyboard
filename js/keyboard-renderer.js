// 3d keyboard rendering with Three.js

export class KeyboardRenderer {
    constructor(container, layout) {
        this.container = container;
        this.layout = layout;
        this.keys = new Map(); // map of code -> mesh

        this.init();
    }

    init() {
        // scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x667eea);

        // camera setup
        const aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
        this.camera.position.set(0, 12, 18);
        this.camera.lookAt(0, 0, 0);

        // renderer setup
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.container.appendChild(this.renderer.domElement);

        // lighting
        this.setupLighting();

        // render keyboard
        this.renderKeyboard();

        // handle window resize
        window.addEventListener('resize', () => this.onResize());

        // start animation loop
        this.animate();
    }

    setupLighting() {
        // ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        // main directional light
        const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
        mainLight.position.set(5, 10, 7);
        mainLight.castShadow = true;
        mainLight.shadow.camera.left = -20;
        mainLight.shadow.camera.right = 20;
        mainLight.shadow.camera.top = 20;
        mainLight.shadow.camera.bottom = -20;
        mainLight.shadow.mapSize.width = 2048;
        mainLight.shadow.mapSize.height = 2048;
        this.scene.add(mainLight);

        // fill light
        const fillLight = new THREE.DirectionalLight(0x88ccff, 0.3);
        fillLight.position.set(-5, 5, -5);
        this.scene.add(fillLight);

        // rim light
        const rimLight = new THREE.DirectionalLight(0xffffff, 0.2);
        rimLight.position.set(0, 5, -10);
        this.scene.add(rimLight);
    }

    renderKeyboard() {
        const keySpacing = 0.2;
        const keySize = 1.0;
        const keyHeight = 0.5;

        // create base plate
        const baseGeometry = new THREE.BoxGeometry(18, 0.3, 10);
        const baseMaterial = new THREE.MeshStandardMaterial({
            color: 0x2a2a2a,
            metalness: 0.3,
            roughness: 0.7
        });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.position.set(0, -0.4, 0);
        base.receiveShadow = true;
        this.scene.add(base);

        // render each row (row 0 = function keys at back, row 5 = space bar at front)
        this.layout.rows.forEach((row, rowIndex) => {
            let xOffset = 0;
            const rowZ = rowIndex * (keySize + keySpacing) - 3;

            row.forEach((keyDef) => {
                if (keyDef.code === null) {
                    // gap/spacer
                    xOffset += keyDef.width * (keySize + keySpacing);
                    return;
                }

                const keyWidth = keyDef.width * keySize + (keyDef.width - 1) * keySpacing;
                const key = this.createKey(keyWidth, keySize, keyHeight, keyDef.label);

                // position key
                const keyX = xOffset + keyWidth / 2 - 9;
                key.position.set(keyX, 0, rowZ);
                key.userData = {
                    code: keyDef.code,
                    defaultY: 0,
                    pressedY: -0.15
                };

                this.scene.add(key);
                this.keys.set(keyDef.code, key);

                xOffset += keyWidth + keySpacing;
            });
        });
    }

    createKey(width, depth, height, label) {
        const keyGroup = new THREE.Group();

        // key cap geometry with slight bevel
        const capGeometry = new THREE.BoxGeometry(width, height, depth);
        const capMaterial = new THREE.MeshStandardMaterial({
            color: 0xe0e0e0,
            metalness: 0.1,
            roughness: 0.4
        });
        const keyCap = new THREE.Mesh(capGeometry, capMaterial);
        keyCap.castShadow = true;
        keyCap.receiveShadow = true;
        keyGroup.add(keyCap);

        // add text label with high-res canvas texture
        if (label) {
            const canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
            const ctx = canvas.getContext('2d');

            // clear canvas
            ctx.clearRect(0, 0, 512, 512);

            // draw label with high quality and better contrast
            ctx.fillStyle = '#000000'; // pure black for maximum contrast
            ctx.font = 'bold 240px -apple-system, BlinkMacSystemFont, Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, 256, 256);

            const texture = new THREE.CanvasTexture(canvas);
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();

            const labelMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                opacity: 0.9
            });

            // fixed label size to prevent stretching
            const labelSize = Math.min(width, depth) * 0.5;
            const labelGeometry = new THREE.PlaneGeometry(labelSize, labelSize);
            const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial);
            labelMesh.rotation.x = -Math.PI / 2;
            labelMesh.position.y = height / 2 + 0.01;
            keyGroup.add(labelMesh);
        }

        return keyGroup;
    }

    /**
     * Animate key press
     */
    pressKey(code) {
        const key = this.keys.get(code);
        if (!key) return;

        key.userData.isPressed = true;
    }

    /**
     * Animate key release
     */
    releaseKey(code) {
        const key = this.keys.get(code);
        if (!key) return;

        key.userData.isPressed = false;
    }

    /**
     * Animation loop
     */
    animate() {
        requestAnimationFrame(() => this.animate());

        // animate all keys
        this.keys.forEach((key) => {
            const targetY = key.userData.isPressed ? key.userData.pressedY : key.userData.defaultY;
            const currentY = key.position.y;

            // smooth interpolation
            const newY = currentY + (targetY - currentY) * 0.3;
            key.position.y = newY;

            // update key color when pressed
            if (key.userData.isPressed) {
                key.children[0].material.color.setHex(0xffd700); // gold when pressed
            } else {
                key.children[0].material.color.setHex(0xe0e0e0); // white when released
            }
        });

        this.renderer.render(this.scene, this.camera);
    }

    /**
     * Handle window resize
     */
    onResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }

    /**
     * Cleanup
     */
    dispose() {
        window.removeEventListener('resize', () => this.onResize());
        this.renderer.dispose();
        this.container.removeChild(this.renderer.domElement);
    }
}

