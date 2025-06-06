<template>
    <ul class="by-tab">
        <Tab
            v-for="(item, index) in list"
            :key="index"
            :isActive="active === item.key"
            :label="item.label"
            :disalbed="item.disabled"
            @click="handleClick(index)"
        />
    </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TabProps } from "./src/props";
import Tab from "./src/tabPanel.vue";

const props = withDefaults(defineProps<TabProps>(), {});
const active = ref(props.defaultActive);

const handleClick = (index: number) => {
    console.log("click" + index);
    active.value = index;
    props.onSelect?.(index);
};
</script>

<style scoped lang="scss">
@import "../base/styles/index.scss";
</style>
