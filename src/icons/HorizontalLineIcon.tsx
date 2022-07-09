import React from "react";
import { IconProps } from "./types";
import { withDefaults } from "./utils";

export default withDefaults(function HorizontalLineIcon(
  props: IconProps
): JSX.Element {
  return (
    <svg
      {...props}
      viewBox="0 0 24 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.5" x2="24" y2="1.5" stroke="black" stroke-width="3" />
    </svg>
  );
});
