import axios from 'axios'

const baseURL = 'http://api.github.com'

/**
 * Makes an HTTP request using Axios.
 *
 * @param {Object} options - The options for the HTTP request.
 * @param {string} options.url - The URL for the HTTP request.
 * @param {string} [options.method='get'] - The HTTP method for the request (default is 'get').
 * @param {Object} [options.data={}] - The data to be sent with the request (default is an empty object).
 * @param {Object} [options.headers={}] - Additional headers to be included in the request (default is an empty object).
 * @returns {Promise} A promise that resolves to the Axios response object.
 * @throws {Error} If the request encounters an error.
 *
 * @example
 * const requestData = {
 *   url: 'https://api.example.com/data',
 *   method: 'post',
 *   data: { key: 'value' },
 *   headers: { 'Content-Type': 'application/json' }
 * };
 *
 * makeRequest(requestData)
 *   .then(response => {
 *     console.log('Response:', response);
 *   })
 *   .catch(error => {
 *     console.error('Error:', error);
 *   });
 */
export const makeRequest = ({
  url,
  method = 'get',
  data = {},
  headers = {}
}) => axios({
  url, method, data, baseURL, headers
})
