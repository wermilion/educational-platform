<template>
  <div class="col-span-2">
    <div class="card grow">
      <div class="card-header">
        <h3 class="text-base font-semibold">
          {{ data.title }}
        </h3>
      </div>
      <div class="card-body flex items-center justify-between">
        <table>
          <tbody>
          <tr v-for="row in data.disciplines" :key="row.id">
            <td v-for="(item, index) in row.items" :key="index" class="py-3 pe-7">
              <div class="flex items-center gap-1.5">
                <div class="flex items-center justify-center bg-light-success rounded-full border border-success size-7">
                  <i class="fa-solid text-success text-sm" :class="item.icon"></i>
                </div>
                <span class="text-sm font-medium text-gray-800 text-nowrap">
                  {{ item.text }}
                </span>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <img src="/images/cartoons/girl-with-laptop.jpg" alt="girl-with-laptop" class="size-[200px]">
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
      id: 1,
      items: [
        {
          icon: 'fa-laptop',
          text: 'Основы алгоритмизации и программирования',
        },
        {
          icon: 'fa-mobile-screen-button',
          text: 'Разработка мобильных приложений',
        }
      ]
    },
    {
      id: 2,
      items: [
        {
          icon: 'fa-shield-halved',
          text: 'Поддержка и тестирование программных модулей',
        },
        {
          icon: 'fa-database',
          text: 'Основы проектирования баз данных'
        }
      ]
    },
    {
      id: 3,
      items: [
        {
          icon: 'fa-desktop',
          text: 'Разработка программных модулей',
        },
        {
          icon: 'fa-code-pull-request',
          text: 'Проектирование и разработка кода информационных систем'
        },
      ]
    }
  ]
}
</script>