<template>
    <div class="tabs-container" :class="[`tabs-${position}`, `tabs-${type}`]">
        <!-- 左侧附加内容 -->
        <div v-if="$slots.extraLeft" class="tabs-extra-left">
            <slot name="extraLeft"></slot>
        </div>

        <!-- 标签栏容器 -->
        <div ref="navContainer" class="tabs-nav-container">
            <div ref="navWrap" class="tabs-nav-wrap" :class="{ 'tabs-centered': centered }">
                <!-- 单个标签 -->
                <div
                    v-for="(item, index) in items"
                    :key="item.id"
                    ref="tabRefs"
                    class="tabs-tab"
                    :class="{
                        'tabs-tab-active': modelValue === item.id,
                        'tabs-tab-disabled': item.disabled,
                        'draggable-item': draggable
                    }"
                    draggable="true"
                    @click="handleTabClick(item)"
                    @dragstart="handleDragStart(index)"
                    @dragover="handleDragOver($event, index)"
                    @dragend="handleDragEnd"
                >
                    <!-- 图标 -->
                    <i v-if="item.icon" :class="item.icon" class="tabs-tab-icon"></i>
                    <!-- 标签文本 -->
                    <span class="tabs-tab-label">{{ item.label }}</span>
                    <!-- 关闭按钮 -->
                    <span
                        v-if="type === 'card' && item.closable !== false"
                        class="tabs-tab-close"
                        @click.stop="handleClose(item.id)"
                    >
                        ×
                    </span>
                </div>

                <!-- 指示条 -->
                <div v-if="indicator && type === 'line'" class="tabs-ink-bar" :style="indicatorStyle"></div>
            </div>

            <!-- 添加按钮 -->
            <button v-if="addable && type === 'card'" class="tabs-add-btn" @click="$emit('add')">+</button>
        </div>

        <!-- 右侧附加内容 -->
        <div v-if="$slots.extraRight" class="tabs-extra-right">
            <slot name="extraRight"></slot>
        </div>

        <!-- 内容区域 -->
        <div
            class="tabs-content"
            :style="{
                'margin-left': position === 'left' ? '10px' : '0',
                'margin-right': position === 'right' ? '10px' : '0'
            }"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch, nextTick } from "vue";
import type { TabsProps, TabsEmits, TabItem } from "./props";

const props = withDefaults(defineProps<TabsProps>(), {
    type: "line",
    position: "top",
    centered: false,
    indicator: true,
    indicatorWidth: "auto",
    indicatorAlign: "start",
    addable: false,
    draggable: false
});

const emit = defineEmits<TabsEmits>();

const navContainer = ref<HTMLElement | null>(null);
const navWrap = ref<HTMLElement | null>(null);
const tabRefs = ref<HTMLElement[]>([]);
const activeTabRef = ref<HTMLElement | null>(null);
let draggedItemIndex = -1;

// 指示条样式
// 修改后的指示条样式计算 - 修复纵向布局定位
const indicatorStyle = computed(() => {
    if (!activeTabRef.value) return {};

    const tabRect = activeTabRef.value.getBoundingClientRect();
    const containerRect = navContainer.value?.getBoundingClientRect();

    if (!containerRect) return {};

    // 横向布局
    if (props.position === "top" || props.position === "bottom") {
        let left = tabRect.left - containerRect.left;
        let width = tabRect.width;

        if (props.indicatorWidth !== "auto") {
            width = typeof props.indicatorWidth === "string" ? parseInt(props.indicatorWidth) : props.indicatorWidth;

            // 处理对齐方式
            switch (props.indicatorAlign) {
                case "center":
                    left += (tabRect.width - width) / 2;
                    break;
                case "end":
                    left += tabRect.width - width;
                    break;
            }
        }

        // 关键修复：明确指定 bottom 或 top
        return {
            width: `${width}px`,
            left: `${left}px`,
            height: "2px", // 明确高度
            [props.position === "top" ? "bottom" : "top"]: "0", // 动态设置位置
            [props.position === "top" ? "top" : "bottom"]: "auto" // 重置对立边
        };
    }
    // 纵向布局
    else {
        let top = tabRect.top - containerRect.top;
        return {
            height: `${tabRect.height}px`, // 修改：使用高度而不是宽度
            top: `${top}px`,
            left: props.position === "right" ? "0" : "auto", // 修改
            right: props.position === "left" ? "0" : "auto" // 修改
        };
    }
});

// 处理标签点击
const handleTabClick = (item: TabItem) => {
    if (item.disabled) return;
    emit("update:modelValue", item.id);
};

// 处理关闭
const handleClose = (id: string) => {
    emit("remove", id);
};

// 拖拽开始
const handleDragStart = (index: number) => {
    draggedItemIndex = index;
};

// 拖拽经过
const handleDragOver = (e: DragEvent, index: number) => {
    e.preventDefault();
    if (draggedItemIndex === index) return;

    const newItems = [...props.items];
    const [removed] = newItems.splice(draggedItemIndex, 1);
    newItems.splice(index, 0, removed);

    emit("change", newItems);
    draggedItemIndex = index;
};

// 拖拽结束
const handleDragEnd = () => {
    draggedItemIndex = -1;
};

// 更新指示条位置
const updateIndicatorPosition = () => {
    nextTick(() => {
        const activeIndex = props.items.findIndex((item) => item.id === props.modelValue);
        if (activeIndex >= 0 && tabRefs.value[activeIndex]) {
            activeTabRef.value = tabRefs.value[activeIndex];
        }
    });
};

