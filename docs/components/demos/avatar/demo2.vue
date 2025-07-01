<template>
    <AvatarGroup :avatars="users" shape="circle" :max-count="3" :spacing="-20" />
</template>

<script setup>
import { AvatarGroup } from "@by-ui/components/avatar";

const users = [
    { text: "张" },
    { text: "张" },
    { text: "张" },
    { text: "张" },
    { text: "张" },
    { text: "张" },
    { text: "李" }
];
</script>
