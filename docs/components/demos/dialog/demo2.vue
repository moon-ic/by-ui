<template>
    <div>
    </div>
</template>

<script setup>
    import { openDialog } from '@by-ui/components'

    openDialog('提示内容', {
        header: '提示',
        type: 'info',
    });

</script>

<style scoped>
</style>