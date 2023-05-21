/**
 * Returns date as string in format 'DD.MM.YYYY'
 * @param date
 */
export function dateToString(date: Date): string {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}
