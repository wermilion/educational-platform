<template>
  <div class="default-container relative flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:py-7">
    <img :src="props.image" alt="profile image" class="rounded-2xl size-[150px] shrink-0">
    <div class="text-lg leading-5 font-semibold text-gray-900">{{ props.name }}</div>
    <span v-if="props.description" class="text-gray-600 max-w-2xl text-center">
      {{ props.description }}
    </span>

    <div v-if="props.file"
         class="absolute top-0 left-5 grid grid-cols-1 content-between gap-1.5 border border-dashed border-gray-300 shrink-0 rounded-md px-2.5 py-2 min-w-24 max-w-auto cursor-default bg-white">
      <a :href="props.file" target="_blank"
         class="flex justify-between items-center text-gray-900 text-2sm leading-none font-medium">
        <i class="fa-solid fa-link"></i>
        <span>Файл</span>
      </a>
    </div>

    <div v-if="props.characteristics"
         class="absolute top-0 right-5 flex flex-col lg:flex-row items-end lg:items-center lg:justify-center flex-wrap gap-2 lg:gap-5">
      <div
          v-for="(item, index) in props.characteristics"
          :key="index"
          class="grid grid-cols-1 content-between gap-1.5 border border-dashed border-gray-300 shrink-0 rounded-md px-2.5 py-2 min-w-24 max-w-auto cursor-default bg-white">
        <span class="text-gray-900 text-2sm leading-none font-medium">
          {{ item.value }}
        </span>
        <span class="text-gray-700 text-xs">
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  characteristics: {
    type: Object,
    required: false
  },
  file: {
    type: String,
    required: false
  }
});
</script>

<style scoped lang="scss">
.default-container {
  background-image: url("/images/patterns/bg-honeycombs.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
</style>
