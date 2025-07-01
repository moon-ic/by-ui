<template>
    <div class="demo-container">
        <h2>虚拟列表演示</h2>

        <List :lists="items" height="500px" :item-size="72" key-field="id" zebra split @reach-bottom="loadMore" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { List } from "@by-ui/components/list";

// 生成测试数据
const generateItems = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
        id: `item-${i}`,
        title: `项目 ${i + 1}`,
        content: `这是第 ${i + 1} 个项目的内容描述，可能包含更多详细信息...`,
        disabled: i % 11 === 1,
        actions: [
            {
                text: "编辑",
                onClick: () => editItem(i)
            },
            {
                text: "删除",
                onClick: () => deleteItem(i)
            }
        ]
    }));
};

const items = ref(generateItems(1000));
const loading = ref(false);

const loadMore = () => {
    if (loading.value) return;

    loading.value = true;
    setTimeout(() => {
        items.value = [...items.value, ...generateItems(50)];
        loading.value = false;
    }, 1000);
};

const editItem = (index: number) => {
    console.log("编辑项目:", index);
};

const deleteItem = (index: number) => {
    items.value.splice(index, 1);
};
</script>

<style>
.demo-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h2 {
    margin-bottom: 20px;
    color: #333;
}
</style>
