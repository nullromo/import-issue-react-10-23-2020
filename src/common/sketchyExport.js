const randomThingy = { ['soda']: 'wizard' };

((exports) => {
    exports.sketchyExport = 'lemon';
})(typeof exports === 'undefined' ? {} : exports);
