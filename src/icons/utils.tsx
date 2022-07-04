import React from "react";
import { IconProps } from "./types";

const defaultWidth = 20;
const defaultHeight = 20;
const defaultColor = "#111827";

export function withDefaults(Component: (props: IconProps) => JSX.Element) {
  function makeDefaults(props: IconProps) {
    const { size, width, height, color, ...rest } = props;
    return (
      <Component
        {...rest}
        width={width || size || defaultWidth}
        height={height || size || defaultHeight}
        color={color || defaultColor}
      />
    );
  }
  return makeDefaults;
}
