"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTinyFaceDetector = void 0;
var tslib_1 = require("tslib");
var TinyFaceDetector_1 = require("./TinyFaceDetector");
tslib_1.__exportStar(require("./TinyFaceDetector"), exports);
tslib_1.__exportStar(require("./TinyFaceDetectorOptions"), exports);
function createTinyFaceDetector(weights) {
    var net = new TinyFaceDetector_1.TinyFaceDetector();
    net.extractWeights(weights);
    return net;
}
exports.createTinyFaceDetector = createTinyFaceDetector;
//# sourceMappingURL=index.js.map