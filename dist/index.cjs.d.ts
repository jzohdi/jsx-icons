/// <reference types="react" />
import { CSSProperties } from "react";
type IconProps = {
    width?: number;
    height?: number;
    onClick?: () => void;
    className?: string;
    style?: CSSProperties;
    size?: number;
    color?: string;
};
declare const _default: (props: IconProps) => JSX.Element;
declare function withSize(Component: (props: IconProps) => JSX.Element): (props: IconProps) => JSX.Element;
declare function withColor(Component: (props: IconProps) => JSX.Element): (props: IconProps) => JSX.Element;
export { _default as PencilBoldIcon, withSize, withColor };
//# sourceMappingURL=index.cjs.d.ts.map