<template>
    <button class="btn"
            :class="[
                `btn-${type}`,
                `btn-${size}`
            ]"
            :type="type"
            :disabled="disabled"
            @click="emit('click')">
        <slot />
        nihao
    </button>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'default'
    },
    size: {
        type: String,
        default: 'medium'
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['click']);
</script>

<style scoped>
.btn {
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}
.btn-default {
    background-color: #f0f0f0;
}
</style>