<template>
  <aside class="grid gap-5 lg:gap-7.5 h-fit">
    <ProfileWorkExperience />
    <ProfileEducation />
    <ProfileSkills />
  </aside>
</template>

<script setup lang="ts">

import ProfileWorkExperience from "@/modules/profile/components/aside/work-experience/ProfileWorkExperience.vue";
import ProfileSkills from "@/modules/profile/components/aside/skills/ProfileSkills.vue";
import ProfileEducation from "@/modules/profile/components/aside/education/ProfileEducation.vue";
</script>