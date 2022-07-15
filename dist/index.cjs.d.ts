import { ReactElement, CSSProperties } from "react";
type SizeProp = number | string;
type IconProps = {
    width: SizeProp;
    height: SizeProp;
    onClick?: () => void;
    className?: string;
    style?: CSSProperties;
    color: string;
};
type JSXIconProps = Partial<IconProps> & {
    size?: SizeProp;
};
declare function PencilBoldIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function CursorClickIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function SquareBoldIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function CircleBoldIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function DiamondBoldIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function HorizontalLineIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function ArrowRightBoldIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function UserCircleBoldIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function EraserIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function RulerBoldIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function UndoIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function RedoIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function MenuIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function TrashCanBoldIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function TrashCanIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function BackIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function ForwardIcon(iconProps: JSXIconProps): ReactElement<any, any>;
declare function DuplicateIcon(iconProps: JSXIconProps): ReactElement<any, any>;
export { PencilBoldIcon, CursorClickIcon, SquareBoldIcon, CircleBoldIcon, DiamondBoldIcon, HorizontalLineIcon, ArrowRightBoldIcon, UserCircleBoldIcon, EraserIcon, RulerBoldIcon, UndoIcon, RedoIcon, MenuIcon, TrashCanBoldIcon, TrashCanIcon, BackIcon, ForwardIcon, DuplicateIcon };
//# sourceMappingURL=index.cjs.d.ts.map