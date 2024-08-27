<template>
  <div>
    <div v-if="!loading" class="flex flex-col gap-16">
      <LessonHeader
          :name="result.lesson?.name"
          :description="result.lesson?.description"
          :image="result.lesson?.course.image"
          :characteristics="result.lesson?.characteristics"
      />

      <div class="flex flex-col gap-5 default-container" v-html="result.lesson?.content"></div>
    </div>

    <div v-if="loading" class="flex flex-col gap-16">
      <LessonHeaderSkeleton />

      <SkeletonComponent component-class="default-container w-full h-[400px] rounded-3xl" />
    </div>
  </div>

</template>

<script setup lang="ts">
import LessonHeader from "@/modules/education/modules/lesson/components/LessonHeader.vue";
import {useQuery} from "@vue/apollo-composable";
import {GET_LESSON} from "@/modules/education/modules/lesson/requests/getLesson.ts";
import router from "@/app/router";
import LessonHeaderSkeleton from "@/modules/education/modules/lesson/components/LessonHeaderSkeleton.vue";
import SkeletonComponent from "@components/ui/skeleton/skeletonComponent.vue";

const lessonId = router.currentRoute.value.params.id;
const {result, loading} = useQuery(GET_LESSON, {id: lessonId})
</script>

<style>
figure {
  figcaption {
    display: none;
  }
}
</style>