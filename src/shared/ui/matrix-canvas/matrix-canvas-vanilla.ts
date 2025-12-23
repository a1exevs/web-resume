import { isNull, Nullable } from '@alexevs/ts-guards';

import {
  createFallingChars,
  drawFrame,
  Point,
  setupCharsSpeedChangeInterval,
  SpeedChangeOptions,
} from 'src/shared/ui/matrix-canvas/matrix-canvas-core';
import { defaultSpeedChangeOptions } from 'src/shared/ui/matrix-canvas/matrix-canvas.consts';

/**
 * Matrix Canvas (Vanilla JS)
 *
 * Initialization:
 * 1) Add in your index.html
 *    <canvas class="matrix-canvas" id="matrix-canvas1">Canvas is not supported in your browser.</canvas>
 *    <canvas class="matrix-canvas" id="matrix-canvas2">Canvas is not supported in your browser.</canvas>
 * 2) import 'matrix-canvas.scss' in your index.scss
 * 3) call initMatrixCanvas() and drawMatrixCanvas() in your index.ts
 */

let WIDTH = -1;
let HEIGHT = -1;

let canvas1 = null;
let canvas2 = null;
let context1: Nullable<CanvasRenderingContext2D> = null;
let context2: Nullable<CanvasRenderingContext2D> = null;
let fallingCharArr: Point[] = [];

export function initMatrixCanvas(
  params: { speedChangeOptions: SpeedChangeOptions } = { speedChangeOptions: defaultSpeedChangeOptions },
): void {
  const { speedChangeOptions } = params;

  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;

  canvas1 = document.getElementById('matrix-canvas1') as Nullable<HTMLCanvasElement>;
  canvas2 = document.getElementById('matrix-canvas2') as Nullable<HTMLCanvasElement>;
  context1 = null;
  context2 = null;
  fallingCharArr = [];

  if (!isNull(canvas1) && !isNull(canvas2)) {
    canvas1.width = canvas2.width = WIDTH;
    canvas1.height = canvas2.height = HEIGHT;

    context1 = canvas1.getContext('2d');
    context2 = canvas2.getContext('2d');

    if (!isNull(context1) && !isNull(context2)) {
      fallingCharArr = createFallingChars(WIDTH);
      if (speedChangeOptions.intervalMs > 0) {
        setupCharsSpeedChangeInterval(speedChangeOptions);
      }
    }
  }
}

export function drawMatrixCanvas(): void {
  if (isNull(context1) || isNull(context2) || fallingCharArr.length === 0) {
    return;
  }
  drawFrame({ context1, context2, width: WIDTH, height: HEIGHT, fallingCharArr });

  requestAnimationFrame(drawMatrixCanvas);
}
