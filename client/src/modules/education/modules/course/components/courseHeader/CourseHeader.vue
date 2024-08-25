<template>
  <div class="default-container flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:py-7">
    <img :src="props.src" alt="profile image" class="rounded-2xl size-[150px] shrink-0">
    <div class="text-lg leading-5 font-semibold text-gray-900">{{ props.title }}</div>
    <span class="text-gray-600 max-w-2xl text-center">
      {{ props.description }}
    </span>
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