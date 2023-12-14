import { makeRequest } from '../requests'

export const getStarredRepos = () => {
  return makeRequest({
    url: '/user/starred'
  })
    .then(response => {
      console.log('getStarredRepos response:', response)
      return response
    })
    .catch(error => {
      throw error
    })
}

export const starRepo = fullName => {
  return makeRequest({
    url: `/user/starred/${fullName}`,
    method: 'put'
  })
}

export const unStarRepo = fullName => {
  return makeRequest({
    url: `/user/starred/${fullName}`,
    method: 'delete'
  })
}
