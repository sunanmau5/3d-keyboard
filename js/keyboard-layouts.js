// keyboard layout definitions for ANSI, ISO, German, and UK layouts

// OS-specific bottom rows
const BOTTOM_ROWS = {
    mac: [
        { code: "Fn", label: "Fn", width: 1 },
        { code: "ControlLeft", label: "⌃", width: 1 },
        { code: "AltLeft", label: "⌥", width: 1 },
        { code: "MetaLeft", label: "⌘", width: 1.25 },
        { code: "Space", label: "", width: 6.5 },
        { code: "MetaRight", label: "⌘", width: 1.25 },
        { code: "AltRight", label: "⌥", width: 1 },
        { code: "ControlRight", label: "⌃", width: 1 }
    ],
    windows: [
        { code: "ControlLeft", label: "Ctrl", width: 1.25 },
        { code: "MetaLeft", label: "Win", width: 1.25 },
        { code: "AltLeft", label: "Alt", width: 1.25 },
        { code: "Space", label: "", width: 6.25 },
        { code: "AltRight", label: "Alt", width: 1.25 },
        { code: "MetaRight", label: "Win", width: 1.25 },
        { code: "ContextMenu", label: "Menu", width: 1.25 },
        { code: "ControlRight", label: "Ctrl", width: 1.25 }
    ],
    linux: [
        { code: "ControlLeft", label: "Ctrl", width: 1.25 },
        { code: "MetaLeft", label: "Super", width: 1.25 },
        { code: "AltLeft", label: "Alt", width: 1.25 },
        { code: "Space", label: "", width: 6.25 },
        { code: "AltRight", label: "Alt", width: 1.25 },
        { code: "MetaRight", label: "Super", width: 1.25 },
        { code: "ContextMenu", label: "Menu", width: 1.25 },
        { code: "ControlRight", label: "Ctrl", width: 1.25 }
    ]
};

// function row removed for cleaner look

// helper function to create OS-specific layout variant
function createOSVariant(baseRows, os, layoutName) {
    return {
        name: `${layoutName} - ${os.charAt(0).toUpperCase() + os.slice(1)}`,
        rows: [...baseRows.slice(0, -1), BOTTOM_ROWS[os]]
    };
}

// Base layout rows (without bottom row)
const BASE_LAYOUTS = {
    ansi: [
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
        BOTTOM_ROWS.windows // default to windows for base
    ],

    iso: [
        [
            { code: "IntlBackslash", label: "§", width: 1 },
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
        [
            { code: "ShiftLeft", label: "Shift", width: 1.25 },
            { code: "Backquote", label: "<", width: 1 },
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
        BOTTOM_ROWS.windows
    ],

    german: [
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
        [
            { code: "Tab", label: "Tab", width: 1.5 },
            { code: "KeyQ", label: "Q", width: 1 },
            { code: "KeyW", label: "W", width: 1 },
            { code: "KeyE", label: "E", width: 1 },
            { code: "KeyR", label: "R", width: 1 },
            { code: "KeyT", label: "T", width: 1 },
            { code: "KeyZ", label: "Z", width: 1 },
            { code: "KeyU", label: "U", width: 1 },
            { code: "KeyI", label: "I", width: 1 },
            { code: "KeyO", label: "O", width: 1 },
            { code: "KeyP", label: "P", width: 1 },
            { code: "BracketLeft", label: "Ü", width: 1 },
            { code: "BracketRight", label: "+", width: 1 }
        ],
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
        [
            { code: "ShiftLeft", label: "Shift", width: 1.25 },
            { code: "IntlBackslash", label: "<", width: 1 },
            { code: "KeyY", label: "Y", width: 1 },
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
        BOTTOM_ROWS.windows
    ],

    uk: [
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
        BOTTOM_ROWS.windows
    ]
};

// Build the layout library
export const KEYBOARD_LAYOUTS = {};

// Create base layouts
['ansi', 'iso', 'german', 'uk'].forEach(layoutName => {
    KEYBOARD_LAYOUTS[layoutName] = {
        name: layoutName === 'ansi' ? 'ANSI (US)' :
              layoutName === 'iso' ? 'ISO (European)' :
              layoutName === 'german' ? 'German (QWERTZ)' :
              'UK',
        rows: BASE_LAYOUTS[layoutName]
    };
});

// Create OS-specific variants for all layouts
['ansi', 'iso', 'german', 'uk'].forEach(layoutName => {
    const baseRows = BASE_LAYOUTS[layoutName];
    const displayName = KEYBOARD_LAYOUTS[layoutName].name;

    ['mac', 'windows', 'linux'].forEach(os => {
        KEYBOARD_LAYOUTS[`${layoutName}_${os}`] = createOSVariant(baseRows, os, displayName);
    });
});
