<template>
    <div>
        <div style="display: flex; gap: 10px">
            <Button type="primary" @click="visible1 = true">提示反馈</Button>
        </div>
        <Dialog
            type="info"
            header="提示"
            body="对话框内容"
            v-model:visible="visible1"
        >
        aojdf[aosjdf[oahdashfohsifhs[ohf[ohao[shf[hsaohfosahdfiohsadoifhoiasdhfh[saohfoiashdfoha[sohdfsao[fha[osdhfiohasiofh[oas]]]]]]]]]]]
        </Dialog>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { Button } from "@by-ui/components";
import { Dialog } from "@by-ui/components";

const visible1 = ref(false);

const onConfirm = (context) => {
    const { e } = context;
    sendingRequest();
    visible1.value = false;
    e.stopPropagation();
};
const sendingRequest = () => {
    console.log("sending request");
};
const close1 = () => {
    visible1.value = false;
};
</script>
