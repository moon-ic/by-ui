<template>
    <div id="app">
        <h1>My App</h1>
        <Button type="success" size="large" @click="handleClick">Click Me</Button>
        <Button type="danger" size="small" @click="handleClick">Delete</Button>
        <Button type="info" size="medium" @click="handleClick">Info</Button>
    </div>
</template>

<script>
    import { Button } from '../packages/index.js';

    export default {
        name: 'App',
        components: { Button },
        methods: {
            handleClick(event) {
                console.log('Button clicked:', event);
            }
        }
    }
</script>

<style scoped>
</style>