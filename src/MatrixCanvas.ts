import { randomFloat, randomInt } from 'src/common/helpers/number.helper';
import { getCharArray } from 'src/common/helpers/string.helper';
import { isNull } from 'src/common/helpers/type-guards.helper';

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

class Point {
  private readonly x: number;
  private y: number;
  private speed = 1;
  private value = '';

  private readonly charTrackColor = '#0F0';
  private readonly charColor = '#ffffffcc';

  static readonly fontSize = 20;
  static readonly vStartOffset = 1080;
  static readonly minSpeed = 1;
  static readonly maxAvailableSpeed = 100;
  static readonly speedChangeInterval = 15000;
  static maxSpeed = 100;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static generateCharStartY() {
    return randomFloat(-Point.vStartOffset, 0);
  }

  draw(context1: CanvasRenderingContext2D, context2: CanvasRenderingContext2D) {
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
    if (this.y > HEIGHT) {
      this.y = Point.generateCharStartY();
    }
  }
}

function setupCharsSpeedChangeInterval(): void {
  setInterval(() => {
    Point.maxSpeed = randomInt(Point.minSpeed, Point.maxAvailableSpeed);
  }, Point.speedChangeInterval);
}

function fillArrayWithChars(fallingCharArr: Point[], charsCount: number) {
  for (let i = 0; i < charsCount; i++) {
    fallingCharArr.push(new Point(i * Point.fontSize, Point.generateCharStartY()));
  }
}

const charsCountInLine = Math.floor(WIDTH / Point.fontSize);
const fallingCharArr: Point[] = [];

const canvas1 = document.getElementById('canvas1') as HTMLCanvasElement | null;
const canvas2 = document.getElementById('canvas2') as HTMLCanvasElement | null;
const canvasBackgroundColor = '#0000000d';

let context1: CanvasRenderingContext2D | null = null;
let context2: CanvasRenderingContext2D | null = null;

if (!isNull(canvas1) && !isNull(canvas2)) {
  canvas1.width = canvas2.width = WIDTH;
  canvas1.height = canvas2.height = HEIGHT;

  context1 = canvas1.getContext('2d');
  context2 = canvas2.getContext('2d');

  if (!isNull(context1) && !isNull(context2)) {
    fillArrayWithChars(fallingCharArr, charsCountInLine);
    setupCharsSpeedChangeInterval();
  }
}

export function drawMatrixCanvas() {
  if (isNull(context1) || isNull(context2)) {
    return;
  }
  context1.fillStyle = canvasBackgroundColor;
  context1.fillRect(0, 0, WIDTH, HEIGHT);

  context2.clearRect(0, 0, WIDTH, HEIGHT);

  let i = fallingCharArr.length;

  while (i--) {
    fallingCharArr[i].draw(context1, context2);
  }

  requestAnimationFrame(drawMatrixCanvas);
}
