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

<style scoped lang="scss">
@import "../../base/styles/index.scss";
.is-active {
    color: $primary-color;
}
</style>
