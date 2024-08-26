<template>
  <div class="flex flex-col gap-16">
    <LessonHeader
        :title="data.title"
        :description="data.description"
        :src="data.src"
        :characteristics="data.characteristics"
    />

    <div class="flex flex-col gap-5 default-container" v-html="data.content"></div>
  </div>

</template>

<script setup lang="ts">
import LessonHeader from "@/modules/education/modules/lesson/components/LessonHeader.vue";

const data = {
  id: 1,
  title: 'HTML',
  description: 'После прохождения урока вы освоите HTML',
  src: '/images/mock/c-sharp-logo.png',
  characteristics: [
    {
      name: 'Длительность',
      value: '2 часа'
    },
    {
      name: 'Уровень',
      value: 'Начальный'
    }
  ],
  content: `
    <p>content</p>
  `
}
</script>