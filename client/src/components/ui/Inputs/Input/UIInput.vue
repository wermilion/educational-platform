<template>
    <div class="input-box">
        <label :for="input.id">{{ input.label }}</label>
        <input
            type="text"
            :id="input.id"
            v-bind="$attrs"
            :class="[{'error' : input.error.length}]"
            v-model="value"
            @change="change()"
        >
        <p v-if="input.error.length" class="input__error">{{ input.error }}</p>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

// eslint-disable-next-line
const props = defineProps({
    input: {
        type: Object,
        default: () =>{}
    }
})
// eslint-disable-next-line no-undef
const emit = defineEmits(['change'])

const value = ref('');

const change = () => {
    emit('change', {
        id: props.input.id,
        value: value.value
    })
}
</script>

<style scoped lang="scss">
.input {
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

        input {
            width: 100%;
            padding: 16px;
            border: 2px solid $base-gray;
            border-radius: 8px;
            outline: none;
            font-size: 20px;
            transition: all .3s;

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
