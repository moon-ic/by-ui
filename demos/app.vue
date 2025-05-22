<template>
    <div id="app">
        <Button type="secondary" size="large" @click="handleClick">Click Me</Button>
        <Button type="danger" size="small" @click="handleClick">Delete</Button>
        <Button @click="handleClick">Primary</Button>
        <Button @click="handleClick" disabled>Primary</Button>
         <div>身如柳絮随风扬，无论云泥意贯一</div>
        <!-- <Dialog type="danger" style="margin: 50px;">
            <div>身如柳絮随风扬，无论云泥意贯一</div>
            <div>身如柳絮随风扬，无论云泥意贯一</div>
            <div>身如柳絮随风扬，无论云泥意贯一</div>
            <div>身如柳絮随风扬，无论云泥意贯一...........</div>
            <div>身如柳絮随风扬，无论云泥意贯一</div>
            <div>身如柳絮随风扬，无论云泥意贯一</div>
            <div>身如柳絮随风扬，无论云泥意贯一</div>
            <div>身如柳絮随风扬，无论云泥意贯一</div>
        </Dialog> -->
    </div>
</template>

<script setup>
    import { Button } from './index.js';
    import { Dialog } from './index.js';
    import { openDialog } from '@/components/dialog/api.ts'

    openDialog('提示内容', {
        title: '提示',
        type: 'danger',
    });

    const handleClick = (event) => {
        console.log('Button clicked!', event);
    };

    const onConfirm = () => {
        console.log("nihao");
    };

</script>
#app {
    overflow: hidden;
}
<style scoped>
</style>