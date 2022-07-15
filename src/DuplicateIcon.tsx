import React, { ReactElement } from "react";
import { JSXIconProps } from "./types";
import { useDefaults } from "./utils";

export default function DuplicateIcon(
  iconProps: JSXIconProps
): ReactElement<any, any> {
  const { color, ...props } = useDefaults(iconProps);

  return (
    <svg
      {...props}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6C4 4.89543 4.89543 4 6 4H12C13.1046 4 14 4.89543 14 6V12C14 13.1046 13.1046 14 12 14H6C4.89543 14 4 13.1046 4 12V6Z"
        fill={color}
      />
      <path
        d="M2 0C0.895431 0 0 0.89543 0 2V8C0 9.10457 0.89543 10 2 10L2 2H10C10 0.895431 9.10457 0 8 0H2Z"
        fill={color}
      />
    </svg>
  );
}
