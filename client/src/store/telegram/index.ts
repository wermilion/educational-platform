import {defineStore} from "pinia";
import {useModalStore} from "@/store/modal";

export const useTelegramStore = defineStore('telegram', () => {
    const modalStore = useModalStore();

    const token: string = '6818919536:AAFipsVhoWRiBUHnZxi91-e-1lV8Mm_ekTM';
    const chatId: string = '-1002122463156';

    function postApplications(data: Record<string, string>): void {
        const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;
        const params = {
            chat_id: chatId,
            text: `ФИО: ${data.fullName}; \nemail: ${data.email}; \nКомментарий: ${data.comment};`,
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(params),
        };

        fetch(apiUrl, requestOptions)
            .then(() => modalStore.close())
            .catch(error => console.error(error));
    }

    return { token, chatId, postApplications }
})