export type DialogType = "default" | "info" | "danger" | "warning" | "success";

export interface DialogProps {
    /**
     * 按钮类型
     *
     * @values
     */
    type?: DialogType;
    /**
     * 按钮尺寸
     *
     * @values large middle small
     */
    /** 是否禁用 */
    header?: string;
    body?: string;
    visible?: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
    cancelBtn?: boolean;
}
