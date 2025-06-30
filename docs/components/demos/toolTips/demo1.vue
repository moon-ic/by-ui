<template>
    <div class="demo-container">
        <!-- 左侧示例 -->
        <Tooltip content="左侧提示" placement="left" theme="primary">
            <button>左侧</button>
        </Tooltip>

        <Tooltip content="左侧上方提示哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈" placement="left-start" theme="success">
            <button>左上方</button>
        </Tooltip>

        <Tooltip content="顶部start" placement="top-start" theme="danger">
            <button>顶部start</button>
        </Tooltip>

        <!-- 其他方向示例 -->
        <Tooltip content="顶部提示" placement="top-end">
            <button>顶部end</button>
        </Tooltip>

        <Tooltip content="右侧提示" placement="right" theme="warning">
            <button>右侧</button>
        </Tooltip>
    </div>
</template>

<script setup>
import { Tooltip } from "@by-ui/components/tooltip";
</script>

<style>
.demo-container {
    display: flex;
    gap: 20px;
    padding: 40px;
    justify-content: center;
}

button {
    padding: 8px 16px;
    background: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
}
</style>
