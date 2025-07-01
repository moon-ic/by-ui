// src/components/Toast/types.ts
export type ToastType = "success" | "warning" | "error" | "info" | "default";
export type ToastPosition = "top" | "middle" | "bottom";
export type ToastLayout = "horizontal" | "vertical";

export interface ToastOptions {
    message: string;
    title?: string;
    type?: ToastType;
    position?: ToastPosition;
    duration?: number;
    icon?: string;
    loading?: boolean;
    layout?: ToastLayout;
    onClose?: () => void;
}

export interface ToastExpose {
    show: (options: ToastOptions) => void;
    hide: () => void;
}
