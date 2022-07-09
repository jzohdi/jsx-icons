/// <reference types="react" />
import { CSSProperties } from "react";
type SizeProp = number | string;
type IconProps = {
    width: SizeProp;
    height: SizeProp;
    onClick?: () => void;
    className?: string;
    style?: CSSProperties;
    color: string;
};
type JSXIconProps = Partial<IconProps> & {
    size?: SizeProp;
};
declare function withDefaults(Component: (props: IconProps) => JSX.Element): (props: JSXIconProps) => JSX.Element;
declare const _default: (props: JSXIconProps) => JSX.Element;
declare const _default: (props: JSXIconProps) => JSX.Element;
declare const _default: (props: JSXIconProps) => JSX.Element;
declare const _default: (props: JSXIconProps) => JSX.Element;
declare const _default: (props: JSXIconProps) => JSX.Element;
declare const _default: (props: JSXIconProps) => JSX.Element;
export { withDefaults, _default as PencilBoldIcon, _default as CursorClickIcon, _default as SquareBoldIcon, _default as CircleBoldIcon, _default as DiamondBoldIcon, _default as HorizontalLineIcon };
//# sourceMappingURL=index.cjs.d.ts.map