"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabeledBox = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("../utils");
var Box_1 = require("./Box");
var LabeledBox = /** @class */ (function (_super) {
    tslib_1.__extends(LabeledBox, _super);
    function LabeledBox(box, label) {
        var _this = _super.call(this, box) || this;
        _this._label = label;
        return _this;
    }
    LabeledBox.assertIsValidLabeledBox = function (box, callee) {
        Box_1.Box.assertIsValidBox(box, callee);
        if (!utils_1.isValidNumber(box.label)) {
            throw new Error(callee + " - expected property label (" + box.label + ") to be a number");
        }
    };
    Object.defineProperty(LabeledBox.prototype, "label", {
        get: function () { return this._label; },
        enumerable: false,
        configurable: true
    });
    return LabeledBox;
}(Box_1.Box));
exports.LabeledBox = LabeledBox;
//# sourceMappingURL=LabeledBox.js.map