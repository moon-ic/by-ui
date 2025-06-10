<template>
    <div>
        <div style="display: flex; gap: 10px">
            <Button type="primary" @click="visible1 = true">自定义标题</Button>
            <Button @click="visible2 = true">自定义内容</Button>
            <Button @click="visible3 = true">不需要取消btn</Button>
            <Button @click="visible4 = true">文本超多</Button>
        </div>
        <Dialog header="提示" v-model:visible="visible1"></Dialog>
        <Dialog body="对话框内容" v-model:visible="visible2"></Dialog>
        <Dialog cancelBtn="true" v-model:visible="visible3"> 俺是个提示 </Dialog>
        <Dialog header="提示" body="对话框内容" v-model:visible="visible4">{{ text }}</Dialog>
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

const text = "kcsanchasdcioashvoihdaihdfkshdfoiafiouwpojfewonoqkndfobwqoifhiofhkaslhcoh";
</script>
