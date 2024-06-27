import { enableScroll} from "../../utils/scroll/enableScroll";
import { disableScroll } from "../../utils/scroll/disableScroll";

const mainData = {
  namespaced: true,
  state: {
    modal: {
      IsVisible: false,
      message: ''
    },
    bot: {
      token: '6818919536:AAFipsVhoWRiBUHnZxi91-e-1lV8Mm_ekTM',
      chatId: '-1002122463156'
    },
    portfolio: {
      activeChapter: 'diplomas'
    }
  },
  mutations: {
    changeModalVisibility(state) {
      state.modal.IsVisible = !state.modal.IsVisible;

      state.modal.IsVisible ? disableScroll() : enableScroll()
    }
  },
  actions: {
    postApplications({ state, commit }, data) {
      const apiUrl = `https://api.telegram.org/bot${state.bot.token}/sendMessage`;
      const params = {
        chat_id: state.bot.chatId,
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
        .then(response => response.json())
        .then(data => commit('changeModalVisibility', data))
        .catch(error => console.error(error));
    }
  }
}
export default mainData