// 初始化和监听变化
onMounted(updateIndicatorPosition);
watch(() => props.modelValue, updateIndicatorPosition);
watch(() => props.items, updateIndicatorPosition, { deep: true });
// 添加了对纵向布局的特殊处理
watch(
    () => props.position,
    (newVal) => {
        if (newVal === "left" || newVal === "right") {
            nextTick(() => {
                // 纵向布局需要重新计算位置
                updateIndicatorPosition();
            });
        }
    }
);
</script>

<style scoped>
.tabs-container {
    display: flex;
    width: 100%;
    height: 100%;
}

/* 位置样式 */
.tabs-top {
    flex-direction: column;
}

.tabs-bottom {
    flex-direction: column-reverse;
}

.tabs-left {
    flex-direction: row;
}

.tabs-right {
    flex-direction: row-reverse;
}

.tabs-left,
.tabs-right {
    flex-direction: row; /* 确保容器方向正确 */
}

/* 修改指示条样式 */
.tabs-ink-bar {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); /* 添加平滑过渡 */
}

/* 新增：横向布局指示条样式 */
.tabs-top .tabs-ink-bar,
.tabs-bottom .tabs-ink-bar {
    height: 2px; /* 明确高度 */
}

/* 新增：纵向布局指示条样式 */
.tabs-left .tabs-ink-bar,
.tabs-right .tabs-ink-bar {
    width: 2px; /* 明确宽度 */
}

/* 确保指示条基础样式正确 */
.tabs-ink-bar {
    position: absolute;
    background-color: var(--primary-color, #1890ff);
    transition: all 0.3s;
}

/* 横向布局指示条 */
.tabs-top .tabs-ink-bar {
    bottom: 0; /* 始终贴在底部 */
    height: 2px;
}

.tabs-bottom .tabs-ink-bar {
    top: 0; /* 始终贴在顶部 */
    height: 2px;
}

/* 导航栏容器 */
.tabs-nav-container {
    display: flex;
    position: relative;
    overflow: hidden;
}

/* 导航栏包装 */
.tabs-nav-wrap {
    display: flex;
    position: relative;
}

.tabs-left .tabs-nav-wrap,
.tabs-right .tabs-nav-wrap {
    flex-direction: column;
}

.tabs-centered .tabs-nav-wrap {
    justify-content: center;
}

/* 单个标签 */
.tabs-tab {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;
    white-space: nowrap;
}

.draggable-item {
    cursor: grab;
}

.draggable-item:active {
    cursor: grabbing;
}

/* 线型标签样式 */
.tabs-line .tabs-tab {
    border-bottom: 2px solid transparent;
}

.tabs-line .tabs-tab-active {
    color: var(--primary-color, #1890ff);
}

.tabs-line .tabs-tab-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
}

/* 卡片型标签样式 */
/* 卡片式标签基础样式 */
.tabs-card .tabs-tab {
    border: 1px solid #d9d9d9;
    background: #fafafa;

    /* 根据布局方向调整边距 */
    .tabs-top &,
    .tabs-bottom & {
        margin-right: 4px;
        border-radius: 4px 4px 0 0;
    }

    .tabs-left & {
        margin-bottom: 4px;
        border-radius: 4px 0 0 4px;
    }

    .tabs-right & {
        margin-bottom: 4px;
        border-radius: 0 4px 4px 0;
    }
}

/* 修改卡片式标签的激活状态 */
.tabs-card .tabs-tab-active {
    background: #fff;
    color: var(--primary-color, #1890ff);

    /* 横向布局 - 底部边框高亮 */
    .tabs-top &,
    .tabs-bottom & {
        border-bottom-color: #fff;
    }

    /* 纵向布局 - 右侧/左侧边框高亮 */
    .tabs-left & {
        border-right-color: #fff;
    }
    .tabs-right & {
        border-left-color: #fff;
    }
}

.tabs-card .tabs-tab-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
}

/* 指示条 */
.tabs-ink-bar {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: var(--primary-color, #1890ff);
    transition: all 0.3s;
}

.tabs-left .tabs-ink-bar {
    right: 0;
    width: 2px;
    height: auto;
    top: 0;
}

.tabs-right .tabs-ink-bar {
    left: 0;
    width: 2px;
    height: auto;
    top: 0;
}

/* 图标样式 */
.tabs-tab-icon {
    margin-right: 8px;
    font-size: 14px;
}

/* 关闭按钮 */
.tabs-tab-close {
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.45);
    transition: all 0.3s;
    font-size: 14px;
}

.tabs-tab-close:hover {
    color: rgba(0, 0, 0, 0.85);
}

/* 添加按钮 */
.tabs-add-btn {
    padding: 0 16px;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    margin-left: 8px;
    height: 32px;
    align-self: center;
}

.tabs-add-btn:hover {
    color: var(--primary-color, #1890ff);
    border-color: var(--primary-color, #1890ff);
}

/* 附加内容 */
.tabs-extra-left,
.tabs-extra-right {
    display: flex;
    align-items: center;
}

.tabs-extra-left {
    margin-right: 16px;
}

.tabs-extra-right {
    margin-left: 16px;
}

.tabs-content {
    flex: 1;
    padding: 16px;
    overflow: auto;
}
</style>
