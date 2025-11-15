// auto-detect keyboard layout and OS based on browser/OS hints

export class KeyboardDetector {
    /**
     * Detect operating system
     * @returns {string} 'mac', 'windows', or 'linux'
     */
    static detectOS() {
        const platform = navigator.platform.toLowerCase();
        const userAgent = navigator.userAgent.toLowerCase();

        // check for mac first (most specific)
        if (platform.includes('mac') ||
            userAgent.includes('mac') ||
            userAgent.includes('macintosh') ||
            platform.includes('darwin')) {
            return 'mac';
        }

        // check for linux
        if (platform.includes('linux') || userAgent.includes('linux')) {
            return 'linux';
        }

        // check for windows
        if (platform.includes('win') || userAgent.includes('win')) {
            return 'windows';
        }

        // ios devices
        if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
            return 'mac';
        }

        return 'windows'; // default fallback
    }

    /**
     * Attempts to detect the user's keyboard layout
     * @returns {Promise<string>} Layout name: 'ansi', 'iso', 'german', or 'uk'
     */
    static async detectLayout() {
        // try navigator.keyboard API (if available)
        if (navigator.keyboard && navigator.keyboard.getLayoutMap) {
            // keyboard API is experimental and may not be widely supported
            return await this.detectFromNavigatorKeyboard();
        }

        // fallback to navigator.language and platform hints
        return this.detectFromLanguage();
    }

    /**
     * Detect layout from navigator.keyboard API
     * @returns {string}
     */
    static async detectFromNavigatorKeyboard() {
        try {
            const layoutMap = await navigator.keyboard.getLayoutMap();

            // check for ISO-specific key
            if (layoutMap.get('IntlBackslash')) {
                // has the extra ISO key - could be ISO, German, or UK
                const language = navigator.language.toLowerCase();

                if (language.startsWith('de')) {
                    return 'german';
                } else if (language.startsWith('en-gb')) {
                    return 'uk';
                } else {
                    return 'iso';
                }
            }

            // no IntlBackslash key = likely ANSI
            return 'ansi';
        } catch (error) {
            console.warn('Keyboard API detection failed:', error);
            return this.detectFromLanguage();
        }
    }

    /**
     * Detect layout from navigator.language
     * @returns {string}
     */
    static detectFromLanguage() {
        const language = navigator.language.toLowerCase();
        const platform = navigator.platform.toLowerCase();

        // german keyboard
        if (language.startsWith('de')) {
            return 'german';
        }

        // uk keyboard
        if (language.startsWith('en-gb')) {
            return 'uk';
        }

        // check for european regions (likely ISO)
        const europeanLanguages = [
            'fr', 'es', 'it', 'pt', 'nl', 'pl', 'sv', 'no', 'da', 'fi', 'cs', 'hu', 'ro'
        ];

        if (europeanLanguages.some(lang => language.startsWith(lang))) {
            return 'iso';
        }

        // mac in europe might use ISO
        if (platform.includes('mac') && !language.startsWith('en-us')) {
            return 'iso';
        }

        // default to ANSI (US layout)
        return 'ansi';
    }

    /**
     * Test for ISO layout by checking for IntlBackslash key support
     * @returns {Promise<boolean>}
     */
    static async hasISOKey() {
        return new Promise((resolve) => {
            let detected = false;

            const handler = (e) => {
                if (e.code === 'IntlBackslash') {
                    detected = true;
                    cleanup();
                    resolve(true);
                }
            };

            const cleanup = () => {
                document.removeEventListener('keydown', handler);
            };

            document.addEventListener('keydown', handler);

            // timeout after 5 seconds
            setTimeout(() => {
                cleanup();
                resolve(detected);
            }, 5000);
        });
    }
}

