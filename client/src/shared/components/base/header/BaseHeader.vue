<template>
  <header class="fixed top-6 left-1/2 -translate-x-1/2 default-container transition duration-300 z-10">
    <div class="p-5 flex justify-between items-center transition-all duration-300"
         :class="[
             { 'border-2 rounded-2xl border-transparent px-0' : scrollPosition === 0 },
             { 'px-6 border-2 rounded-2xl border-primary bg-opacity-50 bg-white backdrop-blur-md' : scrollPosition > 0 }
         ]">
      <div class="flex items-center gap-12">
        <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.path"
            class="text-xl transition-all duration-300 hover:text-primary"
            :class="route.path === link.path ? 'text-primary' : 'text-darkest-primary'"
        >
          {{ link.title }}
        </router-link>
      </div>

      <ButtonComponent text="Связаться со мной" type="ghost" @click="modalStore.open()"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import {useRoute} from "vue-router";
import {RoutesNamesEnum} from "@/app/router/enums/RoutesNames.ts";
import ButtonComponent from "@components/ui/button/ButtonComponent.vue";
import {useModalStore} from "@/app/store/modal";

const modalStore = useModalStore()
const route = useRoute()
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
  {
    title: 'Образование',
    path: `/${RoutesNamesEnum.EDUCATION}`
  },
]

const scrollPosition = ref(0);
const lastScrollPosition = ref(0);

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;

  scrollPosition.value = currentScrollPosition;
  lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  onUnmounted(() => window.removeEventListener("scroll", handleScroll));
});
</script>