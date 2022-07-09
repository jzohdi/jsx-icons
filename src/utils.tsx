import React, { ReactElement } from "react";
import { IconProps, JSXIconProps } from "./types";

const defaultWidth = 20;
const defaultHeight = 20;
const defaultColor = "#111827";

export function withDefaults(
  Component: (props: IconProps) => ReactElement<any, any>
) {
  function makeDefaults(props: JSXIconProps) {
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

export function useDefaults(props: JSXIconProps): IconProps {
  const { size, width, height, color, ...rest } = props;
  return {
    width: width || size || defaultWidth,
    height: height || size || defaultHeight,
    color: color || defaultColor,
    ...rest,
  };
}
