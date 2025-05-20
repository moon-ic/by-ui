<template>
    <div id="app">
        <Button type="secondary" size="large" @click="handleClick">Click Me</Button>
        <Button type="danger" size="small" @click="handleClick">Delete</Button>
        <Button @click="handleClick">Primary</Button>
        <Button @click="handleClick" disabled>Primary</Button>
    </div>
</template>

<script setup>
    import { Button } from '../packages/index.js';

    const handleClick = (event) => {
        console.log('Button clicked!', event);
    };

</script>

<style scoped>
</style>