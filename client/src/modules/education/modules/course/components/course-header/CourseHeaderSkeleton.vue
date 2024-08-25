<template>
  <SkeletonComponent class="w-full flex items-center flex-wrap justify-between gap-5">
    <div class="default-container flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:py-7">
      <div class="rounded-2xl bg-gray size-[150px] shrink-0"></div>
      <div class="w-20 h-4 bg-gray rounded-md"></div>
      <div class="w-52 h-3 bg-gray rounded-md"></div>
    </div>
  </SkeletonComponent>
</template>

<script setup lang="ts">
import SkeletonComponent from "@components/ui/skeleton/SkeletonComponent.vue";
</script>