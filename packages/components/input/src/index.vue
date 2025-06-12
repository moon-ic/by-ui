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
        <input
            class="input-inner"
            :style="{ textAlign: align ? align : 'center' }"
            :status
            :maxWidth
            :defaultValue
            :disabled="status === 'disabled'"
            :readonly="status === 'readonly'"
        />
        <div v-if="append" className="input-group-append">{{ append }}</div>
    </div>
</template>

<script lang="ts" setup>
import { readonly } from "vue";
import { InputProps } from "./prop";
const props = withDefaults(defineProps<InputProps>(), {
    status: "default",
    size: "small",
    maxWidth: "200px",
    defaultValue: "",
    prepend: "",
    append: ""
});
</script>

<style>
@import "../../base/styles/index.css"; /* 全局样式 */
</style>

<style scoped>
@import "../../base/styles/index.css";
.by-input-wrapper {
    position: relative;
    display: flex;
    width: 100%;

    .icon-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 100%;
        color: var(--light-color);

        svg {
            color: var(--third-color);
        }
    }
}

.input-inner {
    width: 100%;
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--secondary-color);
    background-color: var(--white-color);
    background-clip: padding-box;
    border: 1px solid var(--third-color);
    box-shadow: 1px solid rgba(var(--primary-color), 0.25);
    transition: $input-transition;

    &:focus {
        color: var(--dark-color);
        border-color: darken(var(--primary-color), 10%);
        outline: 0;
        box-shadow: 0 0 0 1px rgba(var(--primary-color), 0.25);
    }

    &::placeholder {
        color: var(--third-color);
        opacity: 1;
    }

    &:disabled,
    &[readonly] {
        background-color: var(--light-color);
        border-color: null;
        opacity: 1;
    }
}

.by-input-small > .input-inner,
.by-input-small > .input-group-prepend,
.by-input-small > .input-group-append {
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 3px;
}

.by-input-large > .input-inner,
.by-input-large > .input-group-prepend,
.by-input-large > .input-group-append {
    padding: 8px 14px;
    font-size: 16px;
    border-radius: 5px;
}

.input-group-prepend,
.input-group-append {
    align-items: center;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1.5rem;
    font-weight: 400;
    color: var(--dark-color);
    text-align: center;
    white-space: nowrap;
    background-color: var(--light-color);
    border: 1px solid var(--third-color);
}
.input-group > .input-group-prepend,
.input-group.input-group-append > .input-inner {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.input-group > .input-group-append,
.input-group.input-group-prepend > .input-inner {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.input-group {
    background: none;
    border: none;
    box-shadow: none;
}
</style>
