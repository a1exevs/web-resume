export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeLabel(label: string): string {
  if (!label) {
    return label;
  }
  const separatedWords = label.toUpperCase().split(' ');
  return separatedWords.map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ');
}

export function toUnderscore(str: string) {
  return str.trim().replace(/\s+/g, '_');
}

/**
 * Returns array of english chars
 */
export function getCharArray(): string[] {
  return [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
}
