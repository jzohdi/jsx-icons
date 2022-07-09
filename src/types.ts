import { CSSProperties } from "react";

export type SizeProp = number | string;

export type IconProps = {
  width: SizeProp;
  height: SizeProp;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  color: string;
};

export type JSXIconProps = Partial<IconProps> & { size?: SizeProp };
