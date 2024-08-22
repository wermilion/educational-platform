<template>
  <section class="default-container flex flex-col gap-8 lg:gap-16">
    <div class="flex flex-col lg:flex-row justify-between gap-8">
      <h2>{{ data.title }}</h2>
      <div class="max-w-2xl text-xl bg-indigo-100 p-5 rounded-lg self-end" v-html="data.quote"></div>
    </div>

    <div class="flex flex-col lg:flex-row justify-between items-center gap-5">
      <a
          v-for="(item, index) in data.items"
          :key="index"
          :href="item.path"
          target="_blank"
          class="flex flex-col max-w-full lg:max-w-[31%] _2xl:max-w-[30%] w-full h-full rounded-xl bg-white cursor-pointer transition duration-300 hover:scale-[101%] shadow-lg"
      >
        <div class="max-h-[250px] overflow-hidden bg-indigo-100 rounded-t-xl">
          <div class="max-w-[80%] mx-auto h-full  translate-y-8 overflow-hidden rounded-t-xl">
            <img :src="'images/education/' + item.src"
                 :alt="item.title"
                 class="rounded-xl mx-auto h-40"
                 :style="'transform: translateY(' + item.translateY + 'px)'"
            >
          </div>
        </div>
        <div class="h-full px-3.5 pt-3 pb-3.5">
          <h3 class="font-semibold block text-dark text-xl mb-2">{{ item.title }}</h3>
          <p class="text-base text-dark line-clamp-3">{{ item.text }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const data = {
  title: 'Образовательные платформы',
  quote: `
    <span class="font-semibold">Образование</span> - это наш паспорт в будущее, потому что завтра принадлежит тем, кто готовится к нему сегодня.
    <br>
    <span class="inline-block w-full text-right font-semibold mt-3">Малкольм Икс</span>
  `,
  items: [
    {
      title: '1С',
      text: 'На этом канале Вы найдете бесплатные онлайн уроки обучения 1С для пользователей и программистов.',
      src: '1c_course_logo.jpg',
      path: 'https://www.youtube.com/@ironskills-1c/playlists',
      translateY: 0
    },
    {
      title: 'Веб-разработка',
      text: 'Научитесь создавать и программировать современные веб-интерфейсы, начните карьеру в IT, оттачивайте своё мастерство.',
      src: 'html_academy_logo.png',
      path: 'https://htmlacademy.ru/',
      translateY: 0
    },
    {
      title: 'SQL и Базы данных',
      text: 'В ходе курса вы изучите язык SQL, а также научитесь работать с базами данных на примере MySQL.',
      src: 'sql_course_logo.svg',
      path: 'https://itproger.com/course/sql',
      translateY: 0
    }
  ]
}
</script>