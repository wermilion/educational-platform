<template>
  <div class="default-container grid grid-cols-1 lg:grid-cols-12 gap-10 min-h-dvh">
    <PortfolioAside class="col-span-3"/>

    <PortfolioContent
        class="col-span-9"
        :isLoading="loading"
        :rewards="result?.rewards"
    />
  </div>
</template>

<script setup lang="ts">
import {onMounted, watch} from "vue";
import {storeToRefs} from "pinia";
import {useLazyQuery} from "@vue/apollo-composable";

import {GET_REWARDS} from "@/modules/portfolio/requests/getRewards.ts";
import {usePortfolioStore} from "@/modules/portfolio/store";

import PortfolioAside from "@/modules/portfolio/components/aside/PortfolioAside.vue";
import PortfolioContent from "@/modules/portfolio/components/content/PortfolioContent.vue";

const portfolioStore = usePortfolioStore();
const {currentChapter} = storeToRefs(portfolioStore);

const {load: getRewards, result, loading} = useLazyQuery(GET_REWARDS, {type: currentChapter});

watch(currentChapter, () => {
  getRewards();
})

onMounted(() => {
  getRewards();
})
</script>