import React from "react";
import { IconProps } from "./types";
import { withDefaults } from "./utils";

export default withDefaults(function DiamondBoldIcon(
  props: IconProps
): JSX.Element {
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
});
