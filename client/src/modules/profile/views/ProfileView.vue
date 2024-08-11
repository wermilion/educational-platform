<template>
  <div class="flex flex-col gap-24">
    <ProfileHeader/>
    <section class="default-container grid grid-cols-1 xl:grid-cols-4 gap-5 lg:gap-7.5">
      <ProfileAside class="col-span-1"/>
      <ProfileContent class="col-span-3"/>
    </section>
  </div>
</template>

<script setup lang="ts">

import ProfileHeader from "@/modules/profile/components/header/ProfileHeader.vue";
import ProfileAside from "@/modules/profile/components/aside/ProfileAside.vue";
import ProfileContent from "@/modules/profile/components/content/ProfileContent.vue";
</script>