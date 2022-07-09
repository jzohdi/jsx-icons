import React, { ReactElement } from "react";
import { JSXIconProps } from "../types";
import { useDefaults } from "../utils";

export default function SquareBoldIcon(
  iconProps: JSXIconProps
): ReactElement<any, any> {
  const props = useDefaults(iconProps);
  return (
    <svg
      {...props}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" rx="1" fill={props.color} />
    </svg>
  );
}
