import { Point } from '../classes';
import { FaceExpressions } from '../faceExpressionNet';
import { isWithFaceDetection } from '../factories/WithFaceDetection';
import { isWithFaceExpressions } from '../factories/WithFaceExpressions';
import { DrawTextField } from './DrawTextField';
export function drawFaceExpressions(canvasArg, faceExpressions, minConfidence, boxWidth, textFieldAnchor) {
    if (minConfidence === void 0) { minConfidence = 0.1; }
    var faceExpressionsArray = Array.isArray(faceExpressions) ? faceExpressions : [faceExpressions];
    faceExpressionsArray.forEach(function (e) {
        var expr = e instanceof FaceExpressions
            ? e
            : (isWithFaceExpressions(e) ? e.expressions : undefined);
        if (!expr) {
            throw new Error('drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof');
        }
        var sorted = expr.asSortedArray();
        var resultsToDisplay = sorted.filter(function (expr) { return expr.probability > minConfidence; });
        var drawText = "nohappy";
        resultsToDisplay.map(function (expr) {
            if (expr.expression === 'happy') {
                drawText = 'happy';
            }
        });
        var anchor = isWithFaceDetection(e)
            ? e.detection.box.topLeft
            : (textFieldAnchor || new Point(0, 0));
        var drawTextField = new DrawTextField(drawText, anchor);
        drawTextField.draw(canvasArg, drawText, boxWidth);
    });
}
//# sourceMappingURL=drawFaceExpressions.js.map