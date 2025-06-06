type handleSelect = (selectIndex: number) => void;
export interface TabPanelProps {
    key?: number;
    isActive?: boolean;
    label?: string;
    disabled?: boolean;
    removeble?: boolean;
    onRemove?: () => void;
    panel?: any;
    lazy?: boolean;
    draggable?: boolean;
}
export interface TabProps {
    list?: TabPanelProps[];
    defaultActive?: number;
    size?: string;
    placement?: "left" | "right" | "top" | "bottom";
    theme?: "card" | "line";
    dragSort?: boolean;
    onSelect?: handleSelect;
    onAdd?: () => void;
    onChange?: (index: number) => void;
    oDragSort?: (dragIndex: number, hoverIndex: number) => void;
    onRemove?: (index: number) => void;
}
