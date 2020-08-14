"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendWithFaceExpressions = exports.isWithFaceExpressions = void 0;
var FaceExpressions_1 = require("../faceExpressionNet/FaceExpressions");
function isWithFaceExpressions(obj) {
    return obj['expressions'] instanceof FaceExpressions_1.FaceExpressions;
}
exports.isWithFaceExpressions = isWithFaceExpressions;
function extendWithFaceExpressions(sourceObj, expressions) {
    var extension = { expressions: expressions };
    return Object.assign({}, sourceObj, extension);
}
exports.extendWithFaceExpressions = extendWithFaceExpressions;
//# sourceMappingURL=WithFaceExpressions.js.map