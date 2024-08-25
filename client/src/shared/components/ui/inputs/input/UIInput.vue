<template>
  <div :class="['input', { _error: error && error.length }]" class="relative w-full transition duration-300">
    <div class="relative">
      <input
          type="text"
          v-bind="$attrs"
          :id="id"
          v-model="inputValue"
          @change="change"
          class="relative z-[2] w-full h-14 px-6 py-4 bg-transparent rounded-lg border-2 border-gray text-lg transition duration-300 outline-0 hover:border-primary focus:border-primary"
      />
      <label :for="id" :class="['input__label', { _fill: inputValue.length }]"
             class="absolute top-3 left-6 text-gray text-lg transition-all duration-300 z-[2] font-medium">
        {{ label }}
      </label>
    </div>
    <p v-if="error && error.length" class="input__error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {TextInput} from "@components/ui/inputs/input/_core/types/InputType.ts";

const props = defineProps<TextInput>();
const emit = defineEmits(['change'])

const inputValue = ref('');

function change() {
  emit('change', {
    id: props.id,
    value: inputValue.value
  })
}

onMounted(() => {
  if (props) inputValue.value = props.value;
});
</script>

<style scoped lang="scss">
@import "@styles/variables";

.input {
  &._error input {
    border-color: $danger;
  }

  input {
    &:focus + .input__label {
      top: -10px;
      padding: 0 3px;
      color: black;
      background: white;
      z-index: 3;
    }
  }

  &__label._fill {
    top: -10px;
    padding: 0 3px;
    background: white;
    color: black;
    z-index: 3;
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