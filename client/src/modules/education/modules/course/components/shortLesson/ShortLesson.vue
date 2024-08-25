<template>
  <div
      class="group card flex items-center flex-wrap justify-between w-full gap-5 px-5 py-2.5 cursor-pointer transition duration-300 hover:scale-[101%]"
      style="flex-direction: row">
    <div class="flex items-center gap-5">
      <div class="flex items-center justify-center rounded-md overflow-hidden">
        <img alt="course image" class="h-11 shrink-0" :src="props.src">
      </div>
      <div class="flex flex-col">
        <h4 class="text-lg font-medium text-gray-900 group-hover:text-primary transition duration-300">
          {{ props.title }}
        </h4>
        <p class="text-sm text-gray-700 max-w-xl">
          {{ props.description }}
        </p>
      </div>
    </div>
    <div v-if="props.characteristics" class="flex items-center lg:justify-center flex-wrap gap-2 lg:gap-5">
      <div
          v-for="(item, index) in props.characteristics"
          :key="index"
          class="grid grid-cols-1 content-between gap-1.5 border border-dashed border-gray-300 shrink-0 rounded-md px-2.5 py-2 min-w-24 max-w-auto cursor-default">
        <span class="text-gray-900 text-2sm leading-none font-medium">
          {{ item.value }}
        </span>
        <span class="text-gray-700 text-xs">
          {{ item.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  characteristics: {
    type: Object,
    required: false
  },
});
</script>