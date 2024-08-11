<template>
  <section class="default-container">
    <div class="flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:py-7">
      <img src="/images/personal/main.png" alt="profile image" class="rounded-full size-[150px] shrink-0">
      <div class="text-lg leading-5 font-semibold text-gray-900">{{ data.title}}</div>
      <div class="flex flex-wrap justify-center gap-5 text-sm">
        <a
            v-for="link in data.links"
            :key="link.id"
            :href="link.href"
            target="_blank"
            class="flex gap-2 items-center"
        >
          <i class="text-xl" :class="link.icon"></i>
          <span class="text-gray-600">
           {{ link.text }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const data = {
  title: 'Федорова Анна Николаевна',
  links: [
    {
      id: 1,
      icon: 'fa-solid fa-briefcase',
      text: 'ОГБПОУ "ТЭПК"',
      href: 'http://tept.edu.ru'
    },
    {
      id: 2,
      icon: 'fa-brands fa-vk',
      text: 'anna_fedorova83',
      href: 'https://vk.com/anna_fedorova83'
    }
  ]
}
</script>

<style scoped lang="scss">
.default-container {
  background-image: url("/images/patterns/bg-honeycombs.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
</style>