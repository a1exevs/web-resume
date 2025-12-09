import React, { useEffect, useRef } from 'react';

import {
  createFallingChars,
  defaultSpeedChangeOptions,
  drawFrame,
  Point,
  setupCharsSpeedChangeInterval,
  SpeedChangeOptions,
} from 'src/shared/ui/matrix-canvas/matrix-canvas-core';

type Props = {
  speedChangeOptions?: SpeedChangeOptions;
};

/**
 * MatrixCanvas React component
 *
 * Initialization:
 * 1) Add in your App.tsx
 *    <MatrixCanvas />
 * 2) import 'matrix-canvas.scss' in your index.scss
 */
export const MatrixCanvas: React.FC<Props> = ({ speedChangeOptions = defaultSpeedChangeOptions }) => {
  const canvas1Ref = useRef<HTMLCanvasElement | null>(null);
  const canvas2Ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas1 = canvas1Ref.current;
    const canvas2 = canvas2Ref.current;

    if (!canvas1 || !canvas2) {
      return;
    }

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    canvas1.width = canvas2.width = WIDTH;
    canvas1.height = canvas2.height = HEIGHT;

    const context1 = canvas1.getContext('2d');
    const context2 = canvas2.getContext('2d');

    if (!context1 || !context2) {
      return;
    }

    const fallingCharArr: Point[] = createFallingChars(WIDTH);

    let animationFrameId: number;
    let intervalId: number | undefined;

    if (speedChangeOptions.intervalMs > 0) {
      intervalId = setupCharsSpeedChangeInterval(speedChangeOptions);
    }

    const draw = () => {
      drawFrame({ context1, context2, width: WIDTH, height: HEIGHT, fallingCharArr });
      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [speedChangeOptions]);

  return (
    <>
      <canvas className="matrix-canvas" ref={canvas1Ref} />
      <canvas className="matrix-canvas" ref={canvas2Ref} />
    </>
  );
};

export default MatrixCanvas;
