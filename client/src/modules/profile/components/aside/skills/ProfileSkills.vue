<template>
  <div class="card">
    <div class="card-header">
      <h3 class="text-base font-semibold">
        {{data.title}}
      </h3>
    </div>
    <div class="card-body">
      <div class="flex flex-wrap gap-2.5 mb-2">
        <span v-for="skill in data.skills" :key="skill.id" class="badge badge-sm badge-gray-200 cursor-default">
          {{ skill.title}}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const data = {
  title: 'Навыки',
  skills: [
    { id: 1, title: '1С' },
    { id: 2, title: 'MySQL' },
    { id: 3, title: 'phpMyAdmin' },
    { id: 4, title: 'ДОМИНО' },
    { id: 5, title: 'Photoshop' },
    { id: 6, title: 'Компас-3D' },
    { id: 7, title: 'Blender' },
    { id: 8, title: 'Visual Studio' },
  ]
}
</script>