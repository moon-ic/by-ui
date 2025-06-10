export interface ListProps {
    height?: string;
    lists?: ListItemProps[];
    header?: string;
    footer?: string;
    layout?: "horizontal" | "vertical";
    size?: "small" | "medium" | "large";
    split?: boolean;
    zebra?: boolean;
    asyncLoading?: boolean;
    scrollType?: "auto" | "virtual" | "lazy"; //自动加载，虚拟加载，懒加载
}

export interface ListItemProps {
    title?: string;
    content?: string;
    actions?: ListActionProps[];
    disabled?: boolean;
    split?: boolean;
}

export interface ListActionProps {
    text: string;
    onClick?: Function;
}
