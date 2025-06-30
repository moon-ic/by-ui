<template>
    <!-- 模板部分保持不变 -->
    <div
        class="avatar"
        :class="[`avatar-${size}`, `avatar-${shape}`, { 'has-badge': badge }]"
        :style="{
            backgroundColor: bgColor,
            color: textColor
        }"
    >
        <!-- 图片类型 -->
        <img v-if="src" :src="src" :alt="alt" />

        <!-- 图标类型 -->
        <i v-else-if="icon" :class="icon"></i>

        <!-- 字符类型 -->
        <span v-else class="avatar-text" :style="textStyle">{{ displayText }}</span>

        <!-- 徽标 -->
        <span v-if="badge && Number(badge) > 0" class="avatar-badge">{{ badge }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { AvatarProps, avatarPropsDefaults } from "./props";

// 使用类型定义和默认值
const props = withDefaults(defineProps<AvatarProps>(), avatarPropsDefaults);

const displayText = computed(() => {
    if (!props.text) return "";
    return props.text.slice(0, props.maxChars);
});

const textStyle = computed(() => {
    if (!props.text) return {};

    // 根据字符长度和gap计算字体大小
    const baseSizes = {
        small: 12,
        medium: 14,
        large: 16
    };

    const baseSize = baseSizes[props.size];
    const length = displayText.value.length;
    const gapFactor = props.gap / 4;

    // 简单的自适应算法，可以根据需要调整
    const fontSize = Math.min(baseSize, baseSize * (1 - (length - 1) * 0.1) * (1 - gapFactor * 0.05));

    return {
        fontSize: `${fontSize}px`,
        padding: `0 ${props.gap}px`
    };
});
</script>

<style scoped>
/* 样式部分保持不变 */
.avatar {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 50%;
}

/* 尺寸 */
.avatar-small {
    width: 24px;
    height: 24px;
    font-size: 12px;
}

.avatar-medium {
    width: 40px;
    height: 40px;
    font-size: 14px;
}

.avatar-large {
    width: 56px;
    height: 56px;
    font-size: 16px;
}

/* 形状 */
.avatar-square {
    border-radius: 4px;
}

/* 图片样式 */
.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* 文字样式 */
.avatar-text {
    white-space: nowrap;
    text-align: center;
    line-height: 1;
}

/* 徽标样式 */
.avatar-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    border-radius: 8px;
    background-color: #f56c6c;
    color: white;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    box-shadow: 0 0 0 1px white;
}

.has-badge {
    position: relative;
}
</style>
