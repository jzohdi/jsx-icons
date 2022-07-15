import React, { ReactElement } from "react";
import { JSXIconProps } from "./types";
import { useDefaults } from "./utils";

export default function BackIcon(
  iconProps: JSXIconProps
): ReactElement<any, any> {
  const { color, ...props } = useDefaults(iconProps);

  return (
    <svg
      {...props}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 17L5 9L15 1V17Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 16V2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
