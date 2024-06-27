<template>
    <div class="textarea-box">
        <label :for="textarea.id">{{ textarea.label }}</label>
        <textarea
            :id="textarea.id"
            :class="[{'error' : textarea.error.length}]"
            v-model="value"
            @change="change"
        />
        <p v-if="textarea.error.length" class="textarea__error">{{ textarea.error }}</p>
    </div>
</template>

<script setup>
import {defineEmits, defineProps, ref} from 'vue';

// eslint-disable-next-line
const props = defineProps({
    textarea: {
        type: Object,
        default: () =>{}
    }
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['change'])

const value = ref('');

const change = () => {
    emit('change', {
        id: props.textarea.id,
        value: value.value
    })
}
</script>

<style scoped lang="scss">
.textarea {
    &-box {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;

        label {
            color: $dark-primary-secondary;
            font-size: 20px;
            text-align: left;
        }

        textarea {
            width: 100%;
            height: 100%;
            padding: 16px;
            border: 2px solid $base-gray;
            border-radius: 8px;
            outline: none;
            font-size: 20px;
            transition: all .3s;
            resize: none;

            &:focus,
            &:hover {
                border-color: $primary;
            }

            &.error {
                border-color: $error;
            }
        }
    }

    &__error {
        position: absolute;
        top: calc(100% + 4px);
        left: 14px;
        color: $error;
        font-family: $base-font;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
    }
}
</style>
