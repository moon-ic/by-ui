export type TabPosition = "top" | "bottom" | "left" | "right";
export type TabType = "line" | "card";
export type IndicatorAlign = "start" | "center" | "end";

export interface TabItem {
    id: string;
    label: string;
    icon?: string;
    disabled?: boolean;
    closable?: boolean;
    [key: string]: any;
}

export interface TabsProps {
    modelValue: string;
    items: TabItem[];
    type?: TabType;
    position?: TabPosition;
    centered?: boolean;
    indicator?: boolean;
    indicatorWidth?: number | string;
    indicatorAlign?: IndicatorAlign;
    addable?: boolean;
    draggable?: boolean;
}

export interface TabsEmits {
    (e: "update:modelValue", id: string): void;
    (e: "add"): void;
    (e: "remove", id: string): void;
    (e: "change", newItems: TabItem[]): void;
}
