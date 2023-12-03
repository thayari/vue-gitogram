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
      state.items.data = payload
    },
    setReadmeLoading (state, payload) {
      state.items.loading = payload
    },
    setReadmeError (state, payload) {
      state.items.error = payload
    }
  },
  actions: {
    async fetchReadme (state, { fullName }) {
      state.commit('setReadmeLoading', true)
      try {
        const { data } = await api.readme.getReadme(fullName)

        this.items = data.items

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
