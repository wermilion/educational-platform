import {createRouter, createWebHistory, Router} from 'vue-router'
import {RoutesNamesEnum} from "@/router/enums/RoutesNames.ts";

const routes = [
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
        }
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
    document.title = to.meta.title as string;
})

export default router
