<template>
    <List :lists="listItems" :header="'11'" :footer="'121'"></List>
</template>
<script setup lang="ts">
import { List } from "@by-ui/components";
const listItems = [
    { title: "Item 1", content: "This is the content for item 1", action: "edit", disabled: false },
    { title: "Item 2", content: "This is the content for item 2", action: "delete", disabled: false },
    { title: "Item 3", content: "This is the content for item 3", action: "view", disabled: true },
    { title: "Item 4", content: "This is the content for item 4", action: "edit", disabled: false },
    { title: "Item 5", content: "This is the content for item 5", action: "archive", disabled: false }
];
</script>
<style scoped lang="scss"></style>
