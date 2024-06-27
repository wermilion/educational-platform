<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-links">
                <template
                    v-for="(item, index) in navLinks"
                    :key="index"
                >
                    <span
                        v-if="item.id === 'contact-with-me'"
                        class="footer-link"
                        @click="changeVisibility"
                    >
                        {{ item.label }}
                    </span>
                    <router-link
                        v-else
                        :to="item.path"
                        class="footer-link"
                    >
                        {{ item.label }}
                    </router-link>
                </template>
            </div>
            <div class="footer-socials">
                <a
                    v-for="(item, index) in socialNetworks"
                    :key="index"
                    :href="item.path"
                    target="_blank"
                >
                    <img style="width: 32px; height: 32px;" :src="'/images/socials/' + item.src" :alt="item.alt">
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {useStore} from "vuex";
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router/dist/vue-router";

const navLinks = ref([
    { path: "/", label: "Главная", id: "home", isActive: false },
    { path: "/portfolio", label: "Портфолио", id: "portfolio", isActive: false },
    { path: "/about", label: "Обо мне", id: "about-me", isActive: false },
    { path: "#", label: "Связаться со мной", id: "contact-with-me", isActive: false },
])

const socialNetworks = [
    {src: "vk.svg", path: "https://vk.com/anna_fedorova83", alt: "vk"},
]

const store = useStore();
const route = useRoute();

const changeVisibility = () => {
    store.commit('MainData/changeModalVisibility')
}

// Выполняется при монтировании компонента
onMounted(() => {
    navLinks.value.forEach((el) => {
        el.isActive = el.path === route.path;
    })
});

// Следим за изменениями маршрута
watch(route, (to) => {
    navLinks.value.forEach((el) => {
        el.isActive = el.path === to.path;
    })
});
</script>

<style scoped lang="scss">
.footer {
    width: 100%;
    padding: 30px 0;
    background-color: $base-light;
    z-index: 20;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include _700 {
            flex-direction: column;
        }
    }

    &-links {
        display: flex;
        align-items: center;
        gap: 20px;

        @include _700 {
            flex-direction: column;
            gap: 0px;
        }
    }

    &-link {
        padding: 18px 0;
        color: $dark-primary-secondary;
        text-decoration: none;
        cursor: pointer;
        transition: all .3s;

        &:hover {
            color: $primary;
        }

        @include _700 {
            width: 100%;
            padding: 10px 0px;
            border-radius: 2px;
            text-align: center;
        }
    }

    &-socials {
        display: flex;
        align-items: center;
        gap: 16px;
        justify-content: center;
    }
}
</style>
