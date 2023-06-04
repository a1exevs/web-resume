/**
 * Returns random integer number
 * @param min
 * @param max
 */
export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Returns random float number
 * @param min
 * @param max
 */
export function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
