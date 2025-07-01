<template>
    <div
        ref="viewportRef"
        class="by-list-viewport"
        :style="{ height: typeof height === 'number' ? `${height}px` : height }"
        @scroll.passive="handleScroll"
    >
        <!-- 占位元素，控制滚动高度 -->
        <div class="by-list-phantom" :style="{ height: `${totalHeight}px` }"></div>

        <!-- 实际渲染的列表项 -->
        <ul class="by-list" :style="{ transform: `translateY(${startOffset}px)` }">
            <span v-if="showHeader" class="header">
                <slot name="header">{{ header }}</slot>
            </span>

            <listItem
                v-for="(item, visibleIndex) in visibleData"
                :key="getItemKey(item)"
                :title="item.title"
                :content="item.content"
                :actions="item.actions"
                :disabled="item.disabled"
                :split="split"
                :index="startIndex + visibleIndex"
                @action-click="handleItemAction(item, $event)"
                :style="getItemStyle(startIndex + visibleIndex)"
            />

            <span v-if="showFooter" class="footer">
                <slot name="footer">{{ footer }}</slot>
            </span>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import listItem from "./listItem.vue";

interface ListItem {
    [key: string]: any;
    title?: string;
    content?: string;
    actions?: Array<{
        text: string;
        onClick?: (e: MouseEvent) => void;
        disabled?: boolean;
    }>;
    disabled?: boolean;
}

interface ListProps {
    lists: ListItem[];
    height?: string | number;
    zebra?: boolean;
    split?: boolean;
    header?: string;
    footer?: string;
    itemSize?: number;
    keyField?: string;
    bufferSize?: number;
}

const props = withDefaults(defineProps<ListProps>(), {
    height: "400px",
    itemSize: 64,
    keyField: "id",
    bufferSize: 3
});

const emit = defineEmits(["scroll", "reach-bottom", "item-action"]);

// 获取项的唯一key
const getItemKey = (item: ListItem) => {
    return item[props.keyField] ?? item.id ?? JSON.stringify(item);
};

// 可视区域ref
const viewportRef = ref<HTMLElement>();
// 可视区域高度
const viewportHeight = ref(0);
// 开始索引
const startIndex = ref(0);
// 结束索引
const endIndex = ref(0);
// 偏移量
const startOffset = ref(0);

// 列表总高度
const totalHeight = computed(() => {
    return props.lists.length * props.itemSize;
});

// 计算可见项数量
const calculateVisibleCount = () => {
    return Math.ceil(viewportHeight.value / props.itemSize);
};

// 可见数据
const visibleData = computed(() => {
    const count = calculateVisibleCount();
    const start = Math.max(0, startIndex.value - props.bufferSize);
    const end = Math.min(startIndex.value + count + props.bufferSize * 2, props.lists.length - 1);
    return props.lists.slice(start, end + 1);
});

// 初始化
const init = () => {
    if (!viewportRef.value) return;

    viewportHeight.value = viewportRef.value.clientHeight;
    const visibleCount = calculateVisibleCount();

    // 初始渲染从第0项开始
    startIndex.value = 0;
    endIndex.value = Math.min(visibleCount + props.bufferSize * 2, props.lists.length - 1);
    startOffset.value = 0;
};

// 更新可见范围
const updateVisibleRange = (currentIndex: number) => {
    if (!viewportRef.value) return;

    const visibleCount = calculateVisibleCount();
    const newStart = Math.max(0, currentIndex - props.bufferSize);
    const newEnd = Math.min(newStart + visibleCount + props.bufferSize * 2, props.lists.length - 1);

    if (newStart !== startIndex.value || newEnd !== endIndex.value) {
        startIndex.value = newStart;
        endIndex.value = newEnd;
        startOffset.value = newStart * props.itemSize;
        checkScrollToBottom();
    }
};

// 处理滚动事件
const handleScroll = () => {
    if (!viewportRef.value) return;

    const scrollTop = viewportRef.value.scrollTop;
    const currentIndex = Math.floor(scrollTop / props.itemSize);
    updateVisibleRange(currentIndex);
};

// 检查是否滚动到底部
const checkScrollToBottom = () => {
    if (!viewportRef.value) return;

    const { scrollTop, scrollHeight, clientHeight } = viewportRef.value;
    const bottom = scrollHeight - (scrollTop + clientHeight);

    if (bottom <= props.itemSize * 2) {
        emit("reach-bottom");
    }
};

// 斑马纹样式
const getItemStyle = (index: number) => {
    if (!props.zebra) return {};
    return {
        backgroundColor: index % 2 === 0 ? "var(--light-color)" : "var(--white-color)"
    };
};

// 初始化
onMounted(() => {
    init();
    // 确保初始位置正确
    nextTick(() => {
        if (viewportRef.value) {
            viewportRef.value.scrollTop = 0;
        }
    });
});

// 监听列表变化
watch(
    () => props.lists,
    () => {
        init();
    },
    { deep: true }
);

// 监听高度变化
watch(
    () => props.height,
    () => {
        nextTick(() => {
            if (viewportRef.value) {
                viewportHeight.value = viewportRef.value.clientHeight;
                updateVisibleRange(startIndex.value);
            }
        });
    }
);
</script>

<style scoped>
.by-list-viewport {
    position: relative;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
}

.by-list-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
}

.by-list {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
}

.header {
    display: block;
    padding: 12px 16px;
    font-weight: bold;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 8px;
}

.footer {
    display: block;
    padding: 12px 16px;
    border-top: 1px solid #f0f0f0;
    margin-top: 8px;
}
</style>
