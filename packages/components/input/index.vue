<script lang="ts" setup>
</script>
<template>
    <div>
        <input
            :type="inputType"
            :maxlength="maxLength"
            @input="handleInput"
            @change=""handleChange"
            @focus="handleFocus"
            @blur="handleBlur"
            @keyup.enter="handleEnter"
        />
    </div>
</template>