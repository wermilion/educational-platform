<template>
  <div class="default-container flex flex-col gap-16">
    <h2>Образовательные курсы</h2>
    <section class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-5 lg:gap-7.5">
      <CourseCard
        v-for="item in data"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :src="item.src"
        @click="redirect(item.id)"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import router from "@/app/router";
import {RoutesNamesEnum} from "@/app/router/enums/RoutesNames.ts";

import CourseCard from "@/modules/education/components/course-card/CourseCard.vue";

const data = [
  {
    id: 1,
    title: '1С',
    description: 'Язык для создания кодов и алгоритмов внутри программного обеспечения «1C:Предприятие» и оптимизированный для работы на платформе.',
    src: '/images/mock/1C-logo.png'
  },
  {
    id: 2,
    title: 'C#',
    description: 'По-настоящему универсальный язык: на нём пишут игры, десктопные приложения, веб-сервисы, нейросети и даже графику для метавселенных.',
    src: '/images/mock/c-sharp-logo.png'
  },
  {
    id: 3,
    title: 'БД',
    description: 'Иимеющая название совокупность данных, которая отражает состояние объектов и их отношений в рассматриваемой предметной области.',
    src: '/images/mock/db-logo.png'
  },
  {
    id: 4,
    title: 'Web',
    description: 'Создать живого и многофункционального сайта, который привлекателен для пользователя, хорошо и быстро работает, закрывает потребности бизнеса.',
    src: '/images/mock/js-logo.png'
  },
  {
    id: 5,
    title: 'Web',
    description: 'Создать живогоо и быстро работает, закрывает потребности бизнеса.',
    src: '/images/mock/js-logo.png'
  },
  {
    id: 6,
    title: 'Web',
    description: 'Создать живогоо и быстро работает, закрывает потребности бизнеса.',
    src: '/images/mock/js-logo.png'
  },
  {
    id: 7,
    title: 'БД',
    description: 'Иимеющая название совокупность данных, которая отражает состояние объектов и их отношений в рассматриваемой предметной области.',
    src: '/images/mock/db-logo.png'
  },
]

function redirect(id: number): void {
  router.push({ name: RoutesNamesEnum.COURSE, params: { id } });
}
</script>