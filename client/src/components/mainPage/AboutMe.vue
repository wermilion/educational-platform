<template>
    <div class="about container">
        <h2>{{ aboutBlock.title }}</h2>
        <div class="about-content">
            <img
                class="about-img"
                :src="aboutBlock.img"
                :alt="aboutBlock.title"
            >
            <div class="about-text-content">
                <p class="about-desc" v-html="aboutBlock.description"></p>
                <router-link
                    class="about-more"
                    to="/about"
                >
                    Узнать подробнее...
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import {reactive} from 'vue'

const aboutBlock = reactive({
    title: 'Обо мне',
    description: 'Привет, меня зовут Анна! С 2008 года являюсь преподавателем IT в Томском экономико-промышленном колледже, а также экспертом по компетенции «Автоматизация бизнес-процессов организаций».<br><br>Имею опыт программирования в 1С, Visual Studio, MySQL, phpMyAdmin, работала с различными системами учета, взаимодействовала с контролирующими и проверяющими органами.',
    img: 'images/about/students.jpg'
})
</script>

<style scoped lang="scss">
.about {
    display: flex;
    flex-direction: column;
    padding: 135px 15px;

    @include _1024 {
        padding: 30px 15px;
    }

    h2 {
        align-self: flex-start;
        margin-bottom: 32px;

        @include _1024 {
            align-self: center;
        }
    }

    &-content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include _1024 {
            flex-direction: column;
            gap: 30px;
        }
    }

    &-img {
        max-width: 46.5%;
        width: 100%;
        border-radius: 10px;

        @include _1024 {
            max-width: 60%;
        }

        @include _700 {
            max-width: 90%;
        }
    }

    &-text-content {
        display: flex;
        flex-direction: column;
        max-width: 45%;
        width: 100%;
        gap: 32px;

        @include _1024 {
            max-width: 80%;
        }

        @include _700 {
            max-width: 100%;
        }
    }

    &-desc {
        color: $dark-primary-secondary;
        font-size: 20px;
    }

    &-more {
        text-decoration: none;
        font-weight: 700;
        color: $dark-primary-secondary;
        transition: color .3s;

        &:hover {
            color: $primary;
        }
    }
}
</style>
