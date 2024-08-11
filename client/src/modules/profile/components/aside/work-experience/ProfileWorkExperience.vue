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
          <img alt="work place" class="h-8" :src="'/images/companies/' + data.presentJob.company.logo">
          <div class="flex flex-col gap-1">
            <a class="text-sm font-semibold text-primary leading-none hover:text-primary-active"
               :href="data.presentJob.company.link" target="_blank">
              {{ data.presentJob.company.name }}
            </a>
            <span class="text-sm font-medium text-gray-800">
               {{ data.presentJob.position }}
            </span>
            <span class="text-xs font-medium text-neutral-500 leading-none">
               {{ data.presentJob.workTime }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = {
  title: 'Опыт работы',
  presentJob: {
    id: 1,
    company: {
      name: 'ОГБПОУ "ТЭПК"',
      logo: 'tepk.png',
      link: 'http://tept.edu.ru'
    },
    position: 'Преподаватель IT',
    workTime: '2008 - по настоящее время'
  }
}
</script>