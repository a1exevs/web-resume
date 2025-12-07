export function clampIndex(index: number, max: number): number {
  if (max <= 0) {
    return -1;
  }
  if (index < 0) {
    return 0;
  }
  if (index >= max) {
    return max - 1;
  }
  return index;
}
