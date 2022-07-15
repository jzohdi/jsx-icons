import React, { ReactElement } from "react";
import { JSXIconProps } from "./types";
import { useDefaults } from "./utils";

export default function TrashCanBoldIcon(
  iconProps: JSXIconProps
): ReactElement<any, any> {
  const { color, ...props } = useDefaults(iconProps);

  return (
    <svg
      {...props}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0C5.62123 0 5.27497 0.214002 5.10557 0.552786L4.38197 2H1C0.447715 2 0 2.44772 0 3C0 3.55228 0.447716 4 1 4L1 14C1 15.1046 1.89543 16 3 16H11C12.1046 16 13 15.1046 13 14V4C13.5523 4 14 3.55228 14 3C14 2.44772 13.5523 2 13 2H9.61804L8.89443 0.552786C8.72504 0.214002 8.37877 0 8 0H6ZM4 6C4 5.44772 4.44772 5 5 5C5.55228 5 6 5.44772 6 6V12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12V6ZM9 5C8.44771 5 8 5.44772 8 6V12C8 12.5523 8.44771 13 9 13C9.55229 13 10 12.5523 10 12V6C10 5.44772 9.55229 5 9 5Z"
        fill={color}
      />
    </svg>
  );
}
