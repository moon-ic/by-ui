<template>
    <div class="by-dialog"
        :class="[`by-dialog-${type}`]"
        v-if="visibles"
    >
        <div class="by-dialog-header">
            <slot class="header-name">{{title}}</slot>
            <IconError v-if="type === 'danger'" />
            <IconWarning v-if="type === 'warning'" />
            <IconSuccess v-if="type === 'success'" />
            <div class="close">
                <IconClose class="dialog-close-icon" @click="closeDialog()" />
            </div>
        </div>
        <div class="by-dialog-body">
            <slot name="body">{{body}}</slot>
        </div>
        <div class="by-dialog-footer">
            <slot name="footer">
                <Button v-if="isConfirmButton" type="primary" @click="confirm()">{{confirmButtonText}}</Button>
                <Button v-if="isCancelButton" type="secondary" @click="cancel()">{{cancelButtonText}}</Button>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/index';
import IconClose from '@/assets/svg/close.vue';
import IconWarning from '@/assets/svg/warning.vue';
import IconSuccess from '@/assets/svg/success.vue';
import IconError from '@/assets/svg/error.vue';
import { ref } from 'vue';
interface Props {
  type?: string
  title?: string
  body?: string
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
  body: '内容',
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
@import '../../styles/index.scss';

.by-dialog {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    background-color: $white-color;;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    &-header {
        width: 320px;
        padding: 15px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        gap: 5px;
        .close{
            position: absolute;
            right: 4px;
            top: 5px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
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
    }

    &-footer {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 16px;
        text-align: right;

        button {
            margin: 0 8px;
            padding: 7px 30px;
        }
    }
}

.by-dialog-default {
    @include dialog-type($default-color, $dark-color);
}
.by-dialog-danger {
    @include dialog-type($danger-color, $white-color);
}
.by-dialog-info {
     @include dialog-type($info-color, $white-color);
}
.by-dialog-success {
     @include dialog-type($success-color, $white-color);
}
.by-dialog-warning {
     @include dialog-type($warning-color, $white-color);
}
</style>