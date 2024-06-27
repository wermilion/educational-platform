const portfolio = {
  namespaced: true,
  state: {
    activeChapter: 'diplomas'
  },
  mutations: {
    changeActiveChapter(state, id) {
      state.activeChapter = id
    }
  }
}
export default portfolio
