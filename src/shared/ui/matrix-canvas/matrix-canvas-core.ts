import { randomFloat, randomInt } from 'src/shared/model/helpers/numbers';
import { getCharArray } from 'src/shared/model/helpers/strings';

export type SpeedChangeOptions = {
  intervalMs: number;
};

export const defaultSpeedChangeOptions = { intervalMs: 0 };

export const canvasBackgroundColor = '#0000000d';

export class Point {
  private readonly x: number;
  private y: number;
  private speed = 10;
  private value = '';

  private readonly charTrackColor = '#0F0';
  private readonly charColor = '#ffffffcc';

  static readonly fontSize = 20;
  static readonly vStartOffset = 1080;
  static readonly minSpeed = 1;
  static readonly maxAvailableSpeed = 10;
  static maxSpeed = 10;

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
    context1.font = `${Point.fontSize}px san-serif`;
    context1.fillText(this.value, this.x, this.y);

    context2.fillStyle = this.charColor;
    context2.font = `${Point.fontSize}px san-serif`;
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
  context1.fillStyle = canvasBackgroundColor;
  context1.fillRect(0, 0, width, height);

  context2.clearRect(0, 0, width, height);

  let i = fallingCharArr.length;

  while (i--) {
    fallingCharArr[i].draw({ context1, context2, canvasHeight: height });
  }
}
