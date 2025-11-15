// main application entry point

// import Three.js as ES6 module from CDN
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';

// make THREE available globally for the renderer
window.THREE = THREE;

import { KEYBOARD_LAYOUTS } from './keyboard-layouts.js';
import { KeyboardDetector } from './keyboard-detector.js';
import { KeyboardRenderer } from './keyboard-renderer.js';
import { AnimationController } from './animation-controller.js';

class KeyboardApp {
    constructor() {
        this.currentLayout = 'ansi'; // default
        this.renderer = null;
        this.animationController = null;

        this.init();
    }

    async init() {
        // detect OS and layout
        const detectedOS = KeyboardDetector.detectOS();
        let detectedLayout = await KeyboardDetector.detectLayout();

        console.log('Detected OS:', detectedOS);
        console.log('Detected Layout:', detectedLayout);

        // use OS-specific layout based on detected OS
        const osSpecificLayout = `${detectedLayout}_${detectedOS}`;

        console.log('Looking for OS-specific layout:', osSpecificLayout);
        console.log('Exists?', !!KEYBOARD_LAYOUTS[osSpecificLayout]);

        // use OS-specific if it exists, otherwise fallback to base
        if (KEYBOARD_LAYOUTS[osSpecificLayout]) {
            detectedLayout = osSpecificLayout;
            console.log('Using OS-specific layout:', detectedLayout);
        } else {
            console.log('Using base layout:', detectedLayout);
        }

        this.currentLayout = detectedLayout;
        this.detectedOS = detectedOS;

        // update UI
        this.updateLayoutDisplay(detectedLayout);

        // setup layout selector
        this.setupLayoutSelector();

        // render keyboard
        this.renderKeyboard();

        // setup animation controller
        this.animationController = new AnimationController(this.renderer);
    }

    updateLayoutDisplay(layoutName) {
        const layoutInfo = KEYBOARD_LAYOUTS[layoutName];
        const detectedElement = document.getElementById('detected-layout');

        if (detectedElement) {
            detectedElement.textContent = `(${layoutInfo.name})`;
        }
    }

    setupLayoutSelector() {
        const selector = document.getElementById('layout-selector');

        if (selector) {
            // set current layout
            selector.value = 'auto';

            // listen for changes
            selector.addEventListener('change', async (e) => {
                const selected = e.target.value;

                if (selected === 'auto') {
                    this.currentLayout = await KeyboardDetector.detectLayout();
                } else {
                    this.currentLayout = selected;
                }

                this.updateLayoutDisplay(this.currentLayout);
                this.reloadKeyboard();
            });
        }
    }

    renderKeyboard() {
        const container = document.getElementById('canvas-container');
        const layout = KEYBOARD_LAYOUTS[this.currentLayout];

        if (!container) {
            console.error('Canvas container not found');
            return;
        }

        // create renderer with OS info for dynamic labeling
        this.renderer = new KeyboardRenderer(container, layout, this.detectedOS || 'windows');
    }

    reloadKeyboard() {
        // dispose old renderer
        if (this.renderer) {
            this.renderer.dispose();
        }

        // dispose old animation controller
        if (this.animationController) {
            this.animationController.dispose();
        }

        // render new keyboard
        this.renderKeyboard();

        // setup new animation controller
        this.animationController = new AnimationController(this.renderer);
    }
}

// initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new KeyboardApp());
} else {
    new KeyboardApp();
}

