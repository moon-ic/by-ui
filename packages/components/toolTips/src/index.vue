<template>
    <div class="by-tooltips">
        <div class="tip">
            {{ content }}
            <div :showArrow v-if="showArrow" class="tip-raw"></div>
        </div>
        <div class="ele"><slot /></div>
    </div>
</template>

<script setup lang="ts">
import { ToolTipsProps } from "./props";
const props = withDefaults(defineProps<Partial<ToolTipsProps>>(), {
    triggerElement: "hover",
    theme: "dark",
    showArrow: true,
    showShadow: false,
    placement: "top"
});
</script>

<style>
@import "../../base/styles/index.css"; /* 全局样式 */
</style>

<style scoped>
@import "../../base/styles/index.css";
.by-tooltips {
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: aliceblue;
    .tip {
        position: absolute;
        top: -100%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(var(--dark-color), 0.9);
        color: var(--white-color);
        font-size: 12px;
        line-height: 1.5;
        padding: 10px;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(var(--dark-color), 0.25);
        z-index: 1002;
    }
    .tip-raw {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid rgba(var(--dark-color), 0.9);
    }
    .ele {
        position: relative;
        z-index: 1001;
    }
    &.top .tip {
        top: -100%;
        left: 50%;
        transform: translateX(-50%);
    }

    &.bottom .tip {
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
    }

    &.left .tip {
        top: 50%;
        left: -100%;
        transform: translateY(-50%);
    }

    &.right .tip {
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
    }
}
</style>
