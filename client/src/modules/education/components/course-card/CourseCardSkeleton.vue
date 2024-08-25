<template>
  <article class="card cursor-pointer hover:scale-[101%] transition duration-300">
    <SkeletonComponent class="flex flex-col card-body p-5 lg:p-7.5">
      <div class="size-11 bg-gray rounded-md mb-3 lg:mb-5 self-start"></div>
      <div class="flex flex-col gap-2 lg:gap-4 w-full" style="margin: 0;">
        <div class="w-32 h-4 bg-gray rounded-md"></div>
        <div class="w-full h-[100px] bg-gray rounded-md"></div>
      </div>
    </SkeletonComponent>
  </article>
</template>
<script setup lang="ts">
import SkeletonComponent from "@components/ui/skeleton/SkeletonComponent.vue";
</script>