<template>
  <aside class="flex flex-col gap-3 h-fit sticky top-32">
    <button
        v-for="(item, index) in portfolioChapters"
        :key="index"
        class="flex items-center border p-3 rounded-xl text-lg transition duration-300"
        :class="item.id === portfolioStore.currentChapter ? 'bg-primary text-white' : 'text-black border-primary hover:bg-primary hover:text-white'"
        @click="portfolioStore.changeChapter(item.id)"
    >
      {{ item.title }}
    </button>
  </aside>
</template>

<script setup lang="ts">
import {usePortfolioStore} from "@/modules/portfolio/store";
import {portfolioChapters} from "@/modules/portfolio/data/PortfolioChapters.ts";

const portfolioStore = usePortfolioStore();
</script>