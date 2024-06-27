<template>
    <BaseHeader/>
    <router-view v-slot="{ Component }">
        <transition name="page-opacity" mode="out-in">
            <component :is="Component"/>
        </transition>
    </router-view>
    <BaseFooter/>
    <transition name="fadeChange">
        <UIModal
            v-show="store.state.MainData.modal.IsVisible"
            :isVisible="store.state.MainData.modal.IsVisible"
            @closeModal="changeVisibility"
        />
    </transition>
</template>

<script setup>
import { useStore } from 'vuex';
import BaseHeader from '@/components/base/Header/BaseHeader.vue';
import BaseFooter from '@/components/base/Footer/BaseFooter.vue';
import UIModal from '@/components/ui/Modal/UIModal.vue';

const store = useStore();

const changeVisibility = () => {
    store.commit('MainData/changeModalVisibility')
}
</script>

<style lang="scss">
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
