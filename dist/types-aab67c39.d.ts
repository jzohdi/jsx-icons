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
export { SizeProp, IconProps, JSXIconProps };
