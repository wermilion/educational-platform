<template>
  <HeaderComponent/>
  <router-view class="min-h-dvh py-32"/>
  <FooterComponent/>

  <ModalComponent/>
</template>

<script setup lang="ts">
import HeaderComponent from "@components/base/header/BaseHeader.vue";
import FooterComponent from "@components/base/footer/BaseFooter.vue";
import ModalComponent from "@components/ui/modal/ModalWindow.vue";
</script>