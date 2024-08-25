<template>
  <div class="flex flex-col gap-16">
    <template v-if="!loading">
      <CourseHeader
          :title="result.course.name"
          :description="result.course.description"
          :src="result.course.image"
      />
    </template>
    <template v-if="loading">
      <SkeletonComponent class="w-full flex items-center flex-wrap justify-between gap-5">
        <div class="default-container flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:py-7">
          <div class="rounded-2xl bg-gray size-[150px] shrink-0"></div>
          <div class="w-20 h-4 bg-gray rounded-md"></div>
          <div class="w-52 h-3 bg-gray rounded-md"></div>
        </div>
      </SkeletonComponent>
    </template>


    <div class="flex flex-col gap-5 default-container">
      <template v-if="!loading">
        <ShortLesson
            v-for="lesson in result.course.lessons"
            :key="lesson.name"
            :title="lesson.name"
            :description="lesson.description"
            :src="result.course.image"
            :characteristics="lesson.characteristics"
            @click="redirect(lesson.id)"
        />
      </template>

      <template v-if="loading">
        <div
            v-for="n in 2"
            :key="n"
            class="card w-full px-5 py-2.5 cursor-pointer transition duration-300 hover:scale-[101%]"
            style="flex-direction: row">
          <SkeletonComponent class="w-full flex items-center flex-wrap justify-between gap-5">
            <div class="flex items-center gap-5">
              <div class="size-11 bg-gray rounded-md"></div>
              <div class="flex flex-col gap-4" style="margin: 0;">
                <div class="w-20 h-4 bg-gray rounded-md"></div>
                <div class="w-60 h-3 bg-gray rounded-md"></div>
              </div>
            </div>

            <div class="w-24 h-14 bg-gray rounded-md" style="margin: 0;"></div>
          </SkeletonComponent>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/app/router";
import {gql} from "graphql-tag";
import {useQuery} from "@vue/apollo-composable";
import {RoutesNamesEnum} from "@/app/router/enums/RoutesNames.ts";

import CourseHeader from "@/modules/education/modules/course/components/CourseHeader.vue";
import ShortLesson from "@/modules/education/modules/course/components/ShortLesson.vue";
import SkeletonComponent from "@components/ui/skeleton/SkeletonComponent.vue";

const {result, loading} = useQuery(gql`
    query getCourse($id: ID!) {
        course (id: $id) {
            id
            name
            description
            lessons {
                id
                name
                description
                content
                file_url
            }
        }
    }
`, {id: '1'})

function redirect(id: number): void {
  router.push({name: RoutesNamesEnum.LESSON, params: {id}});
}
</script>