<template>
  <div class="w-full flex items-center flex-wrap justify-between gap-5">
    <div class="default-container flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:py-7">
      <SkeletonComponent :component-class="'rounded-2xl size-[150px] shrink-0'" />
      <SkeletonComponent :component-class="'w-20 h-4'" />
      <SkeletonComponent :component-class="'w-52 h-3'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkeletonComponent from "@components/ui/skeleton/skeletonComponent.vue";
</script>