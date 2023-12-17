import { createStore } from 'vuex'
import { trendings } from './modules/trendings'
import { user } from './modules/user'
import { starred } from './modules/starred'

export default createStore({
  state: {
    currentSlide: 0
  },
  getters: {
    getStarredTrendings (state) {
      const trendingsData = state.trendings.data
      const starredData = state.starred.data

      const modifiedTrendings = trendingsData.map(trendingsRepo => ({
        ...trendingsRepo,
        following: {
          ...(trendingsRepo.following || {}),
          status: starredData.some(starredRepo => starredRepo.id === trendingsRepo.id)
        }
      }))

      return modifiedTrendings
    }
  },
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
