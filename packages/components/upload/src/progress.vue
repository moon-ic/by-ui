<template>
    <div class="progress-bar">
        <div class="progress-bar-outer" :style="{ height: `${strokeHeight}px` }">
            <div :class="`progress-bar-inner color-${theme}`" :style="{ width: `${percent}%` }">
                <span v-if="showText" class="inner-text">{{ `${percent}%` }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface ProgressProps {
    percent: number;
    strokeHeight?: number;
    showText?: boolean;
    theme?: string;
}

const props = defineProps<ProgressProps>();
</script>

<style scoped lang="scss">
.progress-bar {
    box-sizing: border-box;
    width: 100%;

    .progress-bar-outer {
        position: relative;
        overflow: hidden;
        background-color: #e9ecef; /* 进度条外层背景色 */
        border-radius: 0.25rem; /* 进度条圆角 */
    }

    .progress-bar-inner {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        line-height: 1;
        border-radius: 0.25rem;
        transition: width 0.4s ease; /* 控制进度条宽度的过渡动画 */

        .inner-text {
            margin: 0 5px;
            font-size: 0.75rem; /* 进度条文本大小 */
            color: #fff; /* 白色文字 */
        }
    }

    .color-primary {
        background-color: #0d6efd; /* 主题颜色：蓝色 */
    }

    .color-secondary {
        background-color: #6c757d; /* 主题颜色：灰色 */
    }

    .color-success {
        background-color: #52c41a; /* 主题颜色：绿色 */
    }

    .color-info {
        background-color: #17a2b8; /* 主题颜色：青色 */
    }

    .color-warning {
        background-color: #fadb14; /* 主题颜色：黄色 */
    }

    .color-danger {
        background-color: #dc3545; /* 主题颜色：红色 */
    }

    .color-light {
        background-color: #f8f9fa; /* 主题颜色：浅灰 */
    }

    .color-dark {
        background-color: #343a40; /* 主题颜色：深色 */
    }
}
</style>
