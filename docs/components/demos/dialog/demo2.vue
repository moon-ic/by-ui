<template>
    <div>
    </div>
</template>

<script setup>
    import { openDialog } from '@by-ui/components'

    openDialog('提示内容', {
        title: '提示',
        type: 'danger',
    });

</script>

<style scoped>
</style>