<template>
  <div v-if="!mobileStore.isMobile" class="flex items-center gap-12">
    <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.path"
        class="text-xl transition-all duration-300 hover:text-primary"
        :class="route.path === link.path ? 'text-primary' : 'text-darkest-primary'"
    >
      {{ link.title }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import {useMobileStore} from "@/app/store/mobile";
import {useRoute} from "vue-router";

const mobileStore = useMobileStore();
const route = useRoute();

defineProps<{ links: { title: string, path: string }[] }>()
</script>