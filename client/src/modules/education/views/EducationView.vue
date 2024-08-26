<template>
  <div class="default-container flex flex-col gap-16">
    <h2>Образовательные курсы</h2>

    <section class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-5 lg:gap-7.5">
      <template v-if="!loading">
        <CourseCard
            v-for="item in result.courses"
            :key="item.id"
            :name="item.name"
            :description="item.description"
            :image="item.image"
            @click="redirect(item.id)"
        />
      </template>

      <template v-if="loading">
        <CourseCardSkeleton
            v-for="n in 5"
            :key="n"
        />
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import router from "@/app/router";
import {RoutesNamesEnum} from "@/app/router/enums/RoutesNames.ts";

import {useQuery} from "@vue/apollo-composable";
import {GET_COURSES} from "@/modules/education/requests/getCourses.ts";

import CourseCard from "@/modules/education/components/course-card/CourseCard.vue";
import CourseCardSkeleton from "@/modules/education/components/course-card/CourseCardSkeleton.vue";

const {result, loading} = useQuery(GET_COURSES)

function redirect(id: number): void {
  router.push({name: RoutesNamesEnum.COURSE, params: {id}});
}
</script>