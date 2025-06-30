// src/types/components/avatar.ts
export type AvatarSize = "small" | "medium" | "large";
export type AvatarShape = "circle" | "square";

export interface AvatarProps {
    // 基本属性
    size?: AvatarSize;
    shape?: AvatarShape;

    // 图片类型
    src?: string;
    alt?: string;

    // 图标类型
    icon?: string;

    // 字符类型
    text?: string;
    gap?: number;
    maxChars?: number;

    // 颜色
    bgColor?: string;
    textColor?: string;

    // 徽标
    badge?: number;
}

// 默认 props 值
export const avatarPropsDefaults: Partial<AvatarProps> = {
    size: "medium",
    shape: "circle",
    gap: 4,
    maxChars: 2,
    bgColor: "#ccc",
    textColor: "#fff",
    badge: 0
};
