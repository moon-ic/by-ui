<template>
    <div
        class="upload-dragger"
        :class="{ 'is-dragover': dragOver }"
        @dragover="handleDragOver"
        @dragenter="handleDragOver"
        @dragleave="handleDragLeave"
        @drop="handleDrop"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface DraggerProps {
    onFile: (file: FileList) => void;
}

const props = defineProps<DraggerProps>();
const dragOver = ref(false);

const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    dragOver.value = true;
};

const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    dragOver.value = false;
};

const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    dragOver.value = false;
    if (e.dataTransfer?.files) props.onFile(e.dataTransfer.files);
};
</script>
