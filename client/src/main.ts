import './main.scss';
import App from './App.vue';
import {createApp} from 'vue';
import router from "@/router/index.ts";
import {createPinia} from "pinia";
import {DefaultApolloClient} from "@vue/apollo-composable";
import {apolloClient} from "@/apollo/apolloClient.ts";

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .provide(DefaultApolloClient, apolloClient)
    .mount('#app');