<template>
    <ToolTips class="demo" content="tips">
        <Button>click me</Button>
    </ToolTips>
    <ToolTips class="demo" content="tips"> hello world </ToolTips>
</template>

<script setup lang="ts">
import { ToolTips } from "@by-ui/components/tooltips";
import { Button } from "@by-ui/components/button";
</script>

<style scoped lang="scss">
.demo {
    margin: 100px;
    background-color: beige;
}
</style>
