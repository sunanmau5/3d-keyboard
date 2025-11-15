// keyboard layout definitions for ANSI, ISO, German, and UK layouts

export const KEYBOARD_LAYOUTS = {
    ansi: {
        name: "ANSI (US)",
        rows: [
            // row 0: number/function row
            [
                { code: "Escape", label: "Esc", width: 1 },
                { code: null, label: "", width: 0.5 }, // gap
                { code: "F1", label: "F1", width: 1 },
                { code: "F2", label: "F2", width: 1 },
                { code: "F3", label: "F3", width: 1 },
                { code: "F4", label: "F4", width: 1 },
                { code: null, label: "", width: 0.5 }, // gap
                { code: "F5", label: "F5", width: 1 },
                { code: "F6", label: "F6", width: 1 },
                { code: "F7", label: "F7", width: 1 },
                { code: "F8", label: "F8", width: 1 },
                { code: null, label: "", width: 0.5 }, // gap
                { code: "F9", label: "F9", width: 1 },
                { code: "F10", label: "F10", width: 1 },
                { code: "F11", label: "F11", width: 1 },
                { code: "F12", label: "F12", width: 1 }
            ],
            // row 1: numbers
            [
                { code: "Backquote", label: "`", width: 1 },
                { code: "Digit1", label: "1", width: 1 },
                { code: "Digit2", label: "2", width: 1 },
                { code: "Digit3", label: "3", width: 1 },
                { code: "Digit4", label: "4", width: 1 },
                { code: "Digit5", label: "5", width: 1 },
                { code: "Digit6", label: "6", width: 1 },
                { code: "Digit7", label: "7", width: 1 },
                { code: "Digit8", label: "8", width: 1 },
                { code: "Digit9", label: "9", width: 1 },
                { code: "Digit0", label: "0", width: 1 },
                { code: "Minus", label: "-", width: 1 },
                { code: "Equal", label: "=", width: 1 },
                { code: "Backspace", label: "⌫", width: 2 }
            ],
            // row 2: qwerty
            [
                { code: "Tab", label: "Tab", width: 1.5 },
                { code: "KeyQ", label: "Q", width: 1 },
                { code: "KeyW", label: "W", width: 1 },
                { code: "KeyE", label: "E", width: 1 },
                { code: "KeyR", label: "R", width: 1 },
                { code: "KeyT", label: "T", width: 1 },
                { code: "KeyY", label: "Y", width: 1 },
                { code: "KeyU", label: "U", width: 1 },
                { code: "KeyI", label: "I", width: 1 },
                { code: "KeyO", label: "O", width: 1 },
                { code: "KeyP", label: "P", width: 1 },
                { code: "BracketLeft", label: "[", width: 1 },
                { code: "BracketRight", label: "]", width: 1 },
                { code: "Backslash", label: "\\", width: 1.5 }
            ],
            // row 3: asdf
            [
                { code: "CapsLock", label: "Caps", width: 1.75 },
                { code: "KeyA", label: "A", width: 1 },
                { code: "KeyS", label: "S", width: 1 },
                { code: "KeyD", label: "D", width: 1 },
                { code: "KeyF", label: "F", width: 1 },
                { code: "KeyG", label: "G", width: 1 },
                { code: "KeyH", label: "H", width: 1 },
                { code: "KeyJ", label: "J", width: 1 },
                { code: "KeyK", label: "K", width: 1 },
                { code: "KeyL", label: "L", width: 1 },
                { code: "Semicolon", label: ";", width: 1 },
                { code: "Quote", label: "'", width: 1 },
                { code: "Enter", label: "Enter", width: 2.25 }
            ],
            // row 4: zxcv
            [
                { code: "ShiftLeft", label: "Shift", width: 2.25 },
                { code: "KeyZ", label: "Z", width: 1 },
                { code: "KeyX", label: "X", width: 1 },
                { code: "KeyC", label: "C", width: 1 },
                { code: "KeyV", label: "V", width: 1 },
                { code: "KeyB", label: "B", width: 1 },
                { code: "KeyN", label: "N", width: 1 },
                { code: "KeyM", label: "M", width: 1 },
                { code: "Comma", label: ",", width: 1 },
                { code: "Period", label: ".", width: 1 },
                { code: "Slash", label: "/", width: 1 },
                { code: "ShiftRight", label: "Shift", width: 2.75 }
            ],
            // row 5: space bar
            [
                { code: "ControlLeft", label: "Ctrl", width: 1.25 },
                { code: "MetaLeft", label: "Win", width: 1.25 },
                { code: "AltLeft", label: "Alt", width: 1.25 },
                { code: "Space", label: "", width: 6.25 },
                { code: "AltRight", label: "Alt", width: 1.25 },
                { code: "MetaRight", label: "Win", width: 1.25 },
                { code: "ContextMenu", label: "Menu", width: 1.25 },
                { code: "ControlRight", label: "Ctrl", width: 1.25 }
            ]
        ]
    },

    iso: {
        name: "ISO (European)",
        rows: [
            // row 0: function keys (same as ANSI)
            [
                { code: "Escape", label: "Esc", width: 1 },
                { code: null, label: "", width: 0.5 },
                { code: "F1", label: "F1", width: 1 },
                { code: "F2", label: "F2", width: 1 },
                { code: "F3", label: "F3", width: 1 },
                { code: "F4", label: "F4", width: 1 },
                { code: null, label: "", width: 0.5 },
                { code: "F5", label: "F5", width: 1 },
                { code: "F6", label: "F6", width: 1 },
                { code: "F7", label: "F7", width: 1 },
                { code: "F8", label: "F8", width: 1 },
                { code: null, label: "", width: 0.5 },
                { code: "F9", label: "F9", width: 1 },
                { code: "F10", label: "F10", width: 1 },
                { code: "F11", label: "F11", width: 1 },
                { code: "F12", label: "F12", width: 1 }
            ],
            // row 1: numbers
            [
                { code: "Backquote", label: "`", width: 1 },
                { code: "Digit1", label: "1", width: 1 },
                { code: "Digit2", label: "2", width: 1 },
                { code: "Digit3", label: "3", width: 1 },
                { code: "Digit4", label: "4", width: 1 },
                { code: "Digit5", label: "5", width: 1 },
                { code: "Digit6", label: "6", width: 1 },
                { code: "Digit7", label: "7", width: 1 },
                { code: "Digit8", label: "8", width: 1 },
                { code: "Digit9", label: "9", width: 1 },
                { code: "Digit0", label: "0", width: 1 },
                { code: "Minus", label: "-", width: 1 },
                { code: "Equal", label: "=", width: 1 },
                { code: "Backspace", label: "⌫", width: 2 }
            ],
            // row 2: qwerty
            [
                { code: "Tab", label: "Tab", width: 1.5 },
                { code: "KeyQ", label: "Q", width: 1 },
                { code: "KeyW", label: "W", width: 1 },
                { code: "KeyE", label: "E", width: 1 },
                { code: "KeyR", label: "R", width: 1 },
                { code: "KeyT", label: "T", width: 1 },
                { code: "KeyY", label: "Y", width: 1 },
                { code: "KeyU", label: "U", width: 1 },
                { code: "KeyI", label: "I", width: 1 },
                { code: "KeyO", label: "O", width: 1 },
                { code: "KeyP", label: "P", width: 1 },
                { code: "BracketLeft", label: "[", width: 1 },
                { code: "BracketRight", label: "]", width: 1 }
            ],
            // row 3: asdf (ISO has L-shaped Enter)
            [
                { code: "CapsLock", label: "Caps", width: 1.75 },
                { code: "KeyA", label: "A", width: 1 },
                { code: "KeyS", label: "S", width: 1 },
                { code: "KeyD", label: "D", width: 1 },
                { code: "KeyF", label: "F", width: 1 },
                { code: "KeyG", label: "G", width: 1 },
                { code: "KeyH", label: "H", width: 1 },
                { code: "KeyJ", label: "J", width: 1 },
                { code: "KeyK", label: "K", width: 1 },
                { code: "KeyL", label: "L", width: 1 },
                { code: "Semicolon", label: ";", width: 1 },
                { code: "Quote", label: "'", width: 1 },
                { code: "Backslash", label: "#", width: 1 },
                { code: "Enter", label: "↵", width: 1.25 }
            ],
            // row 4: zxcv (ISO has extra key)
            [
                { code: "ShiftLeft", label: "Shift", width: 1.25 },
                { code: "IntlBackslash", label: "\\", width: 1 }, // extra ISO key
                { code: "KeyZ", label: "Z", width: 1 },
                { code: "KeyX", label: "X", width: 1 },
                { code: "KeyC", label: "C", width: 1 },
                { code: "KeyV", label: "V", width: 1 },
                { code: "KeyB", label: "B", width: 1 },
                { code: "KeyN", label: "N", width: 1 },
                { code: "KeyM", label: "M", width: 1 },
                { code: "Comma", label: ",", width: 1 },
                { code: "Period", label: ".", width: 1 },
                { code: "Slash", label: "/", width: 1 },
                { code: "ShiftRight", label: "Shift", width: 2.75 }
            ],
            // row 5: space bar
            [
                { code: "ControlLeft", label: "Ctrl", width: 1.25 },
                { code: "MetaLeft", label: "Win", width: 1.25 },
                { code: "AltLeft", label: "Alt", width: 1.25 },
                { code: "Space", label: "", width: 6.25 },
                { code: "AltRight", label: "Alt", width: 1.25 },
                { code: "MetaRight", label: "Win", width: 1.25 },
                { code: "ContextMenu", label: "Menu", width: 1.25 },
                { code: "ControlRight", label: "Ctrl", width: 1.25 }
            ]
        ]
    },

    german: {
        name: "German (QWERTZ)",
        rows: [
            // row 0: function keys
            [
                { code: "Escape", label: "Esc", width: 1 },
                { code: null, label: "", width: 0.5 },
                { code: "F1", label: "F1", width: 1 },
                { code: "F2", label: "F2", width: 1 },
                { code: "F3", label: "F3", width: 1 },
                { code: "F4", label: "F4", width: 1 },
                { code: null, label: "", width: 0.5 },
                { code: "F5", label: "F5", width: 1 },
                { code: "F6", label: "F6", width: 1 },
                { code: "F7", label: "F7", width: 1 },
                { code: "F8", label: "F8", width: 1 },
                { code: null, label: "", width: 0.5 },
                { code: "F9", label: "F9", width: 1 },
                { code: "F10", label: "F10", width: 1 },
                { code: "F11", label: "F11", width: 1 },
                { code: "F12", label: "F12", width: 1 }
            ],
            // row 1: numbers
            [
                { code: "Backquote", label: "^", width: 1 },
                { code: "Digit1", label: "1", width: 1 },
                { code: "Digit2", label: "2", width: 1 },
                { code: "Digit3", label: "3", width: 1 },
                { code: "Digit4", label: "4", width: 1 },
                { code: "Digit5", label: "5", width: 1 },
                { code: "Digit6", label: "6", width: 1 },
                { code: "Digit7", label: "7", width: 1 },
                { code: "Digit8", label: "8", width: 1 },
                { code: "Digit9", label: "9", width: 1 },
                { code: "Digit0", label: "0", width: 1 },
                { code: "Minus", label: "ß", width: 1 },
                { code: "Equal", label: "´", width: 1 },
                { code: "Backspace", label: "⌫", width: 2 }
            ],
            // row 2: qwertz (note Y and Z swapped)
            [
                { code: "Tab", label: "Tab", width: 1.5 },
                { code: "KeyQ", label: "Q", width: 1 },
                { code: "KeyW", label: "W", width: 1 },
                { code: "KeyE", label: "E", width: 1 },
                { code: "KeyR", label: "R", width: 1 },
                { code: "KeyT", label: "T", width: 1 },
                { code: "KeyZ", label: "Z", width: 1 }, // Z in German
                { code: "KeyU", label: "U", width: 1 },
                { code: "KeyI", label: "I", width: 1 },
                { code: "KeyO", label: "O", width: 1 },
                { code: "KeyP", label: "P", width: 1 },
                { code: "BracketLeft", label: "Ü", width: 1 },
                { code: "BracketRight", label: "+", width: 1 }
            ],
            // row 3: asdf
            [
                { code: "CapsLock", label: "Caps", width: 1.75 },
                { code: "KeyA", label: "A", width: 1 },
                { code: "KeyS", label: "S", width: 1 },
                { code: "KeyD", label: "D", width: 1 },
                { code: "KeyF", label: "F", width: 1 },
                { code: "KeyG", label: "G", width: 1 },
                { code: "KeyH", label: "H", width: 1 },
                { code: "KeyJ", label: "J", width: 1 },
                { code: "KeyK", label: "K", width: 1 },
                { code: "KeyL", label: "L", width: 1 },
                { code: "Semicolon", label: "Ö", width: 1 },
                { code: "Quote", label: "Ä", width: 1 },
                { code: "Backslash", label: "#", width: 1 },
                { code: "Enter", label: "↵", width: 1.25 }
            ],
            // row 4: yxcv (Y in German position)
            [
                { code: "ShiftLeft", label: "Shift", width: 1.25 },
                { code: "IntlBackslash", label: "<", width: 1 },
                { code: "KeyY", label: "Y", width: 1 }, // Y in German
                { code: "KeyX", label: "X", width: 1 },
                { code: "KeyC", label: "C", width: 1 },
                { code: "KeyV", label: "V", width: 1 },
                { code: "KeyB", label: "B", width: 1 },
                { code: "KeyN", label: "N", width: 1 },
                { code: "KeyM", label: "M", width: 1 },
                { code: "Comma", label: ",", width: 1 },
                { code: "Period", label: ".", width: 1 },
                { code: "Slash", label: "-", width: 1 },
                { code: "ShiftRight", label: "Shift", width: 2.75 }
            ],
            // row 5: space bar
            [
                { code: "ControlLeft", label: "Strg", width: 1.25 },
                { code: "MetaLeft", label: "Win", width: 1.25 },
                { code: "AltLeft", label: "Alt", width: 1.25 },
                { code: "Space", label: "", width: 6.25 },
                { code: "AltRight", label: "Alt Gr", width: 1.25 },
                { code: "MetaRight", label: "Win", width: 1.25 },
                { code: "ContextMenu", label: "Menu", width: 1.25 },
                { code: "ControlRight", label: "Strg", width: 1.25 }
            ]
        ]
    },

    uk: {
        name: "UK",
        rows: [
            // row 0: function keys
            [
                { code: "Escape", label: "Esc", width: 1 },
                { code: null, label: "", width: 0.5 },
                { code: "F1", label: "F1", width: 1 },
                { code: "F2", label: "F2", width: 1 },
                { code: "F3", label: "F3", width: 1 },
                { code: "F4", label: "F4", width: 1 },
                { code: null, label: "", width: 0.5 },
                { code: "F5", label: "F5", width: 1 },
                { code: "F6", label: "F6", width: 1 },
                { code: "F7", label: "F7", width: 1 },
                { code: "F8", label: "F8", width: 1 },
                { code: null, label: "", width: 0.5 },
                { code: "F9", label: "F9", width: 1 },
                { code: "F10", label: "F10", width: 1 },
                { code: "F11", label: "F11", width: 1 },
                { code: "F12", label: "F12", width: 1 }
            ],
            // row 1: numbers
            [
                { code: "Backquote", label: "`", width: 1 },
                { code: "Digit1", label: "1", width: 1 },
                { code: "Digit2", label: "2", width: 1 },
                { code: "Digit3", label: "3", width: 1 },
                { code: "Digit4", label: "4", width: 1 },
                { code: "Digit5", label: "5", width: 1 },
                { code: "Digit6", label: "6", width: 1 },
                { code: "Digit7", label: "7", width: 1 },
                { code: "Digit8", label: "8", width: 1 },
                { code: "Digit9", label: "9", width: 1 },
                { code: "Digit0", label: "0", width: 1 },
                { code: "Minus", label: "-", width: 1 },
                { code: "Equal", label: "=", width: 1 },
                { code: "Backspace", label: "⌫", width: 2 }
            ],
            // row 2: qwerty
            [
                { code: "Tab", label: "Tab", width: 1.5 },
                { code: "KeyQ", label: "Q", width: 1 },
                { code: "KeyW", label: "W", width: 1 },
                { code: "KeyE", label: "E", width: 1 },
                { code: "KeyR", label: "R", width: 1 },
                { code: "KeyT", label: "T", width: 1 },
                { code: "KeyY", label: "Y", width: 1 },
                { code: "KeyU", label: "U", width: 1 },
                { code: "KeyI", label: "I", width: 1 },
                { code: "KeyO", label: "O", width: 1 },
                { code: "KeyP", label: "P", width: 1 },
                { code: "BracketLeft", label: "[", width: 1 },
                { code: "BracketRight", label: "]", width: 1 }
            ],
            // row 3: asdf
            [
                { code: "CapsLock", label: "Caps", width: 1.75 },
                { code: "KeyA", label: "A", width: 1 },
                { code: "KeyS", label: "S", width: 1 },
                { code: "KeyD", label: "D", width: 1 },
                { code: "KeyF", label: "F", width: 1 },
                { code: "KeyG", label: "G", width: 1 },
                { code: "KeyH", label: "H", width: 1 },
                { code: "KeyJ", label: "J", width: 1 },
                { code: "KeyK", label: "K", width: 1 },
                { code: "KeyL", label: "L", width: 1 },
                { code: "Semicolon", label: ";", width: 1 },
                { code: "Quote", label: "'", width: 1 },
                { code: "Backslash", label: "#", width: 1 },
                { code: "Enter", label: "↵", width: 1.25 }
            ],
            // row 4: zxcv
            [
                { code: "ShiftLeft", label: "Shift", width: 1.25 },
                { code: "IntlBackslash", label: "\\", width: 1 },
                { code: "KeyZ", label: "Z", width: 1 },
                { code: "KeyX", label: "X", width: 1 },
                { code: "KeyC", label: "C", width: 1 },
                { code: "KeyV", label: "V", width: 1 },
                { code: "KeyB", label: "B", width: 1 },
                { code: "KeyN", label: "N", width: 1 },
                { code: "KeyM", label: "M", width: 1 },
                { code: "Comma", label: ",", width: 1 },
                { code: "Period", label: ".", width: 1 },
                { code: "Slash", label: "/", width: 1 },
                { code: "ShiftRight", label: "Shift", width: 2.75 }
            ],
            // row 5: space bar
            [
                { code: "ControlLeft", label: "Ctrl", width: 1.25 },
                { code: "MetaLeft", label: "Win", width: 1.25 },
                { code: "AltLeft", label: "Alt", width: 1.25 },
                { code: "Space", label: "", width: 6.25 },
                { code: "AltRight", label: "Alt", width: 1.25 },
                { code: "MetaRight", label: "Win", width: 1.25 },
                { code: "ContextMenu", label: "Menu", width: 1.25 },
                { code: "ControlRight", label: "Ctrl", width: 1.25 }
            ]
        ]
    }
};

