import { IPoint, Point } from '../classes';
import { FaceExpressions } from '../faceExpressionNet';
import { isWithFaceDetection } from '../factories/WithFaceDetection';
import { isWithFaceExpressions, WithFaceExpressions } from '../factories/WithFaceExpressions';
import { round } from '../utils';
import { DrawTextField } from './DrawTextField';

export type DrawFaceExpressionsInput = FaceExpressions | WithFaceExpressions<{}>

export function drawFaceExpressions(
  canvasArg: string | HTMLCanvasElement,
  faceExpressions: DrawFaceExpressionsInput | Array<DrawFaceExpressionsInput>,
  minConfidence = 0.1,
  boxWidth: number,
  textFieldAnchor?: IPoint
) {
  const faceExpressionsArray = Array.isArray(faceExpressions) ? faceExpressions : [faceExpressions]

  faceExpressionsArray.forEach(e => {
    const expr = e instanceof FaceExpressions
      ? e
      : (isWithFaceExpressions(e) ? e.expressions : undefined)
    if (!expr) {
      throw new Error('drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof')
    }

    const sorted = expr.asSortedArray()
    const resultsToDisplay = sorted.filter(expr => expr.probability > minConfidence)
    let drawText = "nohappy"
    resultsToDisplay.map(expr => {
      if (expr.expression === 'happy') {
        drawText = 'happy'
      }
    })
    const anchor = isWithFaceDetection(e)
      ? e.detection.box.topLeft
      : (textFieldAnchor || new Point(0, 0))

    const drawTextField = new DrawTextField(
      drawText,
      anchor
    )
    drawTextField.draw(canvasArg, drawText, boxWidth)
  })
}