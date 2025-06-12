<template>
    <button class="by-btn" :class="[`by-btn-${type}`, `by-btn-${size}`]" :disabled="disabled" @click="handleClick()">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { ButtonProps } from "./props";
const props = withDefaults(defineProps<ButtonProps>(), {
    type: "primary",
    size: "medium",
    disabled: false
});

const emit = defineEmits(["click"]);

const handleClick = () => {
    if (!props.disabled) {
        emit("click");
    }
};
</script>

<style>
@import "../../base/styles/index.css"; /* 全局样式 */
</style>

<style scoped>
@import "../../base/styles/index.css";

.by-btn {
    position: relative;
    display: block;
    color: var(--dark-color);
    font-weight: 400;
    line-height: 1.5rem;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    background-image: none;
    border: 1px solid transparent;
    box-shadow:
        inset 0 1px 0 rgba(var(--light-color), 0.15),
        0 1px 1px rgba(var(--light-color), 0.075);
    cursor: pointer;
    display: flex;
    justify-content: center;

    &.disabled,
    &[disabled] {
        box-shadow: none;
        cursor: not-allowed;
        opacity: 0.65;

        > * {
            pointer-events: none;
        }
    }
    transition: var(--btn-transition);
}
.by-btn-default {
    color: var(--primary-color);
    background: var(--white-color);
    border-color: var(--primary-color);
    &:hover {
        color: var(--primary-color);
        background: darken(var(--white-color), 7.5%);
        border-color: darken(var(--primary-color), 10%);
        box-shadow:
            inset 0 1px 0 rgba(var(--primary-color), 0.15),
            0 8px 8px rgba(var(--primary-color), 0.075);
    }
    &:active,
    &.active {
        color: var(--primary-color);
        background: darken(var(--white-color), 5%);
        border-color: darken(var(--primary-color), 8%);
        box-shadow:
            inset 0 2px 0 rgba(var(--primary-color), 0.15),
            0 5px 5px rgba(var(--primary-color), 0.075);
    }
    &:disabled,
    &.disabled {
        color: var(--primary-color);
        background: var(--white-color);
        border-color: var(--primary-color);
    }
    &:hover {
        background-color: var(--white-color);
    }
    &:active,
    &.active {
        background-color: var(--white-color);
    }
}
.by-btn-primary {
    color: var(--light-color);
    background: var(--primary-color);
    border-color: var(--primary-color);
    &:hover {
        color: var(--light-color);
        background: darken(var(--primary-color), 7.5%);
        border-color: darken(var(--primary-color), 10%);
        box-shadow:
            inset 0 1px 0 rgba(var(--light-color), 0.15),
            0 8px 8px rgba(var(--light-color), 0.075);
    }
    &:active,
    &.active {
        color: var(--light-color);
        background: darken(var(--primary-color), 5%);
        border-color: darken(var(--primary-color), 8%);
        box-shadow:
            inset 0 2px 0 rgba(var(--light-color), 0.15),
            0 5px 5px rgba(var(--light-color), 0.075);
    }
    &:disabled,
    &.disabled {
        color: var(--light-color);
        background: var(--primary-color);
        border-color: var(--primary-color);
    }
}
.by-btn-danger {
    color: var(--light-color);
    background: var(--danger-color);
    border-color: var(--danger-color);
    &:hover {
        color: var(--light-color);
        background: darken(var(--danger-color), 7.5%);
        border-color: darken(var(--danger-color), 10%);
        box-shadow:
            inset 0 1px 0 rgba(var(--light-color), 0.15),
            0 8px 8px rgba(var(--light-color), 0.075);
    }
    &:active,
    &.active {
        color: var(--light-color);
        background: darken(var(--danger-color), 5%);
        border-color: darken(var(--danger-color), 8%);
        box-shadow:
            inset 0 2px 0 rgba(var(--light-color), 0.15),
            0 5px 5px rgba(var(--light-color), 0.075);
    }
    &:disabled,
    &.disabled {
        color: var(--light-color);
        background: var(--danger-color);
        border-color: var(--danger-color);
    }
}
.by-btn-warn {
    color: var(--light-color);
    background: var(--warn-color);
    border-color: var(--warn-color);
    &:hover {
        color: var(--light-color);
        background: darken(var(--warn-color), 7.5%);
        border-color: darken(var(--warn-color), 10%);
        box-shadow:
            inset 0 1px 0 rgba(var(--light-color), 0.15),
            0 8px 8px rgba(var(--light-color), 0.075);
    }
    &:active,
    &.active {
        color: var(--light-color);
        background: darken(var(--warn-color), 5%);
        border-color: darken(var(--warn-color), 8%);
        box-shadow:
            inset 0 2px 0 rgba(var(--light-color), 0.15),
            0 5px 5px rgba(var(--light-color), 0.075);
    }
    &:disabled,
    &.disabled {
        color: var(--light-color);
        background: var(--warn-color);
        border-color: var(--warn-color);
    }
}

.by-btn-small {
    padding: 4px 7px;
    font-size: 13px;
    border-radius: 3px;
}
.by-btn-medium {
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 4px;
}
.by-btn-large {
    padding: 8px 14px;
    font-size: 16px;
    border-radius: 5px;
}
</style>
