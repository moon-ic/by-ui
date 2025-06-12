<template>
    <ul
        class="by-list"
        :style="{ height: height, overflow: height ? 'auto' : undefined }"
        :class="{ 'is-zebra': zebra }"
    >
        <span class="header">
            <slot name="header">{{ header }}</slot>
        </span>
        <listItem
            v-for="item in lists"
            :title="item.title"
            :content="item.content"
            :actions="item.actions"
            :disabled="item.disabled"
            :split
        />
        <span class="footer">
            <slot name="footer">{{ footer }}</slot>
        </span>
    </ul>
</template>

<script setup lang="ts">
import listItem from "./listItem.vue";
import { ListProps } from "./prop";

const props = withDefaults(defineProps<ListProps>(), {
    height: "auto"
});
</script>

<style scoped lang="scss">
@import "../../base/styles/index.scss";
.by-list {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    .header {
        margin-bottom: 10px;
    }
    .footer {
        margin-top: 10px;
    }
}
.is-zebra {
    .by-list-item:nth-child(odd) {
        background-color: $light-color; // 设置奇数项的背景颜色
    }

    .by-list-item:nth-child(even) {
        background-color: $white-color; // 设置偶数项的背景颜色
    }
}
</style>
