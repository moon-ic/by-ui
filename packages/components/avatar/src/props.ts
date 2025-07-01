import type { PropType } from "vue";

export type AvatarSize = "small" | "medium" | "large";
export type AvatarShape = "circle" | "square";

export interface AvatarProps {
    size?: AvatarSize;
    shape?: AvatarShape;
    src?: string;
    alt?: string;
    icon?: string;
    text?: string;
    gap?: number;
    maxChars?: number;
    bgColor?: string;
    textColor?: string;
    badge?: number | string;
}

export const avatarPropsDefaults: Partial<AvatarProps> = {
    size: "medium",
    shape: "circle",
    gap: 4,
    maxChars: 2,
    bgColor: "#ccc",
    textColor: "#fff",
    badge: 0
};

export interface AvatarItem {
    src?: string;
    text?: string;
    icon?: string;
    key?: string | number;
    class?: string;
    // 继承AvatarProps的可选属性
    size?: AvatarSize;
    shape?: AvatarShape;
    gap?: number;
    bgColor?: string;
    textColor?: string;
}
export interface AvatarGroupProps {
    avatars?: AvatarItem[];
    maxCount?: number;
    size?: AvatarSize;
    shape?: AvatarShape;
    spacing?: number;
    overlap?: number;
    bgColor?: string;
    textColor?: string;
}
