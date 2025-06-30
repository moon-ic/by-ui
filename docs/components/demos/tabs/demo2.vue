<template>
    <div class="demo-container">
        <h2>可关闭Tabs</h2>
        <Tabs v-model:modelValue="activeTab" :items="tabs" type="card" @remove="handleRemove">
            <template v-for="tab in tabs" :key="tab.id" #[tab.id]>
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

const activeTab = ref("tab1");
const tabs = ref([
    { id: "tab1", label: "文档", content: "文档内容", closable: false },
    { id: "tab2", label: "设置", content: "系统设置", closable: true },
    { id: "tab3", label: "帮助", content: "帮助信息", closable: true }
]);

const handleRemove = (id: string) => {
    tabs.value = tabs.value.filter((tab) => tab.id !== id);
};
</script>
