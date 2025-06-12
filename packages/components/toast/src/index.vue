<template>
    <div class="by-toast" v-if="visible">
        <slot class="icon"></slot>
        <span class="message">{{ message }}</span>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import { ToastProps } from "./props";

const props = withDefaults(defineProps<Partial<ToastProps>>(), {
    theme: "primary",
    duration: 3000
});
const visible = ref(true);
let timer: ReturnType<typeof setTimeout>;

onMounted(() => {
    console.log("Toast mounted");
    timer = setTimeout(() => {
        visible.value = false;
        console.log("Toast closed");
    }, props.duration);
});

onBeforeUnmount(() => {
    clearTimeout(timer);
});
</script>

<style scoped lang="scss">
@import "../../base/styles/index.scss";
</style>
