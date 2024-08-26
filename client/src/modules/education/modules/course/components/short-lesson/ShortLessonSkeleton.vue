<template>
  <div
      class="card w-full px-5 py-2.5 cursor-pointer transition duration-300 hover:scale-[101%]"
      style="flex-direction: row">
    <div class="w-full flex items-center flex-wrap justify-between gap-5">
      <div class="flex items-center gap-5">
        <SkeletonComponent :componentClass="'size-11'" />
        <div class="flex flex-col gap-4" style="margin: 0;">
          <SkeletonComponent :componentClass="'w-20 h-4'" />
          <SkeletonComponent :componentClass="'w-60 h-3'" />
        </div>
      </div>

      <SkeletonComponent :componentClass="'w-24 h-14'" />
    </div>
  </div>
</template>
<script setup lang="ts">
import SkeletonComponent from "@components/ui/skeleton/skeletonComponent.vue";
</script>