import { makeRequest } from '../requests'

export const getReadme = (fullName) => {
  return makeRequest({
    url: `/repos/${fullName}/readme`,
    headers: {
      Accept: 'application/vnd.github.v3.html+json'
    }
  })
    .then(response => {
      console.log('Response:', response)
      return response
    })
    .catch(error => {
      console.error('Error:', error)
      throw error
    })
}
