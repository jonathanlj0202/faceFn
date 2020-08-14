"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTinyYolov2 = exports.TinyYolov2 = void 0;
var tslib_1 = require("tslib");
var TinyYolov2_1 = require("./TinyYolov2");
Object.defineProperty(exports, "TinyYolov2", { enumerable: true, get: function () { return TinyYolov2_1.TinyYolov2; } });
tslib_1.__exportStar(require("./TinyYolov2Options"), exports);
tslib_1.__exportStar(require("./config"), exports);
tslib_1.__exportStar(require("./types"), exports);
function createTinyYolov2(weights, withSeparableConvs) {
    if (withSeparableConvs === void 0) { withSeparableConvs = true; }
    var net = new TinyYolov2_1.TinyYolov2(withSeparableConvs);
    net.extractWeights(weights);
    return net;
}
exports.createTinyYolov2 = createTinyYolov2;
//# sourceMappingURL=index.js.map