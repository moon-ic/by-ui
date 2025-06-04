<template>
    <div>
        <Upload action="https://jsonplaceholder.typicode.com/posts" :drag="true">
            <div class="test"></div>
        </Upload>
    </div>
</template>
<script setup>
import { Upload } from "@by-ui/components";
</script>
<style>
.test {
    width: 200px;
    height: 200px;
    background-color: rgb(154, 196, 232);
}
</style>
