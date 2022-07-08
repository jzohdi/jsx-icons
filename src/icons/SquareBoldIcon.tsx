import React from "react";
import { IconProps } from "./types";
import { withDefaults } from "./utils";

export default withDefaults(function SquareBoldIcon(
  props: IconProps
): JSX.Element {
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
});
