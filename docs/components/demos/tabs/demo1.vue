<template>
    <div class="demo-container">
        <h2>基础Tabs</h2>

        <!-- 纵向布局Tabs -->
        <h3>纵向布局</h3>
        <Tabs v-model:modelValue="verticalActiveTab" :items="verticalTabs" position="left">
            <template v-for="tab in verticalTabs" :key="tab.id" #[tab.id]>
                <div class="tab-content">
                    {{ tab.content }}
                </div>
            </template>
        </Tabs>

        <!-- 横向布局Tabs -->
        <h3>横向布局</h3>
        <Tabs v-model:modelValue="horizontalActiveTab" :items="horizontalTabs" position="top">
            <template v-for="tab in horizontalTabs" :key="tab.id" #[tab.id]>
                <div class="tab-content">
                    {{ tab.content }}
                </div>
            </template>
        </Tabs>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tabs } from "@by-ui/components/tabs";

// 纵向布局数据
const verticalActiveTab = ref("v-tab1");
const verticalTabs = ref([
    { id: "v-tab1", label: "首页", content: "这是首页内容(纵向)" },
    { id: "v-tab2", label: "产品", content: "产品列表展示(纵向)" },
    { id: "v-tab3", label: "关于", content: "关于我们信息(纵向)" }
]);

// 横向布局数据
const horizontalActiveTab = ref("h-tab1");
const horizontalTabs = ref([
    { id: "h-tab1", label: "首页", content: "这是首页内容(横向)" },
    { id: "h-tab2", label: "产品", content: "产品列表展示(横向)" },
    { id: "h-tab3", label: "关于", content: "关于我们信息(横向)" }
]);
</script>

<style scoped>
.layout-buttons {
    margin-bottom: 10px;
}
.layout-buttons button {
    margin-right: 5px;
    padding: 2px 8px;
}
</style>
