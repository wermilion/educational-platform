<template>
    <div class="container portfolio">
        <TheSidebar :chapters="chapters" :currentChapter="store.state.portfolio.activeChapter" class="portfolio__sidebar"
            @changeChapter="changeChapter" />
        <div class="portfolio__content">
            <transition name="fadeChange">
                <div v-if="currentChapterItems" class="portfolio__items">
                    <div v-for="(item, index) in currentChapterItems" :key="index" class="portfolio__item">
                        <img :src="'images/portfolio/' + item.src" alt="portfolio item">
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </transition>
            <transition name="fadeChange">
                <div v-if="!currentChapterItems" class="portfolio__cap">
                    <h2>По вашему запросу ничего не найдено</h2>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import TheSidebar from '@/components/portfolioPage/TheSidebar.vue';
import { useStore } from "vuex";

const store = useStore();

// Все бумаги
let items = new Map([
    ['diplomas', [
        { src: 'diplomas/diplom_8.jpg', desc: 'Диплом 2022г. Лауреат премии Томской области в сфере образования и науки, здравоохранения и культуры. За высокие достижения в сфере образования и науки, оказывающие эффективное влияние на развитие экономики и социальной сферы Томской области.' },
        { src: 'diplomas/diplom_WSR_1.jpg', desc: 'Диплом ЭКСПЕРТА VI Региональный чемпионат «Молодые профессионалы» (WorldSKills Russia) 2020 Томской области, R71 ИТ-решения для бизнеса на платформе «1С-Предприятие 8», ДПО Томской области, 18-27 ноября 2020г.' },
        { src: 'diplomas/diplom_WSR_2.jpg', desc: 'Диплом ЭКСПЕРТА VII Регионального чемпионата «Молодые профессионалы» (WorldSkills Russia) 2021Томской области, по компетенции «ИТ решения для бизнеса на платформе 1C: Предприятие 8», 16-27 ноября 2021г.' },
        { src: 'diplomas/diplom_WSR_3.jpg', desc: 'Диплом ЭКСПЕРТА-КОМПАТРИОТА Отборочных соревнований для участия в Финале X Национального чемпионата «Молодые профессионалы» (WorldSkills Russia) а Республике Башкортостан, по компетенции «ИТ решения для бизнеса на платформе 1C: Предприятие 8», 11-16 апреля 2022г.' },
        { src: 'diplomas/diplom_best_practise.jpg', desc: '2020г. Диплом за участие в региональном форуме «Лучшие практики цифровой педагогики в современном образовательном пространстве», ДПО Томской области.' },
        { src: 'diplomas/diplom_best_resource.jpg', desc: 'Диплом 2021г. Участие в региональном конкурсе «Лучший цифровой образовательный ресурс» направление «Цифровые интерактивные практикумы», ДПО Томской области.' },
        { src: 'diplomas/diplom_modern_system_1.jpg', desc: '2021г. Диплом за участие во II Региональном форуме «Современная цифровая образовательная среда: лучшие практики профессиональных образовательных организаций», ДПО Томской области. Результат участия Публикация в сборнике материалов, размещенном в Программе регионального форума «Современная цифровая образовательная среда: лучшие практики профессиональных образовательных организаций».' },
        { src: 'diplomas/diplom_modern_system_2.jpeg', desc: '2022г. Диплом за выступление и публикацию материалов в рамках III Регионального форума «Современная цифровая образовательная среда: лучшие практики профессиональных образовательных организаций», ДПО Томской области.' },
        { src: 'diplomas/diplom_professional.jpg', desc: 'Диплом Лауреата в межрегиональном заочном конкурсе инновационных методических разработок "Профессионал - 2016". Номинация "IT-paedagogus", ОГБОУДПО «УМЦ», 14.02.2017г.' },
        { src: 'diplomas/diplom_Togushchakova_WSR_1_place.jpg', desc: 'Диплом I место от 16-27 ноября 2021г. VII Региональный чемпионат «Молодые профессионалы» (Worldskills Russia) 2021 Томской области по компетенции R71 ИТ-решения для бизнеса на платформе «1С: Предприятие 8».' },
        { src: 'diplomas/diplom_Mukhatdisov_WSR_3_place.jpg', desc: 'Диплом III место от 16-27 ноября 2021г. VII Региональный чемпионат «Молодые профессионалы» (Worldskills Russia) 2021 Томской области по компетенции R71 ИТ-решения для бизнеса на платформе «1С: Предприятие 8».' },
        { src: 'diplomas/diplom_Togushchakova.jpg', desc: 'Диплом участника Отборочных соревнований для участия в Финале X Национального чемпионата «Молодые профессионалы» (WorldSkills Russia) а Республике Башкортостан, по компетенции «ИТ решения для бизнеса на платформе 1C: Предприятие 8», 11-16 апреля 2022г.' },
        { src: 'diplomas/diplom_cs_1.jpg', desc: 'Подготовила призеров VIII Международному дистанционному конкурсу «Старт» по дисциплине Информатика.' },
        { src: 'diplomas/diplom_cs_2.jpg', desc: 'Подготовила призеров VIII Международному дистанционному конкурсу «Старт» по дисциплине Информатика.' },
        { src: 'diplomas/diplom_cs_3.jpg', desc: 'Подготовила призеров VIII Международному дистанционному конкурсу «Старт» по дисциплине Информатика.' },
        { src: 'diplomas/diplom_professional_21_century.jpeg', desc: ' Подготовила призера Диплом I место в III Региональной научно-практической студенческой конференции «Профессионал XXI века: настоящее, будущее» направление «Профессии и технологии настоящего и будущего», ДПО Томской области от 2022г.' },
        { src: 'diplomas/diplom_Shamne_cs.jpg', desc: 'Подготовила победителя Диплом II место в региональной "Олимпиаде знаний" по учебной дисциплине «Информатика и ИКТ», ДПО Томской области, 16 марта 2022г.' },

    ]],
    ['certificates', [
        { src: 'certificates/certificate_WSR_1.jpg', desc: 'Сертификат эксперта на III Региональном чемпионате «Молодые профессионалы» (WorldSkillsRussia) Томской области по компетенции «Программные решения для бизнеса», Региональный координационный центр, 13.11-17.11.2017г.' },
        { src: 'certificates/certificate_1.jpg', desc: 'Сертификат участника VI региональный чемпионата по компетенции "Обработка текста", ДПО Томской области, 2021г.' },
        { src: 'certificates/certificate_2.jpg', desc: 'Сертифкат за участие в конкурсе "Сделай наш сайт лучше!", посвященного 75-летию Томского экономико-промышленного колледжа.' },
    ]],
    ['qualifications', [
        { src: 'qualifications/qualification_1.jpg', desc: 'Курсы ПК №0267346 ОГБУДПО «Томский техникум информационных технологий» по программе «Проектирование ОПОП по наиболее востребованным, перспективным профессиям/специальностям (ТОП-50). «Проектирование ОПОП по IT -профилю» 36час, 2017г.' },
        { src: 'qualifications/qualification_2.jpg', desc: 'Свидетельство о повышении квалификации № DK41759 Старт в 1С (Обзорный курс для начинающих), ЧОУ ДПО «1С-Образование» 6ак. часа от 03.03.2021г.' },
        { src: 'qualifications/qualification_3.jpg', desc: 'Удостоверение о повышении квалификации 701802382988 по дополнительной профессиональной программе повышения квалификации «Презентационные технологии», ОГБПОУ «ЦОПП» 18 час.' },
        { src: 'qualifications/qualification_4.jpg', desc: 'Удостоверение о повышении квалификации 701802382898 по дополнительной профессиональной программе повышения квалификации «Применение информационных технологий в профессионально-педагогической деятельности (MOODLE: как инструмент обучения)», ОГБПОУ «ЦОПП» 36 час.' },
        { src: 'qualifications/qualification_5.jpg', desc: 'Удостоверение о повышении квалификации 700400007917 в форме стажировке по теме «Современные технологии и языки программирования, используемые при разработке программного обеспечения», ОГБПОУ «Томский экономико-промышленный колледж» 36 часов от 14.03.2020г.' }
    ]],
    ['appreciations', [
        { src: 'appreciations/appreciation_1.jpg', desc: 'Благодарственное письмо за подготовку победителей III Региональной научно-практической студенческой конференции «Профессионал XXI века: настоящее, будущее» по направлению «Профессии и технологии настоящего и будущего», ДПО Томской области от 2022г..' },
        { src: 'appreciations/appreciation_2.jpg', desc: 'Благодарственное письмо за участие в IX Региональной научно-практической студенческой конференции «Безопасность человека в информационном пространстве » в качестве эксперта, ДПО Томской области от 2021г.' },
        { src: 'appreciations/appreciation_4.jpeg', desc: 'Благодарственное письмо за организацию и проведение III Регионального форума «Современная цифровая образовательная среда: лучшие практики профессиональных образовательных организаций», ДПО Томской области, 2022г.' },
        { src: 'appreciations/appreciation_6.jpeg', desc: 'Благодарственное письмо за участие в проведение Всероссийских проверочных работ для обучающихся по образовательным программам среднего профессионального образования в роли организатора в аудитории, ФГБУ "ФИОКО" , 2021г.' },
    ]]
]);
// Все разделы
const chapters = [
    { name: 'Дипломы', id: 'diplomas' },
    { name: 'Сертификаты', id: 'certificates' },
    { name: 'Повышение квалификации', id: 'qualifications' },
    { name: 'Благодарности', id: 'appreciations' },
]
// Элементы текущего раздела
let currentChapterItems = ref()

const changeChapterItems = () => {
    if (store.state.portfolio.activeChapter) {
        currentChapterItems.value = items.get(store.state.portfolio.activeChapter)
    }
}
changeChapterItems()

const changeChapter = (id) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    store.commit('portfolio/changeActiveChapter', id)
    changeChapterItems()
}
</script>

<style scoped lang="scss">
.portfolio {
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding: 40px 15px;

    @include _700 {
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        min-height: calc(100vh - 200px);
        max-width: calc(100% - 300px);
        width: 100%;
        padding: 30px;
        gap: 15px;
        border-radius: 10px;
        background-color: #eee;

        @include _700 {
            max-width: 100%;
        }
    }

    &__item:nth-child(2n) {
        flex-direction: row-reverse;
    }

    &__item {
        display: flex;
        justify-content: center;
        gap: 50px;
        align-items: center;
        margin-bottom: 20px;

        img {
            width: 30%;
        }

        p {
            width: 30%;
            text-align: justify;
            text-indent: 10%;
        }
    }

    &__cap {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
