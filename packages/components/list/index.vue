<template>
    <ul class="by-list">
        <div class="header">{{ header }}</div>
        <listItem
            v-for="(item, index) in lists"
            :title="item.title"
            :content="item.content"
            :action="item.action"
            :disabled="item.disabled"
        />
        <div class="footer">{{ footer }}</div>
    </ul>
</template>

<script setup lang="ts">
import listItem from "./src/listItem.vue";
import { ListProps } from "./src/props";

const props = withDefaults(defineProps<ListProps>(), {});
</script>

<style scoped lang="scss">
@import "../base/styles/index.scss";
</style>
