<template>
    <div class="by-dialog">
        <div class="by-dialog-header">
            <slot name="header">Default Header</slot>
        </div>
        <div class="by-dialog-body">
            <slot name="body">Default Body</slot>
        </div>
        <div class="by-dialog-footer">
            <slot name="footer">
                <button @click="$emit('close')">Close</button>
            </slot>
        </div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        title: {
            type: String,
            default: 'Default Title'
        },
        visible: {
            type: Boolean,
            default: false
        }
    });
</script>
<style></style>