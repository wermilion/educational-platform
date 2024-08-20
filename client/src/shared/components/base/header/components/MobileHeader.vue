<template>
  <transition name="fade">
    <div v-show="mobileStore.isMobile && mobileStore.burgerMenuIsVisible">
      <div
          class="fixed -top-6 left-0 w-full h-dvh bg-black bg-opacity-50"
          @click="mobileStore.toggleMobileMenu()"
      >
      </div>
      <div
          class="absolute -top-6 left-0 flex items-start justify-between flex-col w-2/3 h-dvh pt-28 px-7 pb-10 bg-white z-[100] transition duration-300">
        <nav class="flex flex-col justify-start items-start gap-5">
          <router-link
              v-for="(link, index) in links"
              :key="index"
              :to="link.path"
              class="text-xl transition-all duration-300 hover:text-primary"
              :class="route.path === link.path ? 'text-primary' : 'text-darkest-primary'"
              @click="mobileStore.toggleMobileMenu()"
          >
            {{ link.title }}
          </router-link>
        </nav>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {useMobileStore} from "@/app/store/mobile";
import {useRoute} from "vue-router";

const mobileStore = useMobileStore();
const route = useRoute();

defineProps<{ links: { title: string, path: string }[] }>()
</script>
