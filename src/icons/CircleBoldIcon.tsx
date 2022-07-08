import React from "react";
import { IconProps } from "./types";
import { withDefaults } from "./utils";

export default withDefaults(function CircleBoldIcon(
  props: IconProps
): JSX.Element {
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
});
