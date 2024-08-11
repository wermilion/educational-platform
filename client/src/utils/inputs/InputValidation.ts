// Валидация полей
import {FormItemType} from "@components/ui/modal/_core/types/FormModal.ts";

export function inputValidation(data: FormItemType, formData: FormItemType[]) {
    const formObj = formData.find((el) => el.id === data.id);

    if (formObj) {
        const validationPassed = formObj.regex.test(data.value);

        if (!validationPassed) {
            formObj.error =
                data.value.length < 2
                    ? "Поле является обязательным для заполнения"
                    : "Поле заполнено неправильно";
            formObj.value = "";
        } else {
            formObj.error = "";
            formObj.value = data.value;
        }
    }
}