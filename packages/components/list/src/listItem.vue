<template>
    <li
        class="by-list-item"
        :class="{
            'is-disabled': disabled,
            'has-actions': actions?.length
        }"
        :style="{ 'border-bottom': split ? '1px solid #d0d8e2' : 'none' }"
        role="listitem"
        :aria-disabled="disabled"
        :data-index="index"
    >
        <div class="list-items">
            <div class="left">
                <span class="title">
                    <slot name="title">{{ title }}</slot>
                </span>
                <span class="content">
                    <slot name="content">{{ content }}</slot>
                </span>
            </div>
            <div class="actions" v-if="actions?.length">
                <span
                    v-for="(action, i) in actions"
                    :key="i"
                    class="action"
                    :class="{ 'is-disabled': disabled || action.disabled }"
                    @click.stop="handleActionClick(action, $event)"
                >
                    {{ action.text }}
                </span>
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
interface ActionItem {
    text: string;
    onClick?: (e: MouseEvent) => void;
    disabled?: boolean;
}

interface ListItemProps {
    title?: string;
    content?: string;
    actions?: ActionItem[];
    disabled?: boolean;
    split?: boolean;
    index?: number;
}

const props = defineProps<ListItemProps>();
const emit = defineEmits(["action-click"]);

const handleActionClick = (action: ActionItem, e: MouseEvent) => {
    if (!props.disabled && !action.disabled) {
        emit("action-click", action, e);
        action.onClick?.(e);
    }
};
</script>

<style scoped>
.by-list-item {
    box-sizing: border-box;
    min-width: 200px;
    font-size: 14px;
    line-height: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}

.by-list-item .list-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
}

.by-list-item .left {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.by-list-item .title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
}

.by-list-item .content {
    color: var(--secondary-color);
    font-size: 14px;
}

.by-list-item .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.by-list-item .action {
    width: 50px;
    text-align: center;
    color: var(--primary-color);
    padding: 0 10px;
    cursor: pointer;
    transition: opacity 0.2s;
}

.by-list-item .action:hover {
    opacity: 0.8;
}

.by-list-item .action.is-disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.by-list-item.is-disabled {
    opacity: 0.6;
    pointer-events: none;
}
</style>
