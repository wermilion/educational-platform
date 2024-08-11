<template>
  <div class="card">
    <div class="card-header">
      <h3 class="text-base font-semibold">
        {{ data.title }}
      </h3>
    </div>
    <div class="card-body">
      <div class="grid gap-y-5">
        <div class="flex align-start gap-3.5">
          <img alt="work place" class="h-10" :src="'/images/companies/' + data.education.logo">
          <div class="flex flex-col gap-1">
            <a class="text-sm font-semibold text-primary leading-none hover:text-primary-active"
               :href="data.education.link" target="_blank">
              {{ data.education.name }}
            </a>
            <span class="text-sm font-medium text-gray-800" v-html="data.education.direction">
            </span>
            <span class="text-xs font-medium text-neutral-500 leading-none">
               {{ data.education.endDate }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = {
  title: 'Образование',
  education: {
    logo: 'tusur-logo.png',
    link: 'https://tusur.ru/ru',
    name: 'ТУСУР',
    direction: 'Бакалавр <br /> 09.03.03 Прикладная информатика',
    endDate: '2020г'
  }
}
</script>