import { makeRequest } from '../requests'
import env from '../../../env.js'

export const getToken = code => {
  return makeRequest({
    url: 'https://webdev-api.loftschool.com/github',
    method: 'post',
    data: {
      clientId: env.clientId,
      code,
      clientSecret: env.clientSecret
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log('Response:', response)
      return response
    })
    .catch(error => {
      throw error
    })
}
