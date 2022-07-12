import React, { ReactElement } from "react";
import { JSXIconProps } from "./types";
import { useDefaults } from "./utils";

export default function HorizontalLineIcon(
  iconProps: JSXIconProps
): ReactElement<any, any> {
  const props = useDefaults(iconProps);
  return (
    <svg
      {...props}
      viewBox="0 0 24 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.5" x2="24" y2="1.5" stroke="black" strokeWidth="3" />
    </svg>
  );
}
