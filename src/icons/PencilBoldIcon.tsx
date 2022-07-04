import React from "react";
import { IconProps } from "./types";
import { withDefaults } from "./utils";

export default withDefaults(function PencilBoldIcon(
  props: IconProps
): JSX.Element {
  return (
    <svg
      {...props}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5858 0.585786C11.3668 -0.195262 12.6332 -0.195262 13.4142 0.585786C14.1953 1.36683 14.1953 2.63316 13.4142 3.41421L12.6213 4.20711L9.79289 1.37868L10.5858 0.585786Z"
        fill={props.color}
      />
      <path
        d="M8.37868 2.79289L0 11.1716V14H2.82842L11.2071 5.62132L8.37868 2.79289Z"
        fill={props.color}
      />
    </svg>
  );
});
