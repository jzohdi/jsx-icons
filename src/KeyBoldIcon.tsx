import React, { ReactElement } from "react";
import { JSXIconProps } from "./types";
import { useDefaults } from "./utils";

export default function KeyBoldIcon(
  iconProps: JSXIconProps
): ReactElement<any, any> {
  const { color, ...props } = useDefaults(iconProps);

  return (
    <svg
      {...props}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6C16 9.31371 13.3137 12 10 12C9.39383 12 8.80865 11.9101 8.25707 11.7429L6 14H4V16H0V12L4.25707 7.74293C4.08989 7.19135 4 6.60617 4 6C4 2.68629 6.68629 0 10 0C13.3137 0 16 2.68629 16 6ZM10 2C9.44771 2 9 2.44772 9 3C9 3.55228 9.44771 4 10 4C11.1046 4 12 4.89543 12 6C12 6.55228 12.4477 7 13 7C13.5523 7 14 6.55228 14 6C14 3.79086 12.2091 2 10 2Z"
        fill={color}
      />
    </svg>
  );
}
