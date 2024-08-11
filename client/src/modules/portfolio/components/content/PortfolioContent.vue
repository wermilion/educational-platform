<template>
  <div class="flex flex-col gap-12 items-center justify-center bg-indigo-100 rounded-3xl p-12">
    <transition name="fadeChange">
      <div v-if="portfolioStore.currentDocs" class="w-full flex flex-col gap-12">
        <div
            v-for="(item, index) in portfolioStore.currentDocs"
            :key="index"
            :class="{'flex-row-reverse' : index % 2 !== 0 }"
            class="flex items-center justify-between gap-10"
        >
          <div class="max-w-[350px]">
            <img :src="'images/portfolio/' + item.src" alt="portfolio item" />
          </div>
          <p class="max-w-[600px] text-lg">{{ item.description }}</p>
        </div>
      </div>
    </transition>

    <transition name="fadeChange">
      <div v-if="!portfolioStore.currentDocs?.length" class="flex flex-col items-center gap-5">
        <i class="fa-solid fa-triangle-exclamation text-7xl text-darkest-primary"></i>
        <p class="text-3xl text-darkest-primary">По вашему запросу ничего не найдено</p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {usePortfolioStore} from "@/modules/portfolio/store";

const portfolioStore = usePortfolioStore();
</script>