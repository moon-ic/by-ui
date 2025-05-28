<template>
    <div class="by-dialog"
        :class="[`by-dialog-${type}`]"
        :visibles
        v-if="visibles"
    >
        <div class="by-dialog-header">
            <IconError v-if="type === 'danger'" />
            <IconWarning v-if="type === 'warning'" />
            <IconSuccess v-if="type === 'success'" />
            <div class="header-name">{{title}}</div>
            <div class="close">
                <IconClose class="dialog-close-icon" @click="closeDialog()" />
            </div>
        </div>
        <div class="by-dialog-body">
            <slot></slot>
        </div>
        <div class="by-dialog-footer">
            <slot name="footer">
                <Button v-if="isConfirmButton" type="primary" @click="confirm()">{{confirmButtonText}}</Button>
                <Button v-if="isCancelButton" type="default" @click="cancel()">{{cancelButtonText}}</Button>
            </slot>
        </div>
    </div>
    <div v-if="visibles" class="dialog-mask" />
</template>

<script setup lang="ts">
import Button from '@/components/button/index.vue';
import IconClose from '@/components/base/assets/svg/close.vue';
import IconWarning from '@/components/base/assets/svg/warning.vue';
import IconSuccess from '@/components/base/assets/svg/success.vue';
import IconError from '@/components/base/assets/svg/error.vue';
import { ref } from 'vue';
interface Props {
  type?: string
  title?: string
  isConfirmButton?: boolean
  isCancelButton?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
  confirmCallback?: () => void
  cancelCallback?: () => void
  visible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  title: '标题',
  isConfirmButton: true,
  isCancelButton: true,
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  confirmCallback: () => {},
  cancelCallback: () => {},
  visible: true
})


const visibles = ref(props.visible);
const closeDialog = () => {
    visibles.value = false;
}
const confirm = () => {
    props.confirmCallback();
    closeDialog();
}
const cancel = () => {
    props.cancelCallback();
    closeDialog();
}
</script>

<style scoped lang="scss">
@import '../base/styles/index.scss';

.by-dialog {
    position: fixed;
    z-index: 10000;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    background-color: $white-color;;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    &-header {
        width: 320px;
        padding: 12px 15px;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        gap: 3px;
        .close{
            position: absolute;
            right: 4px;
            top: 5px;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    &-body {
        width: 320px;
        padding: 15px;
        text-align: center;
        flex-grow: 1;
        color: $dark-color;
        min-height: 200px;
        max-height: 400px;
        overflow: scroll;
    }

    &-footer {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 16px;
        text-align: right;

        button {
            margin: 0 10px;
            padding: 7px 40px;
        }
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

.by-dialog-default {
    @include dialog-type($default-color, $dark-color);
}
.by-dialog-danger {
    @include dialog-type($danger-color, $white-color);
}
.by-dialog-success {
     @include dialog-type($success-color, $white-color);
}
.by-dialog-warning {
     @include dialog-type($warn-color, $white-color);
}
</style>