<template>
    <div class="container usefull-edu">
        <div class="usefull-edu__header">
            <h2>Образовательные платформы</h2>
            <p>„<span>Образование</span> - это наш паспорт в будущее, потому что завтра принадлежит тем, кто готовится к нему сегодня.“</p>
            <span style="text-align: end; font-style: italic;">Малкольм Икс</span>
        </div>
        <section class="usefull-edu__courses">
            <article
                v-for="(item, index) in courses"
                :key="index"
                class="usefull-edu__course course"
            >
                <div
                    class="course__image-wrapper"
                    :style="{background: item.color}"
                >
                    <img
                        :src="'images/usefulledu/' + item.src"
                        :alt="item.name"
                        class="course__image"
                    >
                </div>
                <div class="course__text-content">
                    <h3 class="course__title">{{ item.name }}</h3>
                    <p class="course__description">{{ item.desc }}</p>

                    <div class="course__link-box">
                        <a :href="item.path" target="_blank">
                            Подробнее
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                            >
                                <path
                                    d="M4.00004 1.66675H17.3334V15.0001M17.3334 1.66675L1.33337 17.6667L17.3334 1.66675Z"
                                    stroke="#282938FF"
                                    stroke-width="2.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    </div>
</template>

<script setup>
const courses = [
    {
        src: '1c.png',
        color: '#d9d2fe',
        path: 'https://www.youtube.com/@ironskills-1c/playlists',
        name: '1С',
        desc: 'На этом канале Вы найдете бесплатные онлайн уроки обучения 1С для пользователей и программистов. '
    },
    {
        src: 'academy.png',
        color: '#fff',
        path: 'https://htmlacademy.ru/',
        name: 'Веб-разработка',
        desc: 'Научитесь создавать и программировать современные веб-интерфейсы, начните карьеру в IT, оттачивайте своё мастерство.'
    },
    {
        src: 'sql.png',
        color: '#d3d5d9',
        path: 'https://itproger.com/course/sql',
        name: 'SQL и Базы данных',
        desc: 'В ходе курса вы изучите язык SQL, а также научитесь работать с базами данных на примере MySQL.'
    }
]
</script>

<style scoped lang="scss">
.usefull-edu {
    padding: 70px 15px 140px;

    @include _1300 {
        padding: 30px 15px;
    }

    &__header {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        gap: 20px;
        margin-bottom: 70px;

        h2 {
            margin-bottom: 30px;
        }

        p {
            width: 100%;
            padding: 15px;
            border-top: 2px solid $primary;
            border-bottom: 2px solid $primary;
            border-radius: 2px;
        }

        p span {
            color: $dark-primary-secondary;
            font-weight: 700;
            font-style: italic;
        }
    }

    &__courses {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5%;

        @include _1300 {
            flex-direction: column;
            gap: 20px;
        }
    }

    &__course {
        display: flex;
        flex-direction: column;
        max-width: 30%;
        width: 100%;
        background: white;
        box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        overflow: hidden;

        @include _1300 {
            max-width: 100%
        }

        .course {
            &__image {
                width: 800px;
                position: absolute;
                top: 0;
                left: 60%;
                border-radius: 10px;
                transform: translate(-50%, 0);

                @include _1300 {
                    top: -70px;
                    width: 150%;
                }

                @include _700 {
                    top: -20px;
                    width: 150%;
                }

                &-wrapper {
                    position: relative;
                    max-width: 100%;
                    width: 100%;
                    height: 400px;
                    overflow: hidden;

                    @include _1300 {
                        height: 200px;
                    }
                }
            }

            &__text-content {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 32px;

                h3 {
                    color: $dark-primary;
                    font-size: 32px;
                }

                p {
                    @include textEllipsis(4);
                    color: $dark-primary-secondary;
                    font-size: 20px;
                }
            }

            &__link-box {
                width: max-content;
                margin-top: 22px;
                border-bottom: 2px solid transparent;
                transition: .3s ease;

                &:hover {
                    border-color: $primary;

                    a {
                        color: $primary;
                    }

                    svg path {
                        stroke: $primary;
                    }
                }

                a {
                    display: flex;
                    align-items: center;
                    width: max-content;
                    gap: 10px;
                    text-decoration: none;
                    color: $dark-primary;
                    font-size: 18px;
                    font-weight: 600;
                }

                a,
                svg path {
                    transition: .3s ease;
                }
            }
        }

        &:first-child {
            .course__image {
                width: 100%;
                left: 0;
                top: 50px;
                transform: rotate(-15deg);

                @include _1300 {
                    top: 10px;
                }
            }
        }

        &:last-child {
            .course__image {
                width: 100%;
                left: 0;
                top: 50px;
                transform: rotate(15deg);

                @include _1300 {
                    top: 10px;
                }
            }
        }
    }
}
</style>
