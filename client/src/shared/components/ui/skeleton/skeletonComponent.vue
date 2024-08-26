<template>
  <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
    <div class="bg-gray rounded-md" :class="componentClass"></div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ componentClass: string; }>()
</script>