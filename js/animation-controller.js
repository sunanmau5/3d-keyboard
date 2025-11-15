// handles keyboard event listening and animation coordination

export class AnimationController {
    constructor(renderer) {
        this.renderer = renderer;
        this.pressedKeys = new Set();
        this.init();
    }

    init() {
        // listen for keydown events
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));

        // listen for keyup events
        document.addEventListener('keyup', (e) => this.handleKeyUp(e));

        // prevent default behavior for some keys
        document.addEventListener('keydown', (e) => {
            // prevent spacebar from scrolling
            if (e.code === 'Space' && e.target === document.body) {
                e.preventDefault();
            }
        });
    }

    handleKeyDown(event) {
        const code = event.code;

        // ignore repeat events (when key is held)
        if (this.pressedKeys.has(code)) {
            return;
        }

        // add to pressed keys set
        this.pressedKeys.add(code);

        // trigger animation
        this.renderer.pressKey(code);
    }

    handleKeyUp(event) {
        const code = event.code;

        // remove from pressed keys set
        this.pressedKeys.delete(code);

        // trigger release animation
        this.renderer.releaseKey(code);
    }

    /**
     * Cleanup event listeners
     */
    dispose() {
        document.removeEventListener('keydown', (e) => this.handleKeyDown(e));
        document.removeEventListener('keyup', (e) => this.handleKeyUp(e));
    }
}

