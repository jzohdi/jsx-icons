import React, { ReactElement } from "react";
import { JSXIconProps } from "./types";
import { useDefaults } from "./utils";

export default function LibraryBoldIcon(
  iconProps: JSXIconProps
): ReactElement<any, any> {
  const { color, ...props } = useDefaults(iconProps);

  return (
    <svg
      {...props}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.49631 0.131757C8.18888 -0.043919 7.81146 -0.043919 7.50403 0.131757L0.504032 4.13176C0.0245148 4.40577 -0.142082 5.01662 0.131928 5.49614C0.316311 5.81881 0.65322 5.99979 1 6.00017V13C0.447715 13 0 13.4477 0 14C0 14.5523 0.447715 15 1 15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13V6.00017C15.3469 5.99991 15.684 5.81892 15.8684 5.49614C16.1424 5.01662 15.9758 4.40577 15.4963 4.13176L8.49631 0.131757ZM4 7C3.44772 7 3 7.44772 3 8V11C3 11.5523 3.44772 12 4 12C4.55228 12 5 11.5523 5 11V8C5 7.44772 4.55228 7 4 7ZM7 8C7 7.44772 7.44772 7 8 7C8.55229 7 9 7.44772 9 8V11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11V8ZM12 7C11.4477 7 11 7.44772 11 8V11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11V8C13 7.44772 12.5523 7 12 7Z"
        fill={color}
      />
    </svg>
  );
}
