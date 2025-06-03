<template>
    <div class="by-dialog" :class="[`by-dialog-${type}`]" v-if="visible">
        <div class="by-dialog-header">
            <div class="iconBox">
                <IconInfo size="24" v-if="type === 'info'" />
                <IconError size="24" v-if="type === 'danger'" />
                <IconWarning size="24" v-if="type === 'warning'" />
                <IconSuccess size="24" v-if="type === 'success'" />
            </div>
            <div class="header-name">{{ header }}</div>
            <div class="close">
                <IconClose class="dialog-close-icon" @click="closeDialog()" />
            </div>
        </div>
        <div class="by-dialog-body">
            <slot>{{ body }}</slot>
        </div>
        <div class="by-dialog-footer">
                <Button v-if="cancelBtn === false" type="default" style="width: 60px" @click="close()">取消</Button>
                <Button type="primary" style="width: 60px;" @click="confirm()">确认</Button>
        </div>
    </div>
    <div v-if="visible" class="dialog-mask" />
</template>

<script setup lang="ts">
import { DialogProps } from "./src/prop";
import IconInfo from '@/components/base/assets/svg/info.vue';
import IconClose from '@/components/base/assets/svg/close.vue';
import IconWarning from '@/components/base/assets/svg/warning.vue';
import IconSuccess from '@/components/base/assets/svg/success.vue';
import IconError from '@/components/base/assets/svg/error.vue';
import Button from '@/components/button/index.vue';
import { computed } from "vue";

const props = withDefaults(defineProps<DialogProps>(), {
    type: "default",
    visible: true
});
const emit = defineEmits(['update:visible','confirm', 'close']);
const closeDialog = () => {
    emit('update:visible', false);
};
const confirm = () => {
    emit('confirm');
    closeDialog();
};
const close = () => {
    emit('close');
    closeDialog();
}
</script>

<style scoped lang="scss">
@import "../base/styles/index.scss";

.by-dialog {
    position: fixed;
    z-index: 10000;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 415px;
    padding: 32px;
    background-color: $white-color;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: $btn-transition;

    &-header {
        width: 100%;
        text-align: left;
        font-size: 16px;
        font-weight: bold;
        line-height: 30px;
        color: $dark-color;
        display: flex;
        align-items: center;
        justify-content: start;
        position: relative;
        gap: 8px;
        .iconBox{
            display: flex;
            align-items: center;
        }
        .close{
            position: absolute;
            right: 0;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                background-color: darken($light-color, 5%);
            }
            &:active,
            &.active {
                background-color: darken($light-color, 10%);
            }
        }
    }

    &-body {
        width: 100%;
        text-align: center;
        min-height: 40px;
        max-height: 200px;
        overflow: scroll;
        line-height: 20px;
        font-size: 14px;
        color: #888;
        margin: 10px 0px;
        overflow-wrap: break-word;
    }

    &-footer {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap:10px;
        align-items: center;
    }
}

.by-dialog-info {
    .iconBox{
        color: $primary-color;
    }
}
.by-dialog-success {
    .iconBox{
        color: $success-color;
    }
}
.by-dialog-danger {
    .iconBox{
        color: $danger-color;
    }
}
.by-dialog-warning {
    .iconBox{
        color: $warn-color;
    }
}

.dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}
</style>
