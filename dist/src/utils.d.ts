/// <reference types="react" />
import { ReactElement } from "react";
import { IconProps, JSXIconProps } from "../types-aab67c39";
declare function withDefaults(Component: (props: IconProps) => ReactElement<any, any>): (props: JSXIconProps) => JSX.Element;
declare function useDefaults(props: JSXIconProps): IconProps;
export { withDefaults, useDefaults };
