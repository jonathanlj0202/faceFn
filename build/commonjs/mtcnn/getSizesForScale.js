"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSizesForScale = void 0;
function getSizesForScale(scale, _a) {
    var height = _a[0], width = _a[1];
    return {
        height: Math.floor(height * scale),
        width: Math.floor(width * scale)
    };
}
exports.getSizesForScale = getSizesForScale;
//# sourceMappingURL=getSizesForScale.js.map