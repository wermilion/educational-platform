<template>
  <header class="fixed top-6 left-1/2 -translate-x-1/2 default-container transition duration-300 z-10">
    <div class="p-5 flex justify-between items-center transition-all duration-300"
         :class="[
             { 'border-2 rounded-2xl border-transparent px-0' : scrollPosition === 0 },
             { 'px-6 border-2 rounded-2xl border-primary bg-opacity-50 bg-white backdrop-blur-md' : scrollPosition > 0 }
         ]">
      <button
          v-if="mobileStore.isMobile"
          :class="[
          'flex flex-col w-[30px] gap-[4px] z-[101] burger-menu',
          {'_active' : mobileStore.burgerMenuIsVisible}
        ]"
          @click="mobileStore.toggleMobileMenu()"
      >
        <span
            v-for="n in 3"
            :key="n"
            :class="['line w-full h-[3px] rounded bg-primary', `line${n}`]"
        ></span>
      </button>

      <component
          :is="mobileStore.isMobile ? MobileHeader : DesktopHeader"
          :links="links"
      />

      <ButtonComponent text="Связаться со мной" type="ghost" @click="modalStore.open()"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import {useModalStore} from "@/app/store/modal";
import {useMobileStore} from "@/app/store/mobile";
import {RoutesNamesEnum} from "@/app/router/enums/RoutesNames.ts";

import ButtonComponent from "@components/ui/button/ButtonComponent.vue";
import DesktopHeader from "@components/base/header/components/DesktopHeader.vue";
import MobileHeader from "@components/base/header/components/MobileHeader.vue";

const modalStore = useModalStore();
const mobileStore = useMobileStore();
const links: { title: string, path: string }[] = [
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

<style scoped lang="scss">
.burger-menu {
  .line {
    &.line1 {
      transform-origin: 27% -37%;
      transition: transform 0.4s ease-in-out;
    }

    &.line2 {
      transition: transform 0.2s ease-in-out;
    }

    &.line3 {
      transform-origin: 0 100%;
      transition: transform 0.4s ease-in-out;
    }
  }

  &._active {
    .line {
      &.line1 {
        transform: rotate(45deg);
      }

      &.line2 {
        transform: scaleY(0);
      }

      &.line3 {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>