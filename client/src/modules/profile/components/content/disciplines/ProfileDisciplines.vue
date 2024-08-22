<template>
  <div class="col-span-1 _2xl:col-span-2">
    <div class="card grow">
      <div class="card-header">
        <h3 class="text-base font-semibold">
          {{ data.title }}
        </h3>
      </div>
      <div class="card-body flex items-center justify-between gap-5">
        <div class="grid _2xl:grid-cols-2 gap-x-5 _2xl:gap-y-2 w-full">
          <div v-for="(item, index) in data.disciplines" :key="index" class="flex items-center gap-1.5 py-1.5 lg:py-3">
            <div class="flex items-center justify-center bg-light-success rounded-full border border-success max-h-7 max-w-7 min-h-7 min-w-7 size-full">
              <i class="fa-solid text-success text-sm" :class="item.icon"></i>
            </div>
            <span class="text-sm font-medium text-gray-800">
             {{ item.text }}
            </span>
          </div>
        </div>
        <img src="/images/cartoons/girl-with-laptop.jpg" alt="girl-with-laptop" class="hidden md:block size-[200px]">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = {
  title: 'Преподаваемые дисциплины',
  description: 'Дисциплины на которых я специализируюсь:',
  disciplines: [
    {
      icon: 'fa-laptop',
      text: 'Основы алгоритмизации и программирования',
    },
    {
      icon: 'fa-mobile-screen-button',
      text: 'Разработка мобильных приложений',
    },
    {
      icon: 'fa-shield-halved',
      text: 'Поддержка и тестирование программных модулей',
    },
    {
      icon: 'fa-database',
      text: 'Основы проектирования баз данных'
    },
    {
      icon: 'fa-desktop',
      text: 'Разработка программных модулей',
    },
    {
      icon: 'fa-code-pull-request',
      text: 'Проектирование и разработка кода информационных систем'
    }
  ]
}
</script>