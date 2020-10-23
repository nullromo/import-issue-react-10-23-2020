const randomThingy = { ['soda']: 'wizard' }; // <== Problematic line

((exports) => {
    exports.sketchyExport = 'lemon';
})(typeof exports === 'undefined' ? {} : exports);
