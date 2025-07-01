<template>
    <transition name="fade">
        <div
            v-if="visible"
            class="toast-container"
            :class="[
                `toast-${currentOptions.position}`,
                `toast-${currentOptions.type}`,
                { 'toast-has-icon': showIcon },
                { 'toast-loading': currentOptions.loading }
            ]"
            :style="{ width: toastWidth }"
        >
            <div class="toast-content" :class="layoutClass">
                <!-- 图标区域 -->
                <div v-if="showIcon" class="toast-icon">
                    <slot name="icon">
                        <i v-if="currentOptions.icon" :class="currentOptions.icon"></i>
                        <svg v-else-if="currentOptions.loading" class="toast-loading-spinner" viewBox="0 0 50 50">
                            <circle cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
                        </svg>
                    </slot>
                </div>

                <!-- 文字内容 -->
                <div class="toast-text">
                    <div v-if="currentOptions.title" class="toast-title">{{ currentOptions.title }}</div>
                    <div class="toast-message">{{ displayMessage }}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { ToastOptions, ToastExpose } from "./props";

const props = defineProps();

const emit = defineEmits(["close"]);

const visible = ref(false);
const timer = ref<NodeJS.Timeout | null>(null);
const currentOptions = ref<ToastOptions>({
    message: "",
    type: "default",
    position: "middle",
    duration: 3000,
    loading: false,
    layout: "horizontal"
});

// 文字限制：一行最多10个字，最多3行
const displayMessage = computed(() => {
    const maxLength = 10;
    const maxLines = 3;

    let lines = currentOptions.value.message.split("\n").slice(0, maxLines);
    lines = lines.map((line) => {
        return line.length > maxLength ? line.slice(0, maxLength) + "..." : line;
    });

    return lines.join("\n");
});

// 是否显示图标
const showIcon = computed(() => {
    return currentOptions.value.icon || currentOptions.value.loading || currentOptions.value.type !== "default";
});

// 布局类名
const layoutClass = computed(() => {
    return `toast-${currentOptions.value.layout}`;
});

// 根据内容计算宽度
const toastWidth = computed(() => {
    if (currentOptions.value.layout === "vertical") return "auto";

    const baseWidth = 200;
    const maxWidth = 280;
    const charWidth = 14;
    const longestLine = Math.max(...displayMessage.value.split("\n").map((l) => l.length));
    const calculatedWidth = Math.min(longestLine * charWidth, maxWidth);

    return `${Math.max(baseWidth, calculatedWidth)}px`;
});

// 默认图标
const defaultIcons = {
    success: "icon-check-circle",
    warning: "icon-warning",
    error: "icon-close-circle",
    info: "icon-info-circle",
    default: ""
};

const icon = computed(() => {
    const type = currentOptions.value.type || "default";
    return currentOptions.value.icon || defaultIcons[type];
});

// 显示Toast
const show = (options: ToastOptions) => {
    currentOptions.value = {
        duration: 3000, // 默认值
        ...currentOptions.value,
        ...options
    };
    visible.value = true;

    if (currentOptions?.value?.duration && !currentOptions.value.loading) {
        timer.value = setTimeout(hide, currentOptions.value.duration);
    }
};

// 隐藏Toast
const hide = () => {
    visible.value = false;
    if (timer.value) {
        clearTimeout(timer.value);
        timer.value = null;
    }
    currentOptions.value.onClose?.();
    emit("close");
};

// 监听loading状态
watch(
    () => currentOptions.value.loading,
    (newVal) => {
        if (newVal && timer.value) {
            clearTimeout(timer.value);
            timer.value = null;
        }
    }
);

defineExpose<ToastExpose>({
    show,
    hide
});
</script>

<style scoped>
.toast-container {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    border-radius: 8px;
    padding: 12px 16px;
    box-sizing: border-box;
    z-index: 9999;
    font-size: 14px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 80vw;
}

.toast-top {
    top: 20%;
}

.toast-middle {
    top: 50%;
    transform: translate(-50%, -50%);
}

.toast-bottom {
    bottom: 20%;
}

.toast-content {
    display: flex;
    width: 100%;
}

.toast-horizontal {
    flex-direction: row;
    align-items: center;
}

.toast-vertical {
    flex-direction: column;
}

.toast-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.toast-horizontal .toast-icon {
    margin-right: 12px;
}

.toast-vertical .toast-icon {
    margin-bottom: 8px;
}

.toast-icon i {
    font-size: 24px;
}

.toast-text {
    flex: 1;
    min-width: 0;
}

.toast-title {
    font-weight: bold;
    margin-bottom: 4px;
}

.toast-message {
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* 加载动画 */
.toast-loading-spinner {
    width: 24px;
    height: 24px;
    animation: rotate 1s linear infinite;
}

.toast-loading-spinner circle {
    stroke: currentColor;
    stroke-linecap: round;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* 类型颜色 */
.toast-success {
    background-color: $success-color;
}

.toast-warning {
    background-color: $warning-color;
}

.toast-error {
    background-color: $danger-color;
}

.toast-info {
    background-color: $info-color;
}
</style>
