<template>
    <div>
        <div style="display: flex; gap: 10px">
            <Button type="primary" @click="visible1 = true">提示反馈1</Button>
            <Button type="danger" @click="visible2 = true">提示反馈2</Button>
            <Button type="warn" @click="visible3 = true">提示反馈3</Button>
            <Button type="default" @click="visible4 = true">成功反馈4</Button>
            <Button type="default" @click="visible5 = true">普通反馈5</Button>
        </div>
        <Dialog type="info" header=" 信息提示" body="对话框内容" v-model:visible="visible1"> 俺是个提示 </Dialog>
        <Dialog type="danger" header="危险提示" body="对话框内容" v-model:visible="visible2"> 俺是个提示 </Dialog>
        <Dialog type="warning" header="警告提示" body="对话框内容" v-model:visible="visible3"> 俺是个提示 </Dialog>
        <Dialog type="success" header="成功提示" body="对话框内容" v-model:visible="visible4"> 俺是个提示 </Dialog>
        <Dialog header="普通提示" body="对话框内容" v-model:visible="visible5"> 俺是个提示 </Dialog>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { Button } from "@by-ui/components";
import { Dialog } from "@by-ui/components";

const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const visible4 = ref(false);
const visible5 = ref(false);
</script>
