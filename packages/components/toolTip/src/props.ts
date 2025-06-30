export type TooltipTheme = "dark" | "light" | "primary" | "success" | "warning" | "danger";

export type TooltipPlacement =
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end";

export interface TooltipProps {
    content: string;
    trigger?: "hover" | "click" | "focus";
    theme?: TooltipTheme;
    showArrow?: boolean;
    showShadow?: boolean;
    placement?: TooltipPlacement;
    offset?: number;
    maxWidth?: number | string;
    disabled?: boolean;
}
