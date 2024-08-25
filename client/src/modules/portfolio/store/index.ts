import {defineStore} from "pinia";
import {onMounted, Ref, ref} from "vue";
import {PortfolioChaptersEnum} from "@/modules/portfolio/enums/PortfolioChapters.ts";
import {DocsType} from "@/modules/portfolio/types/DocsTypes.ts";

export const usePortfolioStore = defineStore('portfolio', () => {
    const currentChapter: Ref<number> = ref(PortfolioChaptersEnum.DIPLOMA);
    const currentDocs: Ref<DocsType[]> = ref([
        { src: 'images/portfolio/certificates/certificate_1.jpg', description: 'Диплом 2022г. Лауреат премии Томской области в сфере образования и науки, здравоохранения и культуры. За высокие достижения в сфере образования и науки, оказывающие эффективное влияние на развитие экономики и социальной сферы Томской области.' },
        { src: 'images/portfolio/certificates/certificate_1.jpg', description: 'Диплом 2022г. Лауреат премии Томской области в сфере образования и науки, здравоохранения и культуры. За высокие достижения в сфере образования и науки, оказывающие эффективное влияние на развитие экономики и социальной сферы Томской области.' },
        { src: 'images/portfolio/certificates/certificate_1.jpg', description: 'Диплом 2022г. Лауреат премии Томской области в сфере образования и науки, здравоохранения и культуры. За высокие достижения в сфере образования и науки, оказывающие эффективное влияние на развитие экономики и социальной сферы Томской области.' },
        { src: 'images/portfolio/certificates/certificate_1.jpg', description: 'Диплом 2022г. Лауреат премии Томской области в сфере образования и науки, здравоохранения и культуры. За высокие достижения в сфере образования и науки, оказывающие эффективное влияние на развитие экономики и социальной сферы Томской области.' },
        { src: 'images/portfolio/certificates/certificate_1.jpg', description: 'Диплом 2022г. Лауреат премии Томской области в сфере образования и науки, здравоохранения и культуры. За высокие достижения в сфере образования и науки, оказывающие эффективное влияние на развитие экономики и социальной сферы Томской области.' }
    ]);


    // TODO: add request
    function changeChapter(chapterId: number): void {
        if (currentChapter.value !== chapterId) {
            currentChapter.value = chapterId;
        }
    }

    onMounted((): void => {
        changeChapter(PortfolioChaptersEnum.DIPLOMA)
    })

    return {currentChapter, currentDocs, changeChapter}
})