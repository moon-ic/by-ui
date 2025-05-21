<template>
    <div id="app">
        <!-- <Button type="secondary" size="large" @click="handleClick">Click Me</Button>
        <Button type="danger" size="small" @click="handleClick">Delete</Button>
        <Button @click="handleClick">Primary</Button>
        <Button @click="handleClick" disabled>Primary</Button> -->
        <Dialog style="margin: 50px;" body="你好沙发排队发货实拍回复i哈u怕死回复哈佛后去皮"></Dialog>
        <Dialog type="danger"  style="margin: 50px;"></Dialog>
        <Dialog type="success" confirmButtonText="ofausf2qifyeqiwyehpi" style="margin: 50px;" :confirmCallback="onConfirm"></Dialog>
        <Dialog type="warning"  style="margin: 50px;"></Dialog>
    </div>
</template>

<script setup>
    import { Button } from '../packages/index.js';
    import { Dialog } from '../packages/index.js';

    const handleClick = (event) => {
        console.log('Button clicked!', event);
    };

    const onConfirm = () => {
        console.log("nihao");
    };

</script>

<style scoped>
</style>