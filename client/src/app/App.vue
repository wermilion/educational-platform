<template>
  <HeaderComponent/>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" class="min-h-dvh py-32" />
    </transition>
  </router-view>
  <FooterComponent/>

  <ModalComponent/>
</template>

<script setup lang="ts">
import HeaderComponent from "@components/base/header/BaseHeader.vue";
import FooterComponent from "@components/base/footer/BaseFooter.vue";
import ModalComponent from "@components/ui/modal/ModalWindow.vue";
</script>