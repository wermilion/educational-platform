<template>
  <aside>
    <button
        v-if="(mobileStore.isMobile || mobileStore.isTablet)"
        class="fixed left-0 top-32 cursor-pointer border-2 border-primary rounded-full rounded-l-none p-2 pe-4 pb-1 bg-primary"
        @click="changeState"
    >
      <i class="fa-solid fa-filter text-2xl text-white"></i>
    </button>

    <transition name="fade">
      <div
          v-if="(mobileStore.isMobile || mobileStore.isTablet) && showFilters"
          class="fixed top-0 left-0 w-full h-dvh bg-black bg-opacity-50 z-20"
          @click="changeState"
      >
      </div>
    </transition>

    <transition name="fade">
      <div
          v-show="(!mobileStore.isMobile && !mobileStore.isTablet) || showFilters"
          :class="filtersClasses"
          class="flex flex-col gap-3 bg-white">
        <button
            v-for="(item, index) in portfolioChapters"
            :key="index"
            class="flex items-center border p-3 rounded-xl text-lg transition duration-300"
            :class="item.id === portfolioStore.currentChapter ?
           'bg-primary text-white' :
            'text-black border-primary hover:bg-primary hover:text-white'"
            @click="changeChapter(item.id)"
        >
          {{ item.title }}
        </button>
      </div>
    </transition>
  </aside>
</template>

<script setup lang="ts">
import {computed, ComputedRef, ref} from "vue";
import {usePortfolioStore} from "@/modules/portfolio/store";
import {useMobileStore} from "@/app/store/mobile";
import {portfolioChapters} from "@/modules/portfolio/data/PortfolioChapters.ts";
import {disableScroll} from "@/utils/disableScroll.ts";
import {enableScroll} from "@/utils/enableScroll.ts";

const portfolioStore = usePortfolioStore();
const mobileStore = useMobileStore();

const showFilters = ref(false);
const filtersClasses: ComputedRef<string> = computed(() => {
  return mobileStore.isMobile ?
      'fixed bottom-0 left-0 w-full h-fit px-5 py-3 shadow-2xl rounded-t-2xl z-30' :
      'sticky top-32 w-fit h-fit'
});

function changeState(): void {
  showFilters.value = !showFilters.value

  if (showFilters.value) {
    disableScroll()
  } else {
    enableScroll()
  }
}

function changeChapter(id: number): void {
  portfolioStore.changeChapter(id)
}
</script>