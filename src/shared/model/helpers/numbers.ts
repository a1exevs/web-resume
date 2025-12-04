/**
 * Returns random integer number
 * @param min - min value
 * @param max - max value
 */
export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Returns random float number
 * @param min - min value
 * @param max - max value
 */
export function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
