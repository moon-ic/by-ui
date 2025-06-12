<template>
    <div>
        <Upload action="https://jsonplaceholder.typicode.com/posts">
            <Button>点我上传试试</Button>
        </Upload>
    </div>
</template>
<script setup>
import { Button } from "@by-ui/components/button";
import { Upload } from "@by-ui/components/upload";
</script>
