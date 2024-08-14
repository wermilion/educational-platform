import {defineStore} from "pinia";
import {Ref, ref} from "vue";

import {FormModalType} from "@components/ui/modal/_core/types/FormModal.ts";
import {contactFormData} from "@components/ui/modal/_core/data/ContactFormData.ts";

import {enableScroll} from "@/utils/enableScroll.ts";
import {disableScroll} from "@/utils/disableScroll.ts";
import {resetFields} from "@/utils/inputs/resetFields.ts";


export const useModalStore = defineStore('modal', () => {
    const isVisible: Ref<boolean> = ref(false);
    const modalData: Ref<FormModalType> = ref(contactFormData);

    function open() {
        disableScroll();
        isVisible.value = true;
    }
    function close() {
        isVisible.value = false;
        enableScroll();
        resetFields(contactFormData.formData)
    }

    return { isVisible, modalData, open, close };
})