import * as api from '../../api'

export const starred = {
  namespaced: true,
  state: {
    data: {},
    loading: false
  },
  mutations: {
    setStarredRepos (state, payload) {
      state.data = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    async fetchStarred ({ commit }) {
      commit('setLoading', true)
      try {
        const { data } = await api.starred.getStarredRepos()

        commit('setStarredRepos', data)
      } catch (error) {
        console.error(error)
      } finally {
        commit('setLoading', false)
      }
    }
  }
}
