import React, { ReactElement } from "react";
import { JSXIconProps } from "./types";
import { useDefaults } from "./utils";

export default function DiamondBoldIcon(
  iconProps: JSXIconProps
): ReactElement<any, any> {
  const props = useDefaults(iconProps);
  return (
    <svg
      {...props}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="11"
        y="-0.313721"
        width="16"
        height="16"
        rx="1"
        transform="rotate(45 11 -0.313721)"
        fill={props.color}
      />
    </svg>
  );
}
