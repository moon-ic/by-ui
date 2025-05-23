export type ButtonType =
    'primary' |
    'danger' |
    'secondary' |
    'default';
export type ButtonSize = 'small' | 'large';

export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean;
}