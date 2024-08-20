<template>
  <footer class="w-full py-5">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-10 default-container mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-5">
        <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.path"
            class="py-2 px-4 text-xl transition-all duration-300 hover:text-primary"
            :class="route.path === link.path ? 'text-primary' : 'text-darkest-primary'"
        >
          {{ link.title }}
        </router-link>
      </div>
      <div class="flex items-center gap-8">
        <button @click="modalStore.open()">
          <i class="fa-solid fa-envelope text-4xl text-darkest-primary hover:text-primary transition duration-300"></i>
        </button>
        <a href="https://vk.com/anna_fedorova83" target="_blank">
          <i class="fa-brands fa-vk text-4xl text-darkest-primary hover:text-primary transition duration-300"></i>
        </a>
      </div>
    </div>
  </footer>

</template>

<script setup lang="ts">
import {RoutesNamesEnum} from "@/app/router/enums/RoutesNames.ts";
import {useRoute} from "vue-router";
import {useModalStore} from "@/app/store/modal";

const route = useRoute();
const modalStore = useModalStore();

const links: Record<string, string>[] = [
  {
    title: 'Главная',
    path: '/'
  },
  {
    title: 'Портфолио',
    path: `/${RoutesNamesEnum.PORTFOLIO}`
  },
  {
    title: 'Обо мне',
    path: `/${RoutesNamesEnum.ABOUT}`
  },
]
</script>