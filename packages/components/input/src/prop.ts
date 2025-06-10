export type InputStatus = "default" | "disabled" | "readonly";
export type InputAlign = "left" | "center" | "right";

export interface InputProps {
    /**
     * 状态
     *
     * @values default disable readOnly warning success error
     */
    status?: InputStatus;
    /**
     * 尺寸
     *
     * @values large middle small
     */
    size?: string;
    /**
     * 对齐方式
     *
     * @values left center right
     */
    align?: InputAlign;
    /**
     * 前缀
     */
    prepend?: string;
    /**
     * 后缀
     */
    append?: string;
    /**
     * 默认值
     */
    defaultValue?: string;
    /**
     * 最大长度
     */
    maxWidth?: string;
}
