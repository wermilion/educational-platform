import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import {PortfolioChaptersEnum} from "@/modules/portfolio/enums/PortfolioChapters.ts";

export const usePortfolioStore = defineStore('portfolio', () => {
    const currentChapter: Ref<string> = ref(PortfolioChaptersEnum.DIPLOMA);

    function changeChapter(chapterId: string): void {
        if (currentChapter.value === chapterId) return;

        currentChapter.value = chapterId;
    }

    return {currentChapter, changeChapter}
})