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

<style scoped lang="scss">
@import "../../base/styles/index.scss";

.by-btn {
    position: relative;
    display: block;
    color: $dark-color;
    font-weight: 400;
    line-height: 1.5rem;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    background-image: none;
    border: 1px solid transparent;
    box-shadow:
        inset 0 1px 0 rgba($light-color, 0.15),
        0 1px 1px rgba($light-color, 0.075);
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
    transition: $btn-transition;
}
.by-btn-default {
    color: $primary-color;
    background: $white-color;
    border-color: $primary-color;
    &:hover {
        color: $primary-color;
        background: darken($white-color, 7.5%);
        border-color: darken($primary-color, 10%);
        box-shadow:
            inset 0 1px 0 rgba($primary-color, 0.15),
            0 8px 8px rgba($primary-color, 0.075);
    }
    &:active,
    &.active {
        color: $primary-color;
        background: darken($white-color, 5%);
        border-color: darken($primary-color, 8%);
        box-shadow:
            inset 0 2px 0 rgba($primary-color, 0.15),
            0 5px 5px rgba($primary-color, 0.075);
    }
    &:disabled,
    &.disabled {
        color: $primary-color;
        background: $white-color;
        border-color: $primary-color;
    }
    &:hover {
        background-color: $white-color;
    }
    &:active,
    &.active {
        background-color: $white-color;
    }
}
.by-btn-primary {
    color: $light-color;
    background: $primary-color;
    border-color: $primary-color;
    &:hover {
        color: $light-color;
        background: darken($primary-color, 7.5%);
        border-color: darken($primary-color, 10%);
        box-shadow:
            inset 0 1px 0 rgba($light-color, 0.15),
            0 8px 8px rgba($light-color, 0.075);
    }
    &:active,
    &.active {
        color: $light-color;
        background: darken($primary-color, 5%);
        border-color: darken($primary-color, 8%);
        box-shadow:
            inset 0 2px 0 rgba($light-color, 0.15),
            0 5px 5px rgba($light-color, 0.075);
    }
    &:disabled,
    &.disabled {
        color: $light-color;
        background: $primary-color;
        border-color: $primary-color;
    }
}
.by-btn-danger {
    color: $light-color;
    background: $danger-color;
    border-color: $danger-color;
    &:hover {
        color: $light-color;
        background: darken($danger-color, 7.5%);
        border-color: darken($danger-color, 10%);
        box-shadow:
            inset 0 1px 0 rgba($light-color, 0.15),
            0 8px 8px rgba($light-color, 0.075);
    }
    &:active,
    &.active {
        color: $light-color;
        background: darken($danger-color, 5%);
        border-color: darken($danger-color, 8%);
        box-shadow:
            inset 0 2px 0 rgba($light-color, 0.15),
            0 5px 5px rgba($light-color, 0.075);
    }
    &:disabled,
    &.disabled {
        color: $light-color;
        background: $danger-color;
        border-color: $danger-color;
    }
}
.by-btn-warn {
    color: $light-color;
    background: $warn-color;
    border-color: $warn-color;
    &:hover {
        color: $light-color;
        background: darken($warn-color, 7.5%);
        border-color: darken($warn-color, 10%);
        box-shadow:
            inset 0 1px 0 rgba($light-color, 0.15),
            0 8px 8px rgba($light-color, 0.075);
    }
    &:active,
    &.active {
        color: $light-color;
        background: darken($warn-color, 5%);
        border-color: darken($warn-color, 8%);
        box-shadow:
            inset 0 2px 0 rgba($light-color, 0.15),
            0 5px 5px rgba($light-color, 0.075);
    }
    &:disabled,
    &.disabled {
        color: $light-color;
        background: $warn-color;
        border-color: $warn-color;
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
