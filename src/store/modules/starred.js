import * as api from '../../api'

export const starred = {
  namespaced: true,

  state: {
    data: {},
    loading: false
  },

  mutations: {
    /**
     * Sets the data for starred repositories.
     * @param {Object} state - The Vuex state.
     * @param {Array} payload - The payload containing information about starred repositories.
     */
    setStarredRepos (state, payload) {
      state.data = payload.map(repo => {
        repo.issues = {
          data: [],
          loading: false
        }

        return repo
      })
    },

    /**
     * Sets the loading state.
     * @param {Object} state - The Vuex state.
     * @param {boolean} payload - The loading state.
     */
    setLoading (state, payload) {
      state.loading = payload
    },

    /**
     * Sets the issues data for a specific repository.
     * @param {Object} state - The Vuex state.
     * @param {Object} payload - The payload containing repository ID and issues content.
     * @param {number} payload.id - The ID of the repository.
     * @param {Object} payload.content - The content object containing issues data and loading state.
     * @param {Array} payload.content.data - The issues data.
     * @param {boolean} payload.content.loading - The loading state for issues.
     */
    setIssues (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          return {
            ...repo,
            issues: {
              data: payload.content.data,
              loading: payload.content.loading
            }
          }
        }

        return repo
      })
    }
  },

  getters: {
    /**
     * Gets a repository by its ID.
     * @param {Object} state - The Vuex state.
     * @returns {Function} - A function that takes a repository ID and returns the corresponding repository.
     */
    getRepoById: state => id => {
      return state.data.find(item => item.id === id)
    }
  },

  actions: {
    /**
     * Fetches starred repositories from the API.
     * @param {Object} context - The Vuex action context.
     * @param {Object} context.commit - The Vuex commit function.
     */
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
    },

    /**
     * Fetches issues for a specific repository from the API.
     * @param {Object} context - The Vuex action context.
     * @param {Object} context.commit - The Vuex commit function.
     * @param {Object} context.getters - The Vuex getters object.
     * @param {Object} payload - The payload containing repository ID and full name.
     * @param {number} payload.id - The ID of the repository.
     * @param {string} payload.fullName - The full name of the repository.
     */
    async fetchIssues ({ commit, getters }, { id, fullName }) {
      const repo = getters.getRepoById(id)
      if (repo.issues.data.length) return

      let content = {
        data: [],
        loading: true
      }

      commit('setIssues', { id, content })

      const { data } = await api.issues.getIssues(fullName)

      content = {
        data,
        loading: false
      }

      commit('setIssues', { id, content })
    }
  }
}
