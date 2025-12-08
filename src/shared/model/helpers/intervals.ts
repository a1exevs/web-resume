import { isNull, Nullable } from '@alexevs/ts-guards';

import { DEFAULT_DELAY_MS } from 'src/shared/model/consts/common';

/**
 *
 * @param callback - callback function
 * @param delay - delay in milliseconds
 * @param options - options
 */
export function throttleTime<T extends unknown[]>(
  callback: (...args: T) => unknown,
  delay = DEFAULT_DELAY_MS,
  options: { leading: boolean; trailing: boolean } = { leading: true, trailing: false },
) {
  let shouldWait = false;
  let lastArgs: Parameters<typeof callback>;
  return function (this: ThisParameterType<typeof callback>, ...args: Parameters<typeof callback>) {
    lastArgs = args;
    if (shouldWait) {
      return;
    }

    const { leading, trailing } = options;
    shouldWait = true;
    setTimeout(() => {
      if (trailing) {
        callback.apply(this, lastArgs);
      }
      shouldWait = false;
    }, delay);
    if (leading) {
      callback.apply(this, args);
    }
  };
}

/**
 *
 * @param callback - callback function
 * @param delay - delay in milliseconds
 */
export function debounceTime<T extends unknown[]>(
  callback: (...args: T) => void,
  delay = DEFAULT_DELAY_MS,
): (...args: Parameters<typeof callback>) => void {
  let timeoutId: Nullable<ReturnType<typeof setTimeout>> = null;
  return function (this: ThisParameterType<typeof callback>, ...args: Parameters<typeof callback>): void {
    if (!isNull(timeoutId)) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback.apply(this, args);
      timeoutId = null;
    }, delay);
  };
}
