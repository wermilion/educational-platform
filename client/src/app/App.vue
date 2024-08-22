<template>
  <HeaderComponent/>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" class="min-h-dvh pt-32 pb-10 lg:py-32" />
    </transition>
  </router-view>
  <FooterComponent/>

  <ModalComponent/>
</template>

<script setup lang="ts">
import {useMobileStore} from "@/app/store/mobile";

import HeaderComponent from "@components/base/header/BaseHeader.vue";
import FooterComponent from "@components/base/footer/BaseFooter.vue";
import ModalComponent from "@components/ui/modal/ModalWindow.vue";

const mobileStore = useMobileStore();
mobileStore.setSize();
</script>