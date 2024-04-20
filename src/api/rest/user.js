import { makeRequest } from '../requests'

/**
 * Получает данные пользователя с сервера.
 * @returns {Promise<object>} Промис, который разрешается данными пользователя.
 * @throws {Error} Если произошла ошибка при запросе данных пользователя.
 */
export const getUserData = () => {
  return makeRequest({
    url: '/user'
  })
    .then(response => {
      console.log('getUserData response:', response)
      return response
    })
    .catch(error => {
      throw error
    })
}

/**
 * Получает репозитории пользователя с сервера.
 * @param {string} fullName - Полное имя пользователя.
 * @returns {Promise<object[]>} Промис, который разрешается массивом репозиториев пользователя.
 * @throws {Error} Если произошла ошибка при запросе репозиториев пользователя.
 */
export const getUserRepos = fullName => {
  return makeRequest({
    url: `/users/${fullName}/repos`
  })
    .then(response => {
      console.log('getUserRepos response:', response)
      return response
    })
    .catch(error => {
      throw error
    })
}
