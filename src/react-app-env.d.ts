declare module "*.scss";

declare module "*.module.scss";

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.ttf' {
  const content: any
  export default content
}
