<template>
  <div class="default-container grid grid-cols-1 lg:grid-cols-12 gap-10" style="min-height: calc(100dvh - 256px);">
    <PortfolioAside class="col-span-3"/>
    <PortfolioContent class="col-span-9"/>
  </div>
</template>

<script setup lang="ts">
import PortfolioAside from "@/modules/portfolio/components/aside/PortfolioAside.vue";
import PortfolioContent from "@/modules/portfolio/components/content/PortfolioContent.vue";
</script>