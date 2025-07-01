<template>
    <div class="avatar-group" :style="groupStyle">
        <div
            v-for="(item, index) in displayedAvatars"
            :key="getKey(item, index)"
            class="avatar-group-item"
            :style="getItemStyle(index)"
        >
            <Avatar v-if="showAvatar(index)" v-bind="getAvatarProps(item)" :class="{ 'avatar-border': showBorder }" />
            <Avatar
                v-else
                class="avatar-extra"
                :size="props.size"
                :shape="props.shape"
                :bgColor="props.bgColor"
                :textColor="props.textColor"
                :text="'+' + (avatars.length - maxCount)"
            ></Avatar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Avatar from "./index.vue";
import type { AvatarGroupProps, AvatarItem, AvatarSize } from "./props";
import { text } from "stream/consumers";

const props = withDefaults(
    defineProps<
        AvatarGroupProps & {
            showBorder?: boolean;
        }
    >(),
    {
        avatars: () => [],
        maxCount: 4,
        overlap: 0.9, // 默认重叠比例调整
        showBorder: true,
        bgColor: "#ccc",
        textColor: "#fff"
    }
);

const sizeValue = computed(() => {
    const sizes: Record<AvatarSize, number> = {
        small: 24,
        medium: 40,
        large: 56
    };
    return sizes[props.size || "medium"];
});

const displayedAvatars = computed(() => props.avatars.slice(0, props.maxCount + (showExtra.value ? 1 : 0)));

const showExtra = computed(() => props.avatars.length > props.maxCount);

const groupStyle = computed(() => ({
    "--avatar-size": `${sizeValue.value}px`,
    "--spacing": `${props.spacing}px`,
    "--overlap": props.overlap
}));

const getKey = (item: AvatarItem, index: number) => item.key ?? `avatar-${index}`;

const showAvatar = (index: number) => index < props.maxCount || !showExtra.value;

const getAvatarProps = (item: AvatarItem) => ({
    size: props.size,
    shape: props.shape,
    ...item
});

const getItemStyle = (index: number) => ({
    zIndex: props.avatars.length + index,
    marginLeft: index === 0 ? 0 : `calc(var(--spacing) * var(--overlap))`,
    filter: props.showBorder ? "drop-shadow(0 0 1px rgba(0,0,0,0.2))" : "none"
});
</script>

<style scoped>
.avatar-group {
    position: relative;
    display: flex;
    height: var(--avatar-size);
    padding-left: calc(var(--avatar-size) * 0.3); /* 补偿第一个元素的偏移 */
}

.avatar-group-item {
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.avatar-group-item:hover {
    transform: translateY(-5px) scale(1.05);
    z-index: 20;
}

.avatar-border {
    border: 2px solid #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.avatar-extra {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(var(--avatar-size) * 0.35);
    font-weight: bold;
    border: 2px solid #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
