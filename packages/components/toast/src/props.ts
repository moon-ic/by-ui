export interface ToastProps {
    message: string;
    duration: number;
    showOverlay: boolean;
    theme: "primary" | "loading" | "success" | "warning" | "error";
    placement: "top" | "middle" | "bottom";
    icon: any;
    direction: "row" | "column";
    preventScrollThrough: boolean;
    Onclose: () => void;
}
