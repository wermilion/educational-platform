import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {scrollToTop} from "./utils/route/scrollToTop";

// Используйте хук beforeRouteUpdate для всех маршрутов
router.beforeEach(scrollToTop);

createApp(App).use(store).use(router).mount('#app')
