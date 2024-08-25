<template>
  <div
      class="card w-full px-5 py-2.5 cursor-pointer transition duration-300 hover:scale-[101%]"
      style="flex-direction: row">
    <SkeletonComponent class="w-full flex items-center flex-wrap justify-between gap-5">
      <div class="flex items-center gap-5">
        <div class="size-11 bg-gray rounded-md"></div>
        <div class="flex flex-col gap-4" style="margin: 0;">
          <div class="w-20 h-4 bg-gray rounded-md"></div>
          <div class="w-60 h-3 bg-gray rounded-md"></div>
        </div>
      </div>

      <div class="w-24 h-14 bg-gray rounded-md" style="margin: 0;"></div>
    </SkeletonComponent>
  </div>
</template>
<script setup lang="ts">
import SkeletonComponent from "@components/ui/skeleton/SkeletonComponent.vue";
</script>