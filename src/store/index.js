import { createStore } from 'vuex'
import { repoReadme } from './modules/repoReadme'
import * as api from '../api'

export default createStore({
  state: {
    items: {
      data: {},
      loading: false,
      error: ''
    }
  },
  getters: {

  },
  mutations: {
    setItemsData (state, payload) {
      state.items.data = payload
    },
    setItemsLoading (state, payload) {
      state.items.loading = payload
    },
    setItemsError (state, payload) {
      state.items.error = payload
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
  },
  modules: {
    repoReadme
  }
})
