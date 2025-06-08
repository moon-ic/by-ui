export interface ToolTipsProps {
    content: string;
    placement?: "top" | "bottom" | "left" | "right" | "mouse";
    showArrow?: boolean;
    showShadow?: boolean;
    theme?: "light" | "dark";
    triggerElement?: "focus" | "hover" | "click";
}
