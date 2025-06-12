<template>
    <div class="button-demo">
        <by-button type="default" @click="handleClick">Click Me</by-button>
        <Button @click="handleClick">Primary</Button>
        <Button type="warn" @click="handleClick">Delete</Button>
        <Button type="danger" @click="handleClick">Delete</Button>
    </div>
</template>

<script setup>
import { Button } from "@by-ui/components/button";
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
