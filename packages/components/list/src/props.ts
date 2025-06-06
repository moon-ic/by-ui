export interface ListProps {
    lists?: ListItemProps[];
    header?: string;
    footer?: string;
    layout?: "horizontal" | "vertical";
    size?: "small" | "medium" | "large";
    split?: boolean;
    stripe?: boolean;
    asyncLoading?: boolean;
    scrollType?: "auto" | "manual" | "lazy";
}

export interface ListItemProps {
    title?: string;
    content?: string;
    action?: any;
    disabled?: boolean;
}
