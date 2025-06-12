<template>
    <span class="by-avatar">
        <img v-if="image" class="avatar__image" :src="image" alt="avatar" />
        <img v-else-if="icon" class="avatar__icon" :src="icon" />
        <span v-else-if="alt" class="avatar__text">{{ alt }}</span>
        <slot v-else class="avatar__icon"></slot>
    </span>
</template>

<script setup lang="ts">
import { AvatarProps } from "./props";

const props = defineProps<AvatarProps>();
</script>

<style>
@import "../../base/styles/index.css"; /* 全局样式 */
</style>

<style scoped>
@import "../../base/styles/index.css";
</style>
