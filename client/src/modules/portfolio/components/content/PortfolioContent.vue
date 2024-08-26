<template>
  <div class="flex flex-col gap-12 items-center justify-center border-2 border-indigo-100 rounded-3xl p-12">
    <transition name="fadeChange">
      <div v-show="rewards?.length && !isLoading" class="w-full flex flex-col gap-12">
        <div
            v-for="(item, index) in rewards"
            :key="index"
            class="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10"
            :class="{'lg:flex-row-reverse' : index % 2 !== 0 }"
        >
          <div class="max-w-[350px]">
            <img :src="item.image" alt="portfolio item"/>
          </div>
          <div class="max-w-[600px] flex flex-col gap-2 ">
            <p class="font-semibold text-lg text-center lg:text-left">{{ item.name }}</p>
            <p class=" text-lg text-center lg:text-left">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </transition>


    <!--Plugs-->
    <transition name="fadeChange">
      <div v-show="!rewards?.length || isLoading">
        <div v-show="isLoading" class="flex flex-col items-center gap-5">
          <i class="fa-solid fa-magnifying-glass text-8xl text-darkest-primary"></i>
          <p class="text-3xl text-darkest-primary leading-[50px] text-center">Ищем подходящие награды</p>
        </div>
      </div>
    </transition>
    <transition name="fadeChange">
      <div v-show="!isLoading && !rewards?.length" class="flex flex-col items-center gap-5">
        <i class="fa-solid fa-triangle-exclamation text-8xl text-darkest-primary"></i>
        <p class="text-3xl text-darkest-primary leading-[50px] text-center">По вашему запросу ничего не найдено :(</p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {RewardType} from "@/modules/portfolio/types/RewardType.ts";

defineProps<{
  isLoading: boolean,
  rewards: RewardType[] | undefined
}>();
</script>