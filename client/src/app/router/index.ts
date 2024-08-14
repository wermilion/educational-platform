import {createRouter, createWebHistory, Router, RouteRecordRaw} from 'vue-router'
import {RoutesNamesEnum} from "@/app/router/enums/RoutesNames.ts";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: RoutesNamesEnum.MAIN,
        component: () => import('@/modules/main/views/MainView.vue'),
        meta: {
            title: 'Главная'
        }
    },
    {
        path: `/${RoutesNamesEnum.ABOUT}`,
        name: RoutesNamesEnum.ABOUT,
        component: () => import('@/modules/profile/views/ProfileView.vue'),
        meta: {
            title: 'Обо мне'
        }
    },
    {
        path: `/${RoutesNamesEnum.PORTFOLIO}`,
        name: RoutesNamesEnum.PORTFOLIO,
        component: () => import('@/modules/portfolio/views/PortfolioView.vue'),
        meta: {
            title: 'Портфолио'
        },
    },
    {
        path: `/${RoutesNamesEnum.EDUCATION}`,
        name: RoutesNamesEnum.EDUCATION,
        component: () => import('@/modules/education/views/EducationView.vue'),
        meta: {
            title: 'Образование'
        }
    },
    {
        path: `/${RoutesNamesEnum.COURSE}/:id`,
        name: RoutesNamesEnum.COURSE,
        component: () => import('@/modules/education/modules/course/views/CourseView.vue'),
    },
    {
        path: `/${RoutesNamesEnum.LESSON}/:id`,
        name: RoutesNamesEnum.LESSON,
        component: () => import('@/modules/education/modules/lesson/views/LessonView.vue'),
    },
    {
        path: RoutesNamesEnum.ERROR,
        component: () => import('@/modules/error/views/ErrorView.vue'),
        meta: {
            title: 'Страница не найдена :('
        }
    }
]

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

router.beforeEach((to): void => {
    if (to.meta?.title) {
        document.title = to.meta.title as string;
    }
})

export default router
