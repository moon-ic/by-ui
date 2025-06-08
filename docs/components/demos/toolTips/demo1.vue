<template>
    <ToolTips class="demo" content="tips">
        <Button>click me</Button>
    </ToolTips>
    <ToolTips class="demo" content="tips"> hello world </ToolTips>
</template>

<script setup lang="ts">
import { ToolTips, Button } from "@by-ui/components";
</script>

<style scoped lang="scss">
.demo {
    margin: 100px;
    background-color: beige;
}
</style>
