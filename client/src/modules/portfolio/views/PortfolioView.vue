<template>
  <div>
    <div class="default-container grid grid-cols-1 xl:grid-cols-6 gap-10" style="min-height: calc(100dvh - 256px);">
      <PortfolioAside class="col-span-1" />
      <PortfolioContent class="col-span-5" />
    </div>
  </div>
</template>

<script setup lang="ts">

import PortfolioAside from "@/modules/portfolio/components/aside/PortfolioAside.vue";
import PortfolioContent from "@/modules/portfolio/components/content/PortfolioContent.vue";
</script>