import {FormItemType} from "@components/ui/modal/_core/types/FormModal.ts";

// Отправка запроса
export function prepareFormData(formData: FormItemType[]): Record<string, string> | null  {
    let validationPassed: boolean = true;

    for (const target of formData) {
        if (target.value === "" || target.error !== "") {
            if (target.error === "") {
                target.error = "Поле является обязательным для заполнения";
            }

            validationPassed = false;
        }
    }

    if (!validationPassed) return null;

    return formData.reduce((acc: Record<string, string>, el: FormItemType) => {
        acc[el.id] = el.value;
        return acc;
    }, {});
}