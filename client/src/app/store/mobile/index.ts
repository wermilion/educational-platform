import {defineStore} from "pinia";
import {Ref, ref} from "vue";

import {disableScroll} from "@/utils/disableScroll.ts";
import {enableScroll} from "@/utils/enableScroll.ts";

export const useMobileStore = defineStore('mobile', () => {
    const isMobile: Ref<boolean> = ref(false);
    const isTablet: Ref<boolean> = ref(false);
    const burgerMenuIsVisible: Ref<boolean> = ref(false);

    function setSize(): void {
        isMobile.value = window.innerWidth < 801;
        isTablet.value = window.innerWidth < 1025;
    }
    function toggleMobileMenu(): void {
        burgerMenuIsVisible.value = !burgerMenuIsVisible.value;

        burgerMenuIsVisible.value ? disableScroll() : enableScroll();
    }
    return { isMobile, isTablet, burgerMenuIsVisible, setSize, toggleMobileMenu };
})