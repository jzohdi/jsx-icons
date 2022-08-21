import React, { ReactElement } from "react";
import { JSXIconProps } from "./types";
import { useDefaults } from "./utils";

export default function DocumentDuplicateIcon(
  iconProps: JSXIconProps
): ReactElement<any, any> {
  const { color, ...props } = useDefaults(iconProps);

  return (
    <svg
      {...props}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5V13C5 14.1046 5.89543 15 7 15H13M5 5V3C5 1.89543 5.89543 1 7 1H11.5858C11.851 1 12.1054 1.10536 12.2929 1.29289L16.7071 5.70711C16.8946 5.89464 17 6.149 17 6.41421V13C17 14.1046 16.1046 15 15 15H13M5 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H11C12.1046 19 13 18.1046 13 17V15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
