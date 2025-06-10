<template>
    <div class="button-demo">
        <Button @click="handleClick" size="small">Primary</Button>
        <Button @click="handleClick">Primary</Button>
        <Button @click="handleClick" size="large">Primary</Button>
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
.button-demo Button {
    margin: 10px;
}
</style>
