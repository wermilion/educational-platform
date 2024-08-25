<template>
  <div class="default-container relative flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:py-7">
    <img :src="props.src" alt="profile image" class="rounded-2xl size-[150px] shrink-0">
    <div class="text-lg leading-5 font-semibold text-gray-900">{{ props.title }}</div>
    <span class="text-gray-600 max-w-2xl text-center">
      {{ props.description }}
    </span>

    <div v-if="props.characteristics" class="absolute top-0 right-5 flex flex-col lg:flex-row items-end lg:items-center lg:justify-center flex-wrap gap-2 lg:gap-5">
      <div
          v-for="(item, index) in props.characteristics"
          :key="index"
          class="grid grid-cols-1 content-between gap-1.5 border border-dashed border-gray-300 shrink-0 rounded-md px-2.5 py-2 min-w-24 max-w-auto cursor-default bg-white">
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
    required: true
  },
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
