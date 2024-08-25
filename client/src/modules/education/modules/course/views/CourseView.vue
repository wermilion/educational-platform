<template>
  <div class="flex flex-col gap-16">
    <CourseHeader
        :title="data.title"
        :description="data.description"
        :src="data.src"
    />

    <div class="flex flex-col gap-5 default-container">
      <ShortLesson
          v-for="lesson in data.lessons"
          :key="lesson.title"
          :title="lesson.title"
          :description="lesson.description"
          :src="lesson.src"
          :characteristics="lesson.characteristics"
          @click="redirect(lesson.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/app/router";
import {RoutesNamesEnum} from "@/app/router/enums/RoutesNames.ts";

import CourseHeader from "@/modules/education/modules/course/components/CourseHeader.vue";
import ShortLesson from "@/modules/education/modules/course/components/ShortLesson.vue";

const data = {
  id: 1,
  title: 'Web',
  description: 'Создать живого и многофункционального сайта, который привлекателен для пользователя, хорошо и быстро работает, закрывает потребности бизнеса.',
  src: '/images/mock/js-logo.png',
  lessons: [
    {
      id: 1,
      title: 'HTML',
      description: 'После прохождения урока вы освоите HTML',
      src: '/images/mock/js-logo.png',
      characteristics: [
        {
          title: 'Длительность',
          value: '2 часа'
        },
        {
          title: 'Уровень',
          value: 'Начальный'
        }
      ]
    },
    {
      id: 2,
      title: 'CSS',
      description: 'После прохождения урока вы освоите CSS',
      src: '/images/mock/js-logo.png',
      characteristics: [
        {
          title: 'Длительность',
          value: '6 часов'
        },
        {
          title: 'Уровень',
          value: 'Сложный'
        }
      ]
    },
    {
      id: 3,
      title: 'JS',
      description: 'После прохождения урока вы освоите JS',
      src: '/images/mock/js-logo.png',
      characteristics: [
        {
          title: 'Длительность',
          value: '4 часа'
        },
        {
          title: 'Уровень',
          value: 'Средний'
        }
      ]
    }
  ]
}

function redirect(id: number): void {
  router.push({name: RoutesNamesEnum.LESSON, params: {id}});
}
</script>