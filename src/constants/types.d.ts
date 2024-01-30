import "styled-components";
import { type Theme } from "constants/interfaces/interfaces";

declare module "*.woff";
declare module "*.woff2";

declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;
  export { ReactComponent };
  export default content;
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
