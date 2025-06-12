<template>
    <div class="button-demo">
        <by-input prepend="前缀" />
        <Input append="后缀" />
        <Input defaultValue="普普通通一input" />
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
