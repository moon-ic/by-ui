<template>
    <div style="display: flex; gap: 10px">
        <Button type="primary" @click="visible">提示反馈</Button>
    </div>
</template>

<script setup>
import { Button } from "@by-ui/components/button";
import { openDialog } from "@by-ui/components/dialog";
const visible = () =>
    openDialog("提示内容", {
        header: "提示",
        type: "info",
        body: "提示内容",
        onConfirm: () => {
            console.log("确认按钮被点击");
        },
        onClose: () => {
            console.log("关闭按钮被点击");
        }
    });
</script>

<style scoped></style>
