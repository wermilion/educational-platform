<template>
  <section class="default-container flex flex-col gap-16">
    <h2>{{ data.title }}</h2>

    <div class="flex justify-between items-center gap-16">
      <div class="relative max-w-3xl">
        <img
            :src="'images/' + data.img"
            alt="about me"
        >
        <div class="bg-animate-shadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 -z-10 bg-indigo-200 blur-2xl rounded-2xl"></div>
      </div>

      <div class="flex flex-col gap-8 max-w-3xl">
        <p class="text-xl" v-html="data.description"></p>
        <router-link
            class="text-xl font-semibold"
            to="/about"
        >
          Подробнее...
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const data: Record<string, string> = {
  title: 'Обо мне',
  description: 'Привет, меня зовут Анна! С 2008 года являюсь преподавателем IT в Томском экономико-промышленном колледже, а также экспертом по компетенции «Автоматизация бизнес-процессов организаций».<br><br>Имею опыт программирования в 1С, Visual Studio, MySQL, phpMyAdmin, работала с различными системами учета, взаимодействовала с контролирующими и проверяющими органами.',
  img: 'personal/students.png',
}
</script>

<style scoped lang="scss">
.bg-animate-shadow {
  animation: bg-shadow 6s infinite linear;
}
</style>