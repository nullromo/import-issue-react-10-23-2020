const randomThingy = { ['soda']: 'wizard' };

((exports) => {
    exports.sketchyExport = { sketchy: 'lemon' };
})(typeof exports === 'undefined' ? {} : exports);
