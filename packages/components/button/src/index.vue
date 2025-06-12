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

    @include button-size(0.375rem, 0.75rem, 1rem, 0.25rem);

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
    @include button-style($white-color, $primary-color, $primary-color);
    &:hover {
        background-color: $white-color;
    }
    &:active,
    &.active {
        background-color: $white-color;
    }
}
.by-btn-primary {
    @include button-style($primary-color, $primary-color, $light-color);
}
.by-btn-danger {
    @include button-style($danger-color, $danger-color, $light-color);
}
.by-btn-warn {
    @include button-style($warn-color, $warn-color, $light-color);
}

.by-btn-small {
    @include button-size(4px, 7px, 13px, 3px);
}
.by-btn-medium {
    @include button-size(5px, 10px, 14px, 4px);
}
.by-btn-large {
    @include button-size(8px, 14px, 16px, 5px);
}
</style>
