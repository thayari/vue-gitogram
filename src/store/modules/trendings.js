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
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
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
  getters: {
    getRepoById: state => id => {
      return state.data.find(item => item.id === id)
    }
  },
  actions: {
    async fetchTrendings (state) {
      state.commit('setLoading', true)
      try {
        const { data } = await api.trendings.getTrendings()

        this.data = data.items

        state.commit('setItemsData', data.items)
        state.commit('setError', '')
      } catch (error) {
        state.commit('setError', error)
      } finally {
        state.commit('setLoading', false)
      }
    },
    async fetchReadme (state, { id, fullName }) {
      const currentRepo = state.getters.getRepoById(id)
      if (currentRepo.readme) return

      state.commit('setLoading', true)
      try {
        const { data } = await api.readme.getReadme(fullName)

        state.commit('setReadme', { id, content: data })
        state.commit('setError', '')
      } catch (error) {
        state.commit('setReadme', { id, content: '' })
        state.commit('setError', error)
      } finally {
        state.commit('setLoading', false)
      }
    }
  }
}
