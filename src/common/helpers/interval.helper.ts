/**
 *
 * @param callback
 * @param delay
 */
export function throttleTime<T extends unknown[]>(callback: (...args: T) => unknown, delay = 250) {
  let shouldWait = false;
  let lastArgs: Parameters<typeof callback>;

  return (...args: Parameters<typeof callback>) => {
    lastArgs = args;
    if (shouldWait) {
      return;
    }

    shouldWait = true;
    setTimeout(() => {
      callback(...lastArgs);
      shouldWait = false;
    }, delay);
  };
}
