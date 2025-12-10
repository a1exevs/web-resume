import { randomFloat, randomInt } from 'src/shared/model/helpers/numbers';
import { getCharArray } from 'src/shared/model/helpers/strings';
import {
  CANVAS_BACKGROUND_COLOR,
  CHAR_COLOR,
  CHAR_SPEED_DEFAULT_MAX_VALUE,
  CHAR_SPEED_DEFAULT_VALUE,
  CHAR_SPEED_MAX_AVAILABLE_VALUE,
  CHAR_SPEED_MIN_VALUE,
  CHAR_TRACK_COLOR,
} from 'src/shared/ui/matrix-canvas/matrix-canvas.consts';

export type SpeedChangeOptions = {
  intervalMs: number;
};

export class Point {
  private readonly x: number;
  private y: number;
  private speed = CHAR_SPEED_DEFAULT_VALUE;
  private value = '';

  private readonly charTrackColor = CHAR_TRACK_COLOR;
  private readonly charColor = CHAR_COLOR;

  // TODO: rewrite with using rem
  static readonly fontSize = 20;
  static readonly vStartOffset = 1080;
  static readonly minSpeed = CHAR_SPEED_MIN_VALUE;
  static readonly maxAvailableSpeed = CHAR_SPEED_MAX_AVAILABLE_VALUE;
  static maxSpeed = CHAR_SPEED_DEFAULT_MAX_VALUE;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static generateCharStartY(): number {
    return randomFloat(-Point.vStartOffset, 0);
  }

  draw({
    context1,
    context2,
    canvasHeight,
  }: {
    context1: CanvasRenderingContext2D;
    context2: CanvasRenderingContext2D;
    canvasHeight: number;
  }): void {
    const charArr = getCharArray();
    this.value = charArr[randomInt(0, charArr.length - 1)].toUpperCase();
    this.speed = randomFloat(Point.minSpeed, Point.maxSpeed);

    context1.fillStyle = this.charTrackColor;
    context1.font = `${Point.fontSize}px sans-serif`;
    context1.fillText(this.value, this.x, this.y);

    context2.fillStyle = this.charColor;
    context2.font = `${Point.fontSize}px sans-serif`;
    context2.fillText(this.value, this.x, this.y);

    this.y += this.speed;
    if (this.y > canvasHeight) {
      this.y = Point.generateCharStartY();
    }
  }
}

export function setupCharsSpeedChangeInterval(options: SpeedChangeOptions): number {
  return window.setInterval(() => {
    Point.maxSpeed = randomInt(Point.minSpeed, Point.maxAvailableSpeed);
  }, options.intervalMs);
}

export function createFallingChars(width: number): Point[] {
  const charsCountInLine = Math.floor(width / Point.fontSize);
  const fallingCharArr: Point[] = [];

  for (let i = 0; i < charsCountInLine; i++) {
    fallingCharArr.push(new Point(i * Point.fontSize, Point.generateCharStartY()));
  }

  return fallingCharArr;
}

export function drawFrame({
  context1,
  context2,
  height,
  width,
  fallingCharArr,
}: {
  context1: CanvasRenderingContext2D;
  context2: CanvasRenderingContext2D;
  width: number;
  height: number;
  fallingCharArr: Point[];
}): void {
  context1.fillStyle = CANVAS_BACKGROUND_COLOR;
  context1.fillRect(0, 0, width, height);

  context2.clearRect(0, 0, width, height);

  let i = fallingCharArr.length;

  while (i--) {
    fallingCharArr[i].draw({ context1, context2, canvasHeight: height });
  }
}
