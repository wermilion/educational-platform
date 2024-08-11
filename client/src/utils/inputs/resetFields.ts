import {FormItemType} from "@components/ui/modal/_core/types/FormModal.ts";

export function resetFields (formData: FormItemType[]) {
    formData.forEach((el) => {
        el.value = "";
        el.error = "";
    })
}