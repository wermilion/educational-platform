<template>
    <div class="modal">
        <div class="modal-overlay" @click="closeModal"></div>
        <div class="modal-container">
            <h2>Связаться со мной</h2>
            <p>Если есть вопросы - заполните форму, и я обязательно отвечу!</p>
            <button class="close-modal" @click="closeModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.0003 10.5868L7.04996 5.63647L5.63574 7.05069L10.5861 12.001L5.63695 16.9502L7.05116 18.3644L12.0003 13.4153L16.9495 18.3644L18.3637 16.9502L13.4145 12.001L18.3649 7.05069L16.9507 5.63647L12.0003 10.5868Z" fill="white"/>
                </svg>
            </button>
            <form @submit.prevent.stop="postData()">
                <template
                    v-for="(item, index) in formData"
                    :key="index"
                >
                    <UIInput
                        v-if="item.type === 'input'"
                        :input="item"
                        @change="input"
                    />
                    <UITextarea
                        v-else
                        :textarea="item"
                        @change="input"
                    />
                </template>
                <UIButton
                    type="submit"
                    label="Отправить"
                />
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'
import { inputValidation, postFormData } from "../../../utils/form";
import {useStore} from "vuex";
import UIInput from "../Inputs/Input/UIInput";
import UITextarea from "../Inputs/Textarea/UITextarea";
import UIButton from "../Button/UIButton";

// eslint-disable-next-line
const emit = defineEmits(['closeModal'])
const store = useStore();

const formData = reactive([
    {
        type: 'input',
        label: 'ФИО',
        id: 'fullName',
        value: '',
        error: '',
        regex: /^[\wа-яА-ЯёЁ\s().-]{2,256}$/,
        required: true
    },
    {
        type: 'input',
        label: 'Email',
        id: 'email',
        value: '',
        error: '',
        regex: /^(?=.{1,50}@)[a-zA-Z0-9]([a-zA-Z0-9._-]?[a-zA-Z0-9])*@[a-zA-Z0-9]{2,15}\.[a-zA-Z0-9]{2,15}$/,
        required: true
    },
    {
        id: 'comment',
        type: 'textarea',
        label: 'Комментарий',
        value: '',
        error: '',
        regex: /^[\wа-яА-ЯёЁ\s().-]{0,1000}$/,
        required: true
    }
])

function input(data) {
    inputValidation(data, formData)
}
function postData() {
    const data = postFormData(formData)
    if (data) {
        store.dispatch('MainData/postApplications', data)
    }
}
const closeModal = () => {
    emit('closeModal')
}
</script>

<style scoped lang="scss">
.modal {
    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 1000;
    }

    &-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        width: 840px;
        padding: 30px 60px;
        background-color: white;
        border-radius: 20px;
        z-index: 1001;
        text-align: center;

        @include _1024 {
            width: 90%;
        }

        @include _700 {
            padding: 15px 30px;
        }

        button.close-modal {
            position: absolute;
            right: 20px;
            top: 20px;
            width: 32px;
            height: 32px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            transition: .6s all;

            @include _700 {
                right: 10px;
                top: 10px;
                width: 20px;
                height: 20px;
            }

            &:hover {
                transform: rotate(180deg);
            }

            svg {
                width: 32px;
                height: 32px;

                @include _700 {
                    width: 20px;
                    height: 20px;
                }

                path {
                    fill: $dark-primary-secondary;
                }
            }
        }

        form {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
            gap: 20px 0;

            @include _700 {
                flex-direction: column;
            }

            .input-box {
                width: 45%;

                @include _700 {
                    width: 100%;
                }
            }

            .textarea-box {
                width: 100%;
                height: 200px;
            }

            button {
                width: 100%;
                margin-top: 16px;
            }
        }
    }
}
</style>
