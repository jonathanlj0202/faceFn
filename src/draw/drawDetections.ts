import { Box, IBoundingBox, IRect } from '../classes';
import { FaceDetection } from '../classes/FaceDetection';
import { isWithFaceDetection, WithFaceDetection } from '../factories/WithFaceDetection';
import { round } from '../utils';
import { DrawBox } from './DrawBox';

export type TDrawDetectionsInput = IRect | IBoundingBox | FaceDetection | WithFaceDetection<{}>

export function drawDetections(
  canvasArg: string | HTMLCanvasElement,
  detections: TDrawDetectionsInput | Array<TDrawDetectionsInput>,
  labBoo: boolean
) {
  const detectionsArray = Array.isArray(detections) ? detections : [detections]
  let boxWidthArray = new Array();
  detectionsArray.forEach(det => {
    const score = det instanceof FaceDetection
      ? det.score
      : (isWithFaceDetection(det) ? det.detection.score : undefined)

    const box = det instanceof FaceDetection
      ? det.box
      : (isWithFaceDetection(det) ? det.detection.box : new Box(det))

    let label = score ? `${round(score)}` : undefined

    if (labBoo) {
      label = ""
    }
    const boxWidth = new DrawBox(box, { label }).draw(canvasArg)
    boxWidthArray.push(boxWidth);
  })
  return boxWidthArray
}