<template>
    <div class="demo-container">
        <h2>高级Tabs (图标+拖拽)</h2>
        <Tabs v-model:modelValue="activeTab" :items="tabs" draggable @change="handleOrderChange">
            <template #extraLeft>
                <button class="extra-btn" @click="resetTabs">重置归位</button>
            </template>

            <template v-for="tab in tabs" :key="tab.id" #[tab.id]>
                <div class="tab-content">
                    <h3>{{ tab.label }}</h3>
                    <p>{{ tab.content }}</p>
                </div>
            </template>
        </Tabs>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tabs } from "@by-ui/components/tabs";

// 初始状态定义
const initialTabs = [
    {
        id: "mail",
        label: "邮件",
        icon: "fas fa-envelope",
        content: "您的收件箱有3封未读邮件"
    },
    {
        id: "calendar",
        label: "日历",
        icon: "fas fa-calendar",
        content: "今天有2个会议安排"
    },
    {
        id: "files",
        label: "文件",
        icon: "fas fa-folder",
        content: "已使用存储空间85%"
    }
];

const activeTab = ref("mail");
const tabs = ref([...initialTabs]); // 使用初始状态的副本

// 拖拽排序处理
const handleOrderChange = (newItems) => {
    tabs.value = newItems;
};

// 重置归位功能
const resetTabs = () => {
    tabs.value = [...initialTabs];
    activeTab.value = initialTabs[0].id;
    console.log("Tabs已重置到初始状态");
};
</script>
<style scoped>
.extra-btn {
    padding: 5px 10px;
    margin-right: 10px;
    background: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
}
</style>
