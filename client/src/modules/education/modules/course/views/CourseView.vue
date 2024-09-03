<template>
  <div class="flex flex-col gap-16">
    <template v-if="!loading">
      <CourseHeader
          :name="result.course.name"
          :description="result.course.description"
          :image="result.course.image"
      />

      <div class="flex flex-col gap-5 default-container">
        <ShortLesson
            v-for="lesson in result.course.lessons"
            :key="lesson.id"
            :name="lesson.name"
            :description="lesson.description"
            :image="result.course.image"
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
import {watch} from "vue";
import router from "@/app/router";
import {RoutesNamesEnum} from "@/app/router/enums/RoutesNames.ts";

import {GET_COURSE} from "@/modules/education/modules/course/requests/getCourse.ts";
import {useQuery} from "@vue/apollo-composable";

import CourseHeader from "@/modules/education/modules/course/components/course-header/CourseHeader.vue";
import ShortLesson from "@/modules/education/modules/course/components/short-lesson/ShortLesson.vue";
import CourseHeaderSkeleton from "@/modules/education/modules/course/components/course-header/CourseHeaderSkeleton.vue";
import ShortLessonSkeleton from "@/modules/education/modules/course/components/short-lesson/ShortLessonSkeleton.vue";

const courseId = router.currentRoute.value.params.id;
const {result, loading} = useQuery(GET_COURSE, {id: courseId})

function redirect(id: number): void {
  router.push({name: RoutesNamesEnum.LESSON, params: {id}});
}

watch(loading, () => {
  if (!loading.value) {
    document.title += (' - ' + result.value.course.name)
  }
})
</script>