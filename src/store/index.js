import { createStore } from 'vuex'
import { repoReadme } from './modules/repoReadme'
import { trendings } from './modules/trendings'

export default createStore({
  state: {
    currentSlide: 0
  },
  getters: {},
  mutations: {
    setCurrentSlide (state, payload) {
      state.currentSlide = payload
    }
  },
  actions: {
    setCurrentSlide (state, currentSlide) {
      state.commit('setCurrentSlide', currentSlide)
    }
  },
  modules: {
    repoReadme,
    trendings
  }
})
