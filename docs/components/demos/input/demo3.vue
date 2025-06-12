<template>
    <div class="button-demo">
        <Input defaultValue="普普通通一input" />
        <Input status="disabled" defaultValue="禁用" />
        <Input status="readonly" defaultValue="只读" />
    </div>
</template>
<script setup>
import { Input } from "@by-ui/components/input";
</script>
<style>
.button-demo Input {
    margin: 10px;
}
</style>
