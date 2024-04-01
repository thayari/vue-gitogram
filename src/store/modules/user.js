import * as api from '../../api'

export const user = {
  namespaced: true,
  state: {
    data: {},
    userRepos: {}
  },
  mutations: {
    setUser (state, payload) {
      state.data = payload
    },

    setRepos (state, payload) {
      state.userRepos = payload
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
    },

    async fetchUserRepos ({ commit }) {
      try {
        const { data } = await api.user.getUserRepos()

        if (data) {
          commit('setRepos', data)
        } else {
          throw new Error('Invalid repositories data')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
