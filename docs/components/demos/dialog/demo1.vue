<template>
    <div>
        <div style="display: flex; gap: 10px">
            <Button type="primary" @click="visible1 = true">提示反馈</Button>
        </div>
        <Dialog type="info" header="提示" body="对话框内容" v-model:visible="visible1"> 俺是个提示 </Dialog>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { Button } from "@by-ui/components";
import { Dialog } from "@by-ui/components";

const visible1 = ref(false);
</script>
