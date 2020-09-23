import { getContext2dOrThrow } from '../dom/getContext2dOrThrow';
import { resolveInput } from '../dom/resolveInput';
export var AnchorPosition;
(function (AnchorPosition) {
    AnchorPosition["TOP_LEFT"] = "TOP_LEFT";
    AnchorPosition["TOP_RIGHT"] = "TOP_RIGHT";
    AnchorPosition["BOTTOM_LEFT"] = "BOTTOM_LEFT";
    AnchorPosition["BOTTOM_RIGHT"] = "BOTTOM_RIGHT";
})(AnchorPosition || (AnchorPosition = {}));
var DrawTextFieldOptions = /** @class */ (function () {
    function DrawTextFieldOptions(options) {
        if (options === void 0) { options = {}; }
        var anchorPosition = options.anchorPosition, backgroundColor = options.backgroundColor, fontColor = options.fontColor, fontSize = options.fontSize, fontStyle = options.fontStyle, padding = options.padding;
        this.anchorPosition = anchorPosition || AnchorPosition.TOP_LEFT;
        this.backgroundColor = backgroundColor || 'rgba(255, 255, 255, 0)';
        this.fontColor = fontColor || '#008bf0';
        this.fontSize = fontSize || 28;
        this.fontStyle = fontStyle || 'normal';
        this.padding = padding || 20;
    }
    return DrawTextFieldOptions;
}());
export { DrawTextFieldOptions };
var DrawTextField = /** @class */ (function () {
    function DrawTextField(text, anchor, options) {
        if (options === void 0) { options = {}; }
        this.text = typeof text === 'string'
            ? [text]
            : (text instanceof DrawTextField ? text.text : text);
        this.anchor = anchor;
        this.options = new DrawTextFieldOptions(options);
    }
    DrawTextField.prototype.measureWidth = function (ctx) {
        var padding = this.options.padding;
        return this.text.map(function (l) { return ctx.measureText(l).width; }).reduce(function (w0, w1) { return w0 < w1 ? w1 : w0; }, 0) + (2 * padding);
    };
    DrawTextField.prototype.measureHeight = function () {
        var _a = this.options, fontSize = _a.fontSize, padding = _a.padding;
        return this.text.length * fontSize + (2 * padding);
    };
    DrawTextField.prototype.getUpperLeft = function (ctx, canvasDims) {
        var anchorPosition = this.options.anchorPosition;
        var isShiftLeft = anchorPosition === AnchorPosition.BOTTOM_RIGHT || anchorPosition === AnchorPosition.TOP_RIGHT;
        var isShiftTop = anchorPosition === AnchorPosition.BOTTOM_LEFT || anchorPosition === AnchorPosition.BOTTOM_RIGHT;
        var textFieldWidth = this.measureWidth(ctx);
        var textFieldHeight = this.measureHeight();
        var x = (isShiftLeft ? this.anchor.x - textFieldWidth : this.anchor.x);
        var y = isShiftTop ? this.anchor.y - textFieldHeight : this.anchor.y;
        // adjust anchor if text box exceeds canvas borders
        if (canvasDims) {
            var width = canvasDims.width, height = canvasDims.height;
            var newX = Math.max(Math.min(x, width - textFieldWidth), 0);
            var newY = Math.max(Math.min(y, height - textFieldHeight), 0);
            return { x: newX, y: newY };
        }
        return { x: x, y: y };
    };
    DrawTextField.prototype.draw = function (canvasArg, happyStr, boxWidth) {
        var canvas = resolveInput(canvasArg);
        var ctx = getContext2dOrThrow(canvas);
        if (happyStr) {
            var happyImg = new Image();
            happyImg.src = "data:image/png;base64,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";
            var nohappyImg = new Image();
            nohappyImg.src = "data:image/png;base64,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";
            var upperLeft = this.getUpperLeft(ctx, canvas);
            var x = upperLeft.x + (Number(boxWidth) / 2) - 30;
            var y = upperLeft.y - 70;
            if (happyStr === "happy") {
                ctx.drawImage(happyImg, x, y, 60, 60);
            }
            else {
                ctx.drawImage(nohappyImg, x, y, 60, 60);
            }
        }
        else {
            var _a = this.options, backgroundColor = _a.backgroundColor, fontColor = _a.fontColor, fontSize_1 = _a.fontSize, fontStyle = _a.fontStyle, padding_1 = _a.padding;
            // const paddingW = (Number(boxWidth) / 2) - 70;
            ctx.font = fontSize_1 + "px " + fontStyle;
            var maxTextWidth = this.measureWidth(ctx);
            var textHeight_1 = this.measureHeight();
            ctx.fillStyle = backgroundColor;
            var upperLeft_1 = this.getUpperLeft(ctx, canvas);
            ctx.fillRect(upperLeft_1.x, upperLeft_1.y - textHeight_1, maxTextWidth, textHeight_1);
            ctx.fillStyle = fontColor;
            this.text.forEach(function (textLine, i) {
                var x = padding_1 + upperLeft_1.x;
                var y = padding_1 + upperLeft_1.y - textHeight_1 + ((i + 1) * fontSize_1);
                ctx.fillText(textLine, x, y);
            });
        }
    };
    return DrawTextField;
}());
export { DrawTextField };
//# sourceMappingURL=DrawTextField.js.map