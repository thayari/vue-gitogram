import * as api from '../../api'

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
    },

    async fetchUser ({ commit }) {
      try {
        const { data } = await api.user.getUserData()

        if (data) {
          commit('setUser', data)
        } else {
          throw new Error('Invalid user data')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
