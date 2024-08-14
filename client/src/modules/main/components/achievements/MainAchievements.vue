<template>
  <section class="default-container flex flex-col gap-16">
    <h2>{{ data.title }}</h2>
    <div class="flex justify-between items-center gap-10">
      <article
          v-for="(item, index) in data.items"
          :key="index"
          @click="changeChapter(item.id)"
          class="flex flex-col max-w-[22%] w-full h-full rounded-xl bg-white cursor-pointer transition duration-300 hover:scale-[101%] shadow-lg"
      >
        <div class="max-h-[250px] overflow-hidden bg-indigo-100 rounded-t-xl">
          <div class="max-w-[80%] mx-auto translate-y-8 overflow-hidden rounded-t-xl">
            <img :src="'images/portfolio/' + item.src"
                 :alt="item.title"
                 class="rounded-xl"
                 :style="'transform: translateY(' + item.translateY + 'px)'"
            >
          </div>
        </div>
        <div class="h-full px-3.5 pt-3 pb-3.5">
          <h3 class="font-semibold block text-dark text-xl mb-2">{{ item.title }}</h3>
          <p class="text-base text-dark">{{ item.text }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import router from "@/app/router";

import {usePortfolioStore} from "@/modules/portfolio/store";

import {RoutesNamesEnum} from "@/app/router/enums/RoutesNames.ts";
import {PortfolioChaptersEnum} from "@/modules/portfolio/enums/PortfolioChapters.ts";

const portfolioChapter = usePortfolioStore();

const data = {
  title: 'Мои достижения',
  items: [
    {
      id: PortfolioChaptersEnum.DIPLOMAS,
      src: '/diplomas/diplom_WSR_3.jpg',
      title: 'Дипломы',
      text: 'Подтверждение успехов и достижений в профессиональных соревнованиях и конкурсах различного уровня, демонстрирующее высокую квалификацию.',
      translateY: 0
    },
    {
      id: PortfolioChaptersEnum.CERTIFICATES,
      src: '/certificates/certificate_1.jpg',
      title: 'Сертификаты',
      text: 'Документы, удостоверяющие участие и приобретение новых компетенций в рамках образовательных программ и профессиональных мероприятий.',
      translateY: -100
    },
    {
      id: PortfolioChaptersEnum.QUALIFICATION,
      src: '/qualifications/qualification_5_short.jpg',
      title: 'Повышение квалификации',
      text: 'Свидетельства о дополнительном образовании, обновлении знаний и совершенствовании навыков специалиста согласно современным требованиям.',
      translateY: 0
    },
    {
      id: PortfolioChaptersEnum.APPRECIATION,
      src: 'appreciations/appreciation_6.jpeg',
      title: 'Благодарности',
      text: 'Признание вклада в подготовку студентов, работу в жюри и экспертную деятельность на различных мероприятиях и в образовательных проектах.',
      translateY: -5
    }
  ]
}

function changeChapter(id: number) {
  portfolioChapter.changeChapter(id);
  router.push({ name: RoutesNamesEnum.PORTFOLIO });
}

</script>