<template>
    <li class="by-list-item" :class="{ 'is-disabled': disabled }">
        <ul class="list-items">
            <li class="title">{{ title }}</li>
            <li class="content">{{ content }}</li>
            <div class="action"></div>
        </ul>
    </li>
</template>

<script setup lang="ts">
import { ListItemProps } from "./props";
const props = withDefaults(defineProps<ListItemProps>(), {
    disabled: false
});
</script>

<style scoped lang="scss">
@import "../../base/styles/index.scss";
.is-disabled {
    color: $primary-color;
}
.list-items {
    display: flex;
    gap: 50px;
}
</style>
