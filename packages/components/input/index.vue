<template>
    <div
        class="by-input-wrapper"
        :class="[
            `by-input-${size}`,
            prepend || append ? 'input-group' : '',
            prepend ? 'input-group-prepend' : '',
            append ? 'input-group-append' : ''
        ]"
        :style="{ maxWidth: maxWidth ? maxWidth : 'none' }"
    >
        <div v-if="prepend" className="input-group-prepend">{{ prepend }}</div>
        <input class="input-inner" :style="{ textAlign: align ? align : 'center' }" :status :maxWidth :defaultValue />
        <div v-if="append" className="input-group-append">{{ append }}</div>
    </div>
</template>

<script lang="ts" setup>
import { InputProps } from "./src/prop";
const props = withDefaults(defineProps<InputProps>(), {
    status: "default",
    size: "small",
    maxWidth: "200px",
    defaultValue: "3",
    prepend: "1",
    append: "2"
});
</script>

<style scoped lang="scss">
@import "../base/styles/index.scss";
.by-input-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    margin-bottom: 30px;

    .icon-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 100%;
        color: $light-color;

        svg {
            color: $third-color;
        }
    }
}

.input-inner {
    @include button-size(5px, 10px, 14px, 3px);
    width: 100%;
    font-weight: 400;
    line-height: 1.5rem;
    color: $dark-color;
    background-color: $white-color;
    background-clip: padding-box;
    border: 1px solid $third-color;
    box-shadow: 1px solid rgba($primary-color, 0.25);
    transition: $input-transition;

    &:focus {
        color: darken($dark-color, 25%);
        border-color: darken($primary-color, 10%);
        outline: 0;
        box-shadow: 0 0 0 1px rgba($primary-color, 0.25);
    }

    &::placeholder {
        color: $third-color;
        opacity: 1;
    }

    &:disabled,
    &[readonly] {
        background-color: $light-color;
        border-color: null;
        opacity: 1;
    }
}

.input-size-small .input-inner {
    @include input-size(5px, 10px, 14px, 3px);
}

.input-size-large .input-inner {
    @include input-size(5px, 10px, 14px, 3px);
}

.input-group-prepend,
.input-group-append {
    @include input-size(5px, 10px, 14px, 3px);
    align-items: center;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1.5rem;
    font-weight: 400;
    color: $dark-color;
    text-align: center;
    white-space: nowrap;
    background-color: $light-color;
    border: 1px solid $third-color;
}
.input-group > .input-group-prepend,
.input-group.input-group-append > .input-inner {
    @include border-right-radius(0);
}

.input-group > .input-group-append,
.input-group.input-group-prepend > .input-inner {
    @include border-left-radius(0);
}

.input-group {
    background: none;
    border: none;
    box-shadow: none;
}
</style>
