<template>
  <div :class="['textarea', { _error: error && error.length }]" class="relative w-full transition duration-300">
    <div class="relative h-full">
      <textarea
          v-bind="$attrs"
          :id="id"
          v-model="textareaValue"
          @change="change"
          class="relative z-[2] w-full h-full px-6 py-4 bg-transparent rounded-lg border-2 border-gray overflow-auto resize-none text-lg transition duration-300 outline-0 hover:border-primary focus:border-primary"
      />
      <label :for="id" :class="['textarea__label', { _fill: textareaValue.length }]"
             class="absolute top-3 left-6 text-gray text-lg transition-all duration-300 z-[2] font-medium">
        {{ label }}
      </label>
    </div>
    <p v-if="error && error.length" class="textarea__error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, ref} from 'vue';
import {TextInput} from "@components/ui/inputs/input/_core/types/InputType.ts";

const props = defineProps<TextInput>();
const emit = defineEmits(['change'])

const textareaValue = ref('');

const change = () => {
  emit('change', {
    id: props.id,
    value: textareaValue.value
  })
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";

.textarea {
  &._error textarea {
    border-color: $danger;
  }

  textarea {
    &:focus + .textarea__label {
      top: -10px;
      padding: 0 3px;
      color: black;
      background: white;
      z-index: 3;
    }
  }

  &__label {
    &._fill {
      top: -10px;
      padding: 0 3px;
      background: white;
      color: black;
      z-index: 3;
    }
  }

  &__error {
    position: absolute;
    top: calc(100% + 6px);
    left: 24px;
    color: $danger;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    z-index: 5;
  }
}
</style>
