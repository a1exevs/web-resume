/**
 * For adding a new svg-icon
 * 1) convert svg to symbol manually or with using online-converters
 *   (for example, https://svg-to-symbol-app.pages.dev)
 *   @example
 *   SVG:
 *   <svg
 *     xmlns="http://www.w3.org/2000/svg"
 *     width="10"
 *     height="10"
 *   >
 *     <rect
 *       width="10"
 *       height="10"
 *       fill="green"
 *     />
 *   </svg>
 *
 *   Symbol:
 *   <symbol
 *     id="svg-b0dfq0d60"
 *     viewBox="0 0 10 10"
 *     xmlns="http://www.w3.org/2000/svg"
 *   >
 *     <path
 *       fill="green"
 *       d="M0 0h10v10H0z"
 *     />
 *   </symbol>
 * 2) remove extra attributes such as xmlns
 * 3) replace fill/color attribute value with 'currentColor'
 * 4) use your unique and simple id. You need to add this id in IconName
 * 5) add new symbol in icons.svg (src/assets/icons/icons.svg)
 *   @example
 *   Symbol:
 *   <symbol
 *     id="rect"
 *     viewBox="0 0 10 10"
 *   >
 *     <path
 *       fill="currentColor"
 *       d="M0 0h10v10H0z"
 *     />
 *   </symbol>
 *   @see IconName
 */
export enum IconName {
  RECT = 'rect',
  GITHUB = 'github',
  HEAD_HUNTER = 'head-hunter',
  LINKEDIN = 'linkedin',
  EMAIL = 'email',
  YOUTUBE = 'youtube',
  LEETCODE = 'leetcode',
  INSTAGRAM = 'instagram',
  WHATSAPP = 'whatsapp',
  TELEGRAM = 'telegram',
}
