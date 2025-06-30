<template>
    <div class="demo-container">
        <h2>可添加Tabs</h2>
        <Tabs v-model:modelValue="activeTab" :items="tabs" type="card" addable @add="handleAdd" @remove="handleRemove">
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
const tabs = ref([{ id: "tab1", label: "默认标签", content: "初始内容", closable: false }]);

let counter = 1;
const handleAdd = () => {
    const newId = `tab-${Date.now()}`;
    tabs.value.push({
        id: newId,
        label: `新标签 ${++counter}`,
        content: `这是第 ${counter} 个标签的内容`,
        closable: true
    });
    activeTab.value = newId;
};

const handleRemove = (id: string) => {
    tabs.value = tabs.value.filter((tab) => tab.id !== id);
};
</script>
