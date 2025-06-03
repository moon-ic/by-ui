<template>
  <div style="display: flex; gap: 10px">
    <Button type="primary" @click="visible1 = true">提示反馈</Button>
  </div>
</template>

<script setup>
  import { openDialog, Button } from '@by-ui/components'
  import { ref, watch } from 'vue';

  const visible1 = ref(false);


  const visible = openDialog('提示内容', {
      header: '提示',
      type: 'info',
      body: '提示内容1',
      visible: visible1.value,
      onConfirm: () => {
        console.log('确认按钮被点击');
      },
      onClose: () => {
        console.log('关闭按钮被点击');
      },
    });

</script>

<style scoped>
</style>
