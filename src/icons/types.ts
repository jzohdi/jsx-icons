import { CSSProperties } from "react";

export type IconProps = {
  width?: number;
  height?: number;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  size?: number;
  color?: string;
};
