export type ButtonType =
    'primary' |
    'danger' |
    'default';

export type ButtonSize = 'small' | 'meddle' | 'large';

export interface ButtonProps {
    /**
     * 按钮类型
     *
     * @values 'primary'品牌 |'danger'危险 | 'secondary'次级 | 'default'默认;
     */
    type?: ButtonType;
    /**
     * 按钮尺寸
     *
     * @values large middle small
     */
    size?: ButtonSize;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否为 loading 状态 */
    loading?: boolean;
    /** 跳转的连接地址 */
    href?: string;
}