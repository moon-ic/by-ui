<template>
    <div class="box">
        <Avatar text="Vue3" size="large" shape="circle" :badge="3" bgColor="#42b983" textColor="#fff" />
    </div>
</template>
<script setup>
import { Avatar } from "@by-ui/components/avatar";
import Icon from "../../../../packages/components/base/assets/svg/info.vue";
</script>
<style>
.box {
    margin: 10px;
}
</style>
