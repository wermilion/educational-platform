import {defineStore} from "pinia";
import {Ref, ref} from "vue";

import {disableScroll} from "@/utils/disableScroll.ts";
import {enableScroll} from "@/utils/enableScroll.ts";

export const useMobileStore = defineStore('mobile', () => {
    const isMobile: Ref<boolean> = ref(false);
    const burgerMenuIsVisible: Ref<boolean> = ref(false);

    function setIsMobile() {
        isMobile.value = window.innerWidth < 801;
    }
    function toggleMobileMenu() {
        burgerMenuIsVisible.value = !burgerMenuIsVisible.value;

        burgerMenuIsVisible.value ? disableScroll() : enableScroll();
    }
    return { isMobile, burgerMenuIsVisible, setIsMobile, toggleMobileMenu };
})