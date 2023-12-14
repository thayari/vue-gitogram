import { createStore } from 'vuex'
import { trendings } from './modules/trendings'
import { user } from './modules/user'
import { starred } from './modules/starred'

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
    trendings,
    user,
    starred
  }
})
