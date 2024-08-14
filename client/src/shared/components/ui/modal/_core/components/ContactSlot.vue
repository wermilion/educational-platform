<template>
  <div class="gap-6 px-12 py-14">
    <div class="flex flex-col justify-center items-center gap-2.5">
      <h5 class="text-2xl">{{ data.title }}</h5>
      <p class="w-[360px] text-lg text-center">{{ data.description }}</p>
      <button class="absolute top-5 right-5 w-4 h-4 hover:scale-110 transition duration-300 cursor-pointer"
              @click="modalStore.close()">
        <i class="fa-solid fa-xmark text-primary text-xl"></i>
      </button>
    </div>
    <form class="flex flex-col gap-8 w-full" type="submit" @submit.prevent.stop="submit">
      <template v-for="item in data.formData" :key="item.id">
        <Input
            v-if="item.type === InputTypesEnum.INPUT"
            :label="item.label"
            :id="item.id"
            :error="item.error"
            :value="item.value"
            @change="input"
        />
        <Textarea
            v-if="item.type === InputTypesEnum.TEXTAREA"
            :label="item.label"
            :id="item.id"
            :error="item.error"
            :value="item.value"
            @change="input"
            class="h-28"
        />
      </template>
      <ButtonComponent text="Отправить"/>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useModalStore} from "@/app/store/modal";
import {useTelegramStore} from "@/app/store/telegram";

import {inputValidation} from "@/utils/inputs/InputValidation.ts";
import {prepareFormData} from "@/utils/inputs/prepareFormData.ts";

import {InputTypesEnum} from "@components/ui/modal/_core/enums/InputTypes.ts";
import {FormItemType, FormModalType} from "@components/ui/modal/_core/types/FormModal.ts";

import ButtonComponent from "@components/ui/button/ButtonComponent.vue";
import Input from "@components/ui/inputs/input/UIInput.vue";
import Textarea from "@components/ui/inputs/textarea/UITextarea.vue";

const props = defineProps<{ data: FormModalType }>();
const modalStore = useModalStore();
const telegramStore = useTelegramStore();

function input(data: FormItemType) {
  inputValidation(data, props.data.formData);
}

async function submit() {
  const formData = prepareFormData(props.data.formData);

  if (formData) {
    telegramStore.postApplications(formData);
  }

}
</script>