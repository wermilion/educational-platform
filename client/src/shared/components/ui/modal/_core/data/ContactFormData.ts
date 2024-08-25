import {FormModalType} from "../types/FormModal.ts";
import {InputTypesEnum} from "@components/ui/modal/_core/enums/InputTypes.ts";

export const contactFormData: FormModalType = {
    name: "Связаться со мной",
    description: "Если есть вопросы - заполните форму, и я обязательно отвечу!",
    formData: [
        {
            type: InputTypesEnum.INPUT,
            label: 'ФИО',
            id: 'fullName',
            value: '',
            error: '',
            regex: /^[\wа-яА-ЯёЁ\s().-]{2,256}$/,
            required: true
        },
        {
            type: InputTypesEnum.INPUT,
            label: 'Email',
            id: 'email',
            value: '',
            error: '',
            regex: /^(?=.{1,50}@)[a-zA-Z0-9]([a-zA-Z0-9._-]?[a-zA-Z0-9])*@[a-zA-Z0-9]{2,15}\.[a-zA-Z0-9]{2,15}$/,
            required: true
        },
        {
            id: 'comment',
            type: InputTypesEnum.TEXTAREA,
            label: 'Комментарий',
            value: '',
            error: '',
            regex: /^[\wа-яА-ЯёЁ\s().-]{2,1000}$/,
            required: true
        }
    ],
}