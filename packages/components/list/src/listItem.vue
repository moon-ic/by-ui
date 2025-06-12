<template>
    <li
        class="by-list-item"
        :class="{ 'is-disabled': disabled }"
        :style="{ 'border-bottom': split ? '1px solid #d0d8e2' : 'none' }"
    >
        <ul class="list-items">
            <li class="left">
                <span class="title">{{ title }}</span>
                <span class="content">{{ content }}</span>
            </li>
            <li class="actions">
                <span
                    v-for="action in actions"
                    :key="action.text"
                    class="action"
                    @click="(e: MouseEvent) => action.onClick?.(e)"
                >
                    {{ action.text }}
                </span>
            </li>
        </ul>
    </li>
</template>

<script setup lang="ts">
import { ListItemProps } from "./prop";
const props = withDefaults(defineProps<ListItemProps>(), {
    disabled: false
});
</script>

<style>
@import "../../base/styles/index.css"; /* 全局样式 */
</style>

<style scoped>
@import "../../base/styles/index.css";
.is-disabled {
    color: var(--primary-color);
}
.by-list-item {
    box-sizing: border-box;
    min-width: 200px;
    font-size: 14px;
    line-height: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    .list-items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .left {
            display: flex;
            flex-direction: column;
            width: 100%;
            .title {
                font-size: 16px;
            }
            .content {
                color: var(--secondary-color);
            }
        }
        .actions {
            display: flex;
            justify-content: center;
            align-items: center;
            .action {
                width: 50px;
                text-align: center;
                color: var(--primary-color);
                padding: 0 10px;
            }
        }
    }
}
</style>
