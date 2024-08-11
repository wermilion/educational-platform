<template>
  <transition name="fadeChange">
    <div v-if="modalStore.isVisible">
      <div class="fixed top-0 left-0 w-full h-dvh bg-black bg-opacity-50 z-20" @click="modalStore.close()"></div>
      <component :is="ContactSlot" :data="modalStore.modalData" @close="modalStore.close()"
                 class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-2xl bg-white overflow-hidden max-w-xl w-full z-30"/>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {useModalStore} from "@/store/modal";
import ContactSlot from "@components/ui/modal/_core/components/ContactSlot.vue";

const modalStore = useModalStore();
</script>