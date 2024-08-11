<template>
  <button :class="buttonClasses" class="pt-1 lg:pt-2 px-2 lg:px-4 text-base lg:text-xl transition-all duration-300">
    {{props.text}}
  </button>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{ text: string, type?: 'ghost' | 'text' }>()

const buttonClasses = computed(() => {
  return props.type === "ghost" ?
      "lg:pb-3 pb-1.5 border rounded-lg border-primary text-primary hover:bg-primary hover:text-white" :
      props.type === "text" ?
          "lg:pb-2 pb-1 hover:text-primary" :
          "lg:pb-3 pb-1.5 border rounded-lg border-primary bg-primary text-white hover:text-primary hover:bg-white"
})
</script>