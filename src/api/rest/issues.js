import { makeRequest } from '../requests'

export const getIssues = (fullName) => {
  return makeRequest({
    url: `/repos/${fullName}/issues`
  })
    .then(response => {
      console.log('getIssues response:', response)
      return response
    })
    .catch(error => {
      console.error('Error:', error)
    })
}
