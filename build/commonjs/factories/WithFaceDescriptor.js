"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendWithFaceDescriptor = void 0;
function extendWithFaceDescriptor(sourceObj, descriptor) {
    var extension = { descriptor: descriptor };
    return Object.assign({}, sourceObj, extension);
}
exports.extendWithFaceDescriptor = extendWithFaceDescriptor;
//# sourceMappingURL=WithFaceDescriptor.js.map