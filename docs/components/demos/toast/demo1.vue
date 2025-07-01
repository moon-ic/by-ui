<template>
    <button @click="showToast">显示Toast</button>
    <Toast ref="toastRef" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Toast } from "@by-ui/components/toast";

const toastRef = ref<InstanceType<typeof Toast>>();

const showToast = () => {
    toastRef.value?.show({
        message: "操作成功",
        type: "default",
        duration: 2000,
        layout: "vertical"
    });
};
</script>
