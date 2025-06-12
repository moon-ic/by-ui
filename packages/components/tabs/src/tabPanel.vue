<template>
    <li class="by-tab-panel" :class="{ 'is-active': isActive, 'is-disabled': disabled }">{{ props.label }}</li>
</template>

<script setup lang="ts">
import { TabPanelProps } from "./props";
const props = withDefaults(defineProps<TabPanelProps>(), {
    disabled: false,
    isActive: false,
    label: ""
});
</script>

<style>
@import "../../base/styles/index.css"; /* 全局样式 */
</style>

<style scoped>
@import "../../base/styles/index.css";
.is-active {
    color: var(--primary-color);
}
</style>
