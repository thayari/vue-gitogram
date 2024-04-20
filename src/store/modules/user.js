/**
 * Модуль, отвечающий за управление данными пользователя.
 * @module user
 */

import * as api from '../../api'

export const user = {
  /**
   * Пространство имен модуля.
   * @namespace user
   * @property {boolean} namespaced - Указывает на то, что данный модуль является пространством имен.
   */
  namespaced: true,

  /**
   * Состояние модуля пользователя.
   * @memberof module:user
   * @property {object} state - Состояние пользователя.
   * @property {object} state.data - Данные пользователя.
   * @property {object} state.userRepos - Репозитории пользователя.
   */
  state: {
    data: {},
    userRepos: {}
  },

  /**
   * Мутации для изменения состояния пользователя.
   * @memberof module:user
   * @property {object} mutations - Мутации пользователя.
   * @property {Function} mutations.setUser - Устанавливает данные пользователя.
   * @property {Function} mutations.setRepos - Устанавливает репозитории пользователя.
   */
  mutations: {
    setUser (state, payload) {
      state.data = payload
    },

    setRepos (state, payload) {
      state.userRepos = payload
    }
  },

  /**
   * Действия для обновления данных пользователя.
   * @memberof module:user
   * @property {object} actions - Действия пользователя.
   * @property {Function} actions.updateUser - Обновляет данные пользователя.
   * @property {Function} actions.fetchUser - Получает данные пользователя с сервера.
   * @property {Function} actions.fetchUserRepos - Получает репозитории пользователя с сервера.
   */
  actions: {
    updateUser ({ commit }, payload) {
      commit('setUser', payload)
    },

    /**
     * Получает данные пользователя с сервера.
     * @memberof module:user.actions
     * @param {Function} commit - Функция для вызова мутаций.
     */
    async fetchUser ({ commit }) {
      try {
        const { data } = await api.user.getUserData()

        if (data) {
          commit('setUser', data)
        } else {
          throw new Error('Неверные данные пользователя')
        }
      } catch (error) {
        console.error(error)
      }
    },

    /**
     * Получает репозитории пользователя с сервера.
     * @memberof module:user.actions
     * @param {Function} commit - Функция для вызова мутаций.
     * @param {Object} payload - Параметры запроса.
     * @param {string} payload.fullName - Полное имя пользователя.
     */
    async fetchUserRepos ({ commit }, { fullName }) {
      try {
        const { data } = await api.user.getUserRepos(fullName)

        if (data) {
          commit('setRepos', data)
        } else {
          throw new Error('Неверные данные репозиториев')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
