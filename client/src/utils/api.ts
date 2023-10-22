import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
})

export const getAuthorizedApi = (token: string) => {
  const newApi = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
      Authorization: token,
    },
  })

  return newApi
}
