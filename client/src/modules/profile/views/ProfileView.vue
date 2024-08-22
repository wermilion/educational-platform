<template>
  <div class="flex flex-col gap-8 _2xl:gap-16">
    <ProfileHeader/>
    <section class="default-container grid _2xl:grid-cols-4 gap-5 _2xl:gap-7.5">
      <ProfileAside class="col-span-1"/>
      <ProfileContent class="col-span-1 _2xl:col-span-3"/>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProfileHeader from "@/modules/profile/components/header/ProfileHeader.vue";
import ProfileAside from "@/modules/profile/components/aside/ProfileAside.vue";
import ProfileContent from "@/modules/profile/components/content/ProfileContent.vue";
</script>