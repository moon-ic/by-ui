<template>
    <div class="button-demo">
        <Button type="default" @click="handleClick" disabled>Click Me</Button>
        <Button @click="handleClick" disabled>Primary</Button>
        <Button type="warn" @click="handleClick" disabled>Delete</Button>
        <Button type="danger" @click="handleClick" disabled>Delete</Button>
    </div>
</template>

<script setup>
import { Button } from "@by-ui/components";
const handleClick = (event) => {
    console.log("Button clicked!", event);
};

const onConfirm = () => {
    console.log("nihao");
};
</script>
<style scoped>
.button-demo {
    display: flex;
    gap: 10px;
}
</style>
