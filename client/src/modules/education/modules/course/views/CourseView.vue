<template>
  <div class="flex flex-col gap-16">
    <template v-if="!loading">
      <CourseHeader
          :title="result.course.name"
          :description="result.course.description"
          :src="result.course.image"
      />

      <div class="flex flex-col gap-5 default-container">
        <ShortLesson
            v-for="lesson in result.course.lessons"
            :key="lesson.name"
            :title="lesson.name"
            :description="lesson.description"
            :src="result.course.image"
            :characteristics="lesson.characteristics"
            @click="redirect(lesson.id)"
        />
      </div>
    </template>


    <template v-if="loading">
      <CourseHeaderSkeleton/>

      <div class="flex flex-col gap-5 default-container">
        <ShortLessonSkeleton v-for="n in 2" :key="n"/>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import router from "@/app/router";
import {RoutesNamesEnum} from "@/app/router/enums/RoutesNames.ts";

import {GET_COURSE} from "@/modules/education/modules/course/requests/getCourse.ts";
import {useQuery} from "@vue/apollo-composable";

import CourseHeader from "@/modules/education/modules/course/components/courseHeader/CourseHeader.vue";
import ShortLesson from "@/modules/education/modules/course/components/shortLesson/ShortLesson.vue";
import CourseHeaderSkeleton from "@/modules/education/modules/course/components/courseHeader/CourseHeaderSkeleton.vue";
import ShortLessonSkeleton from "@/modules/education/modules/course/components/shortLesson/ShortLessonSkeleton.vue";

const {result, loading} = useQuery(GET_COURSE, {id: '1'})

function redirect(id: number): void {
  router.push({name: RoutesNamesEnum.LESSON, params: {id}});
}
</script>