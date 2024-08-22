<template>
  <div class="flex flex-col gap-12 lg:gap-24">
    <MainBanner />
    <MainAchievements />
    <MainAbout />
    <MainEducation />
  </div>
</template>

<script setup lang="ts">
import MainBanner from "@/modules/main/components/banner/MainBanner.vue";
import MainAchievements from "@/modules/main/components/achievements/MainAchievements.vue";
import MainAbout from "@/modules/main/components/about/MainAbout.vue";
import MainEducation from "@/modules/main/components/education/MainEducation.vue";
</script>