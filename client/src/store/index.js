import { createStore } from 'vuex'
import MainData from "./modules/mainData";
import portfolio from "./modules/portfolio";

export default createStore({
  modules: {
    MainData,
    portfolio
  }
})
