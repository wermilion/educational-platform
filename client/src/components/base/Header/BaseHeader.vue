<template>
    <header class="header">
        <div class="container">
            <div
                v-show="screenWidth > 1024 || screenWidth <= 1024 && menuIsActive"
                class="header-items"
            >
                <nav class="nav">
                    <router-link
                        v-for="(item, index) in navLinks"
                        :key="index"
                        :to="item.path"
                        :class="['nav-item', { '_active': item.isActive }]"
                        @click="closeMenu"
                    >
                        {{ item.label }}
                    </router-link>
                </nav>
                <UIButton
                    label="Связаться со мной"
                    class="ghost"
                    @click="changeVisibility"
                />
            </div>
            <button
                v-if="screenWidth <= 1024"
                :class="['burger-menu', { 'is-active' : menuIsActive }]"
                @click="changeMenuState"
            >
                <div class="burger-menu__line first"></div>
                <div class="burger-menu__line second"></div>
                <div class="burger-menu__line third"></div>
            </button>
        </div>
    </header>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue';
import UIButton from '@/components/ui/Button/UIButton.vue';
import {enableScroll} from "../../../utils/scroll/enableScroll";
import {disableScroll} from "../../../utils/scroll/disableScroll";

const store = useStore();
const route = useRoute();

const navLinks = ref([
    { path: "/", label: "Главная", isActive: false },
    { path: "/portfolio", label: "Портфолио", isActive: false },
    { path: "/about", label: "Обо мне", isActive: false },
])
const menuIsActive = ref(false)
let screenWidth = ref(window.innerWidth)

const handleResize = () => {
    screenWidth.value = window.innerWidth
}

const changeMenuState = () => {
    menuIsActive.value = !menuIsActive.value

    menuIsActive.value ? disableScroll() : enableScroll()
}

const closeMenu = () => {
    menuIsActive.value = false
    enableScroll()
}

const changeVisibility = () => {
    store.commit('MainData/changeModalVisibility')

    closeMenu()
}

// Выполняется при монтировании компонента
onMounted(() => {
    screenWidth.value = window.innerWidth
    
    navLinks.value.forEach((el) => {
        el.isActive = el.path === route.path;
    })

    window.addEventListener('resize', handleResize)
});

// Следим за изменениями маршрута
watch(route, (to) => {
    navLinks.value.forEach((el) => {
        el.isActive = el.path === to.path;
    })
});
</script>

<style scoped lang="scss">
.header {
    position: sticky;
    top: 0;
    width: 100%;
    padding: 25px 0;
    background-color: white;
    box-shadow: 0 5px 80px 0 rgba(0, 0, 0, 0.10);
    z-index: 999;

    &-items {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include _1024 {
            position: absolute;
            top: 0;
            left: 0;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            width: 100vw;
            height: 100vh;
            background-color: white;
            transition: .3s ease;
        }
    }

    .nav {
        display: flex;
        gap: 42px;

        @include _1024 {
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }


        &-item {
            padding: 18px 0;
            color: $dark-primary-secondary;
            text-decoration: none;
            transition: all .3s;

            &:hover {
                color: $primary;
            }

            &._active {
                color: $primary;
            }
        }
    }

    .burger-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 30px;
        height: 48px;
        border: none;
        padding: 15px 5px;
        margin-left: auto;
        background: transparent;
        cursor: pointer;

        &__line {
            width: 100%;
            border-top: 2px solid $primary;
            transition: .3s ease;
        }

        &.is-active {
            transform-origin: 0 100%;

            .first {
                position: relative;
                transition: 0.3s ease;
                transform: rotate(45deg) translate(6px, 5px)
            }

            .third {
                position: relative;
                transition: 0.3s ease;
                transform: rotate(-45deg) translate(6px, -5px)
            }

            .second {
                transform: scale(0);
            }
        }
    }
}
</style>
