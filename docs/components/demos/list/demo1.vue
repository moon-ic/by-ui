<template>
    <List :lists="listItems" :header="'11'" :footer="'121'" height="400px" :split="true" :zebra="true"></List>
</template>
<script setup lang="ts">
import { List } from "@by-ui/components/list";
import type { ListItemProps } from "@by-ui/components/list";
export interface ListActionProps {
    text: string;
    onClick?: Function;
}

const listItems: ListItemProps[] = [
    {
        title: "Item 1",
        content: "This is the content for item 1",
        actions: [{ text: "edit", onClick: () => console.log("Edit Item 1") }],
        disabled: false
    },
    {
        title: "Item 2",
        content: "This is the content for item 2",
        actions: [{ text: "delete", onClick: () => console.log("Delete Item 2") }],
        disabled: false
    },
    {
        title: "Item 3",
        content: "This is the content for item 3",
        actions: [{ text: "view", onClick: () => console.log("View Item 3") }],
        disabled: true
    },
    {
        title: "Item 4",
        content: "This is the content for item 4",
        actions: [{ text: "edit", onClick: () => console.log("Edit Item 4") }],
        disabled: false
    },
    {
        title: "Item 5",
        content: "This is the content for item 5",
        actions: [{ text: "archive", onClick: () => console.log("Archive Item 5") }],
        disabled: false
    }
];
</script>
<style scoped lang="scss"></style>
