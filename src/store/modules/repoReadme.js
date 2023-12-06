import * as api from '../../api'

export const repoReadme = {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: ''
  },
  getters: {

  },
  mutations: {
    setReadmeData (state, payload) {
      state.data = payload
    },
    setReadmeLoading (state, payload) {
      state.loading = payload
    },
    setReadmeError (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchReadme (state, { fullName }) {
      state.commit('setReadmeLoading', true)
      try {
        const { data } = await api.readme.getReadme(fullName)

        state.commit('setReadmeData', data.items)
        state.commit('setReadmeError', '')
      } catch (error) {
        state.commit('setReadmeError', error)
      } finally {
        state.commit('setReadmeLoading', false)
      }
    }
  }
}
