import React, { ReactElement } from "react";
import { JSXIconProps } from "../types";
import { useDefaults } from "../utils";

export default function CircleBoldIcon(
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
      <circle cx="8" cy="8" r="8" fill={props.color} />
    </svg>
  );
}
