<template>
    <aside class="sidebar">
        <button v-for="(item, index) in chapters" :key="index" :class="{ '_active': item.id === currentChapter }"
            @click="changeChapter(item.id)">
            {{ item.name }}
        </button>
    </aside>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

// eslint-disable-next-line
const props = defineProps({
    chapters: {
        type: Object,
        default: () => { }
    },
    currentChapter: {
        type: String,
        default: 'diplomas'
    },
})
const emit = defineEmits('changeChapter')

const changeChapter = (id) => emit('changeChapter', id)
</script>

<style scoped lang="scss">
.sidebar {
    position: fixed;
    left: 40px;
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 15px;
    gap: 10px;

    @include _700 {
        position: relative;
        flex-direction: row;
        justify-content: center;
        left: 0px;
    }

    button {
        padding: 20px;
        border: 1px solid $primary;
        background-color: white;
        border-radius: 25px;
        text-decoration: none;
        color: #000;
        transition: .3s ease;
        text-align: left;
        cursor: pointer;

        &._active,
        &:hover {
            background-color: $primary;
            border-color: $primary;
            color: #fff;
        }

        @include _700 {
            padding: 10px;
            text-align: center;
        }
    }
}
</style>
