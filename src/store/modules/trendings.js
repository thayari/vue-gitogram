import * as api from '../../api'

export const trendings = {
  namespaced: true,
  state: {
    data: {},
    loading: false,
    error: ''
  },
  mutations: {
    setItemsData (state, payload) {
      state.data = payload
    },
    setItemsLoading (state, payload) {
      state.loading = payload
    },
    setItemsError (state, payload) {
      state.error = payload
    },
    setReadme (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }

        return repo
      })
    }
  },
  actions: {
    async fetchTrendings (state) {
      state.commit('setItemsLoading', true)
      try {
        const { data } = await api.trendings.getTrendings()

        this.items = data.items

        state.commit('setItemsData', data.items)
        state.commit('setItemsError', '')
      } catch (error) {
        state.commit('setItemsError', error)
      } finally {
        state.commit('setItemsLoading', false)
      }
    }
  }
}
