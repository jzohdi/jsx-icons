import React from "react";
import { IconProps } from "./types";

const defaultWidth = 20;
const defaultHeight = 20;
const defaultColor = "#111827";

export function withSize(Component: (props: IconProps) => JSX.Element) {
  function makeWidthHeight(props: IconProps) {
    const { size, ...rest } = props;
    if (size !== undefined) {
      return <Component {...rest} width={size} height={size} />;
    }
    const { width, height, ...withoutSize } = rest;
    return (
      <Component
        {...withoutSize}
        width={width || defaultWidth}
        height={height || defaultHeight}
      />
    );
  }
  return makeWidthHeight;
}

export function withColor(Component: (props: IconProps) => JSX.Element) {
  function makeColor(props: IconProps) {
    const { color, ...rest } = props;
    return <Component {...rest} color={color || defaultColor} />;
  }
  return makeColor;
}
