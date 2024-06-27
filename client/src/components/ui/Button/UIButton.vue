<template>
    <button>
        {{ label }}
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

// eslint-disable-next-line
const props = defineProps({
    label: {
        type: String,
        default: 'Button'
    }
})
</script>

<style scoped lang="scss">
button {
    padding: 18px 30px;
    border: 1px solid $primary;
    border-radius: 5px;
    font-size: 18px;
    background-color: $primary; 
    color: white;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: white; 
        color: $primary;
    }

    &.ghost {
        background-color: white;
        color: $primary;

        &:hover {
            background-color: $primary; 
            color: white;
        }
    }
}
</style>