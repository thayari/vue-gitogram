import { makeRequest } from '../requests'

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

export const getUserRepos = () => {
  return makeRequest({
    url: '/usr/repos'
  })
    .then(response => {
      console.log('getUserRepos response:', response)
      return response
    })
    .catch(error => {
      throw error
    })
}
