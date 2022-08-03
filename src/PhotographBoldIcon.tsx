import React, { ReactElement } from "react";
import { JSXIconProps } from "./types";
import { useDefaults } from "./utils";

export default function PhotographBoldIcon(
  iconProps: JSXIconProps
): ReactElement<any, any> {
  const { color, ...props } = useDefaults(iconProps);

  return (
    <svg
      {...props}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.895431 14 2 14H14C15.1046 14 16 13.1046 16 12V2C16 0.895431 15.1046 0 14 0H2ZM14 12H2L6 4L9 10L11 6L14 12Z"
        fill={color}
      />
    </svg>
  );
}
