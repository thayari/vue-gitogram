export const user = {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    setUser (state, payload) {
      state.data = payload
    }
  },
  actions: {
    updateUser ({ commit }, payload) {
      commit('setUser', payload)
    }
  }
}
