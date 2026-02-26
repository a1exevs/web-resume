declare module '*.scss';
declare module '*.module.scss';

declare module '*.ttf';

declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.png';
declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
}
