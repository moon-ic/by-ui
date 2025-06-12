<template>
    <Tabs :list="tabPanels" :defaultActive="0"></Tabs>
</template>
<script setup lang="ts">
import { Tabs } from "@by-ui/components/tabs";
const tabPanels = [
    { label: "Tab 0", disabled: false, key: 0 },
    { label: "Tab 1", disabled: false, key: 1 },
    { label: "Tab 2", disabled: false, key: 2 },
    { label: "Tab 3", disabled: true, key: 3 },
    { label: "Tab 4", disabled: false, key: 4 },
    { label: "Tab 5", disabled: false, key: 5 }
];
</script>
<style scoped lang="scss"></style>
