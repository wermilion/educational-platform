<template>
  <section class="banner default-container flex flex-col md:flex-row justify-between items-center gap-5">
    <div class="w-2/6 flex flex-col gap-2.5 lg:gap-5">
      <h1>
        <span class="text-primary">{{ data.title.coloredPart }} </span>
        {{ data.title.firstPart }}
      </h1>
      <p class="text-lg lg:text-2xl">{{ data.description }}</p>
      <ButtonComponent :text="data.buttonText" class="w-fit" @click="modalStore.open()"/>
    </div>
    <div class="relative w-3/6 flex justify-center">
      <img
          :src="data.img"
          alt="My photo"
          class="border-2 border-transparent rounded-full"
      />
      <div class="bg-animate-shadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 -z-10 bg-indigo-200 blur-2xl rounded-2xl"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonComponent from "@components/ui/button/ButtonComponent.vue";
import {useModalStore} from "@/app/store/modal";

const modalStore = useModalStore();

const data = {
  title: {
    firstPart: 'Анна Николаевна',
    coloredPart: 'Федорова',
  },
  description: 'Преподаватель Томского экономико-промышленного колледжа, кафедра IT-технологий.',
  buttonText: 'Связаться со мной',
  img: 'images/personal/main.png'
}
</script>

<style scoped lang="scss">
.banner {
  height: calc(100dvh - 128px);

  .bg-animate-shadow {
    animation: bg-shadow 6s infinite linear;
  }
}
</style>