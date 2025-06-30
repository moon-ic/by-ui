<template>
    <div
        class="by-tooltip-container"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="handleClick"
        @focus="handleFocus"
        @blur="handleBlur"
        tabindex="0"
    >
        <slot />

        <transition name="fade">
            <div
                v-if="visible && !disabled"
                ref="tooltipRef"
                class="by-tooltip"
                :class="[placement, theme, { 'has-shadow': showShadow }]"
                :style="tooltipStyles"
                role="tooltip"
            >
                {{ content }}
                <div v-if="showArrow" class="tooltip-arrow" :class="placement" :style="arrowStyles" />
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import type { TooltipProps, TooltipTheme } from "./props";

const props = withDefaults(defineProps<TooltipProps>(), {
    trigger: "hover",
    theme: "dark",
    showArrow: true,
    showShadow: false,
    placement: "top",
    offset: 8,
    maxWidth: "none",
    disabled: false
});

const visible = ref(false);
const tooltipRef = ref<HTMLElement | null>(null);
const arrowPos = ref(0);

const tooltipStyles = computed(() => ({
    maxWidth: typeof props.maxWidth === "number" ? `${props.maxWidth}px` : props.maxWidth,
    "--tooltip-color": getThemeColor(props.theme),
    "--arrow-pos": `${arrowPos.value}px`
}));

const placementSide = computed(() => props.placement.split("-")[0]);

const arrowStyles = computed(() => {
    if (props.placement.startsWith("left") || props.placement.startsWith("right")) {
        return { top: `calc(var(--arrow-pos) - 6px)` };
    }
    return { left: `calc(var(--arrow-pos) - 6px)` };
});

const getThemeColor = (theme: TooltipTheme): string => {
    const colors = {
        dark: "rgba(0, 0, 0, 0.9)",
        light: "rgba(255, 255, 255, 0.9)",
        primary: "var(--primary-color, #409eff)",
        success: "var(--success-color, #67c23a)",
        warning: "var(--warning-color, #e6a23c)",
        danger: "var(--danger-color, #f56c6c)"
    };
    return colors[theme];
};

const handleMouseEnter = () => {
    if (props.trigger === "hover" && !props.disabled) {
        visible.value = true;
        nextTick(updatePosition);
    }
};

const handleMouseLeave = () => {
    if (props.trigger === "hover") {
        visible.value = false;
    }
};

const handleClick = () => {
    if (props.trigger === "click" && !props.disabled) {
        visible.value = !visible.value;
        nextTick(updatePosition);
    }
};

const handleFocus = () => {
    if (props.trigger === "focus" && !props.disabled) {
        visible.value = true;
        nextTick(updatePosition);
    }
};

const handleBlur = () => {
    if (props.trigger === "focus") {
        visible.value = false;
    }
};

const updatePosition = () => {
    if (!tooltipRef.value) return;

    const triggerEl = tooltipRef.value.parentElement;
    if (!triggerEl) return;

    const triggerRect = triggerEl.getBoundingClientRect();
    const tooltipRect = tooltipRef.value.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    let top = 0;
    let left = 0;
    let arrowPosition = 0;
    const ARROW_OFFSET = 16; // 箭头与边缘的距离

    // 主定位逻辑
    switch (props.placement) {
        // 上方定位
        case "top":
            top = triggerRect.top - tooltipRect.height - props.offset;
            left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
            arrowPosition = tooltipRect.width / 2;
            break;
        case "top-start":
            top = triggerRect.top - tooltipRect.height - props.offset;
            left = triggerRect.left;
            arrowPosition = ARROW_OFFSET;
            break;
        case "top-end":
            top = triggerRect.top - tooltipRect.height - props.offset;
            left = triggerRect.right - tooltipRect.width;
            arrowPosition = tooltipRect.width - ARROW_OFFSET;
            break;

        // 下方定位
        case "bottom":
            top = triggerRect.bottom + props.offset;
            left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
            arrowPosition = tooltipRect.width / 2;
            break;
        case "bottom-start":
            top = triggerRect.bottom + props.offset;
            left = triggerRect.left;
            arrowPosition = ARROW_OFFSET;
            break;
        case "bottom-end":
            top = triggerRect.bottom + props.offset;
            left = triggerRect.right - tooltipRect.width;
            arrowPosition = tooltipRect.width - ARROW_OFFSET;
            break;

        // 左侧定位
        case "left":
            top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
            left = triggerRect.left - tooltipRect.width - props.offset;
            arrowPosition = tooltipRect.height / 2;
            break;
        case "left-start":
            top = triggerRect.top;
            left = triggerRect.left - tooltipRect.width - props.offset;
            arrowPosition = ARROW_OFFSET;
            break;
        case "left-end":
            top = triggerRect.bottom - tooltipRect.height;
            left = triggerRect.left - tooltipRect.width - props.offset;
            arrowPosition = tooltipRect.height - ARROW_OFFSET;
            break;

        // 右侧定位
        case "right":
            top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
            left = triggerRect.right + props.offset;
            arrowPosition = tooltipRect.height / 2;
            break;
        case "right-start":
            top = triggerRect.top;
            left = triggerRect.right + props.offset;
            arrowPosition = ARROW_OFFSET;
            break;
        case "right-end":
            top = triggerRect.bottom - tooltipRect.height;
            left = triggerRect.right + props.offset;
            arrowPosition = tooltipRect.height - ARROW_OFFSET;
            break;
    }

    // 边界检查
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;

    // 水平边界
    if (left < 0) {
        left = 0;
        if (props.placement.startsWith("top") || props.placement.startsWith("bottom")) {
            arrowPosition = Math.max(arrowPosition + left, 12);
        }
    } else if (left + tooltipRect.width > viewportWidth) {
        left = viewportWidth - tooltipRect.width;
        if (props.placement.startsWith("top") || props.placement.startsWith("bottom")) {
            arrowPosition = Math.min(arrowPosition, tooltipRect.width - 12);
        }
    }

    // 垂直边界
    if (top < 0) {
        top = 0;
        if (props.placement.startsWith("left") || props.placement.startsWith("right")) {
            arrowPosition = Math.max(arrowPosition + top, 12);
        }
    } else if (top + tooltipRect.height > viewportHeight) {
        top = viewportHeight - tooltipRect.height;
        if (props.placement.startsWith("left") || props.placement.startsWith("right")) {
            arrowPosition = Math.max(arrowPosition - (top + tooltipRect.height - viewportHeight), 12);
        }
    }

    // 应用位置
    tooltipRef.value.style.top = `${top + scrollY}px`;
    tooltipRef.value.style.left = `${left + scrollX}px`;
    arrowPos.value = arrowPosition;
};

// 点击外部关闭
const handleClickOutside = (event: MouseEvent) => {
    if (
        !tooltipRef.value?.contains(event.target as Node) &&
        !tooltipRef.value?.parentElement?.contains(event.target as Node)
    ) {
        visible.value = false;
    }
};

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.by-tooltip-container {
    display: inline-block;
    position: relative;
}

.by-tooltip {
    position: fixed;
    z-index: 9999;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.5;
    color: #fff;
    background-color: var(--tooltip-color);
    box-shadow: none;
    white-space: nowrap;
    pointer-events: none;
    transform: translateZ(0);
}

.by-tooltip.has-shadow {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.by-tooltip.light {
    color: #333;
}

.tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
}

/* 上方箭头系统 */
.top .tooltip-arrow {
    position: absolute;
    bottom: -6px;
    left: calc(var(--arrow-pos) - 6px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0;
    border-color: var(--tooltip-color) transparent transparent;
}

.top-start .tooltip-arrow {
    position: absolute;
    bottom: -6px;
    left: var(--arrow-pos);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0;
    border-color: var(--tooltip-color) transparent transparent;
}

.top-end .tooltip-arrow {
    position: absolute;
    bottom: -6px;
    right: calc(100% - var(--arrow-pos) - 6px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0;
    border-color: var(--tooltip-color) transparent transparent;
}

/* 下方箭头系统 */
.bottom .tooltip-arrow {
    position: absolute;
    top: -6px;
    left: calc(var(--arrow-pos) - 6px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 6px;
    border-color: transparent transparent var(--tooltip-color);
}

.bottom-start .tooltip-arrow {
    position: absolute;
    top: -6px;
    left: var(--arrow-pos);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 6px;
    border-color: transparent transparent var(--tooltip-color);
}

.bottom-end .tooltip-arrow {
    position: absolute;
    top: -6px;
    right: calc(100% - var(--arrow-pos) - 6px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 6px;
    border-color: transparent transparent var(--tooltip-color);
}

/* 左侧箭头系统 */
.left .tooltip-arrow {
    position: absolute;
    right: -6px;
    top: calc(var(--arrow-pos) - 6px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent var(--tooltip-color);
}

.left-start .tooltip-arrow {
    position: absolute;
    right: -6px;
    top: var(--arrow-pos);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent var(--tooltip-color);
}

.left-end .tooltip-arrow {
    position: absolute;
    right: -6px;
    bottom: calc(100% - var(--arrow-pos) - 6px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent var(--tooltip-color);
}

/* 右侧箭头系统 */
.right .tooltip-arrow {
    position: absolute;
    left: -6px;
    top: calc(var(--arrow-pos) - 6px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent var(--tooltip-color) transparent transparent;
}

.right-start .tooltip-arrow {
    position: absolute;
    left: -6px;
    top: var(--arrow-pos);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent var(--tooltip-color) transparent transparent;
}

.right-end .tooltip-arrow {
    position: absolute;
    left: -6px;
    bottom: calc(100% - var(--arrow-pos) - 6px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent var(--tooltip-color) transparent transparent;
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
