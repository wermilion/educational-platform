<template>
  <article class="card group cursor-pointer hover:scale-[101%] transition duration-300">
    <div class="card-body p-5 lg:p-7.5">
      <div class="flex items-center justify-between mb-3 lg:mb-5">
        <div class="flex items-center justify-center rounded-md overflow-hidden">
          <img alt="course image" class="h-11 shrink-0" :src="props.image">
        </div>
        <div class="btn btn-sm btn-icon btn-clear btn-light">
          <i class="ki-filled ki-exit-right-corner"></i>
        </div>
      </div>
      <div class="flex flex-col gap-1 lg:gap-2.5">
        <h4 class="text-lg font-semibold text-gray-900 group-hover:text-primary transition duration-300">
          {{ props.name }}
        </h4>
        <span class="text-sm text-gray-600 line-clamp-5">
          {{ props.description }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
});
</script>