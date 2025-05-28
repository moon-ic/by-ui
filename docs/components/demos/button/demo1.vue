<template>
    <div class="button-demo">
        <Button type="default" size="large" @click="handleClick">Click Me</Button>
        <Button type="danger" size="large" @click="handleClick">Delete</Button>
        <Button type="warn" size="small" @click="handleClick">Delete</Button>
        <Button @click="handleClick">Primary</Button>
        <Button @click="handleClick" disabled>Primary</Button>
    </div>
</template>

<script setup>
    import { Button } from '@by-ui/components';
    const handleClick = (event) => {
        console.log('Button clicked!', event);
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