import { makeRequest } from '../requests'

export const getStarredRepos = limit => {
  const params = new URLSearchParams()
  if (limit) {
    params.append('per_page', limit)
  }

  return makeRequest({
    url: `/user/starred?${params}`
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
