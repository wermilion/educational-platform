<template>
    <div class="main-info">
        <div class="container">
            <div class="main-info__content">
            <div class="main-info__text-content">
                <h1>
                    <span>{{ mainInfo.title.coloredPart }}</span>
                    {{ mainInfo.title.firstPart }}
                </h1>
                <p>{{ mainInfo.description }}</p>
            </div>
            <UIButton :label="mainInfo.buttonText" @click="changeVisibility"/>
        </div>

        <div class="main-info__img-wrapper">
            <img
                class="main-info__img"
                :src="mainInfo.img"
                alt="My photo"
            />
        </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import {reactive} from 'vue';
import UIButton from '@/components/ui/Button/UIButton.vue';

const mainInfo = reactive({
    title: {
        firstPart: 'Анна Николаевна ',
        coloredPart: 'Федорова',
    },
    description: 'Преподаватель Томского экономико-промышленного колледжа, кафедра IT-технологий.',
    buttonText: 'Связаться со мной',
    img: 'images/mainInfo/main-info.jpg'
})

const store = useStore();

const changeVisibility = () => {
    store.commit('MainData/changeModalVisibility')
}
</script>

<style scoped lang="scss">
.main-info {
    background-color: $base-light;

    .container {
        display: flex;
        align-items: center;
        padding: 80px 15px;

        @include _1024 {
            flex-direction: column-reverse;
            gap: 30px;
            padding: 30px 15px;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        max-width: 46%;
        width: 100%;
        gap: 32px;

        @include _1024 {
            max-width: 100%;
        }
    }

    &__text-content {
        @extend .main-info__content;
        max-width: 100%;
        gap: 20px;
        color: $dark-primary-secondary;

        h1 span{
            color: $primary;

            @include _700 {
                font-size: 50px;
            }
        }

        p {
            max-width: 80%;
            width: 100%;
            font-size: 24px;
        }

    }

    button {
        width: fit-content;

        @include _1024 {
            width: 100%;
        }
    }

    &__img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &-wrapper {
            position: relative;
            max-width: 51%;
            width: 100%;
            height: 730px;
            border-radius: 10px;
            overflow: hidden;

            @include _1024 {
                height: 400px;
            }

            @include _700 {
                max-width: 100%;
                width: 100%;
                height: 500px;
            }
        }
    }
}
</style>
