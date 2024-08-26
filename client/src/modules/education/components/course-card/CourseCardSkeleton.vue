<template>
  <article class="card cursor-pointer hover:scale-[101%] transition duration-300">
    <div class="flex flex-col card-body p-5 lg:p-7.5">
      <SkeletonComponent :component-class="'size-11 mb-3 lg:mb-5 self-start'" />
      <div class="flex flex-col gap-2 lg:gap-4 w-full" style="margin: 0;">
        <SkeletonComponent :component-class="'w-32 h-4'" />
        <SkeletonComponent :component-class="'w-full h-[100px]'" />
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import SkeletonComponent from "@components/ui/skeleton/skeletonComponent.vue";
</script>