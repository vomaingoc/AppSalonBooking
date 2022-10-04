import axios, { AxiosInstance } from 'axios'
import Agent from 'agentkeepalive'

const keepaliveAgent = new Agent({
  maxSockets: 40,
  maxFreeSockets: 10,
})

const defaultOptions = {
  httpAgent: keepaliveAgent,
  HttpsAgent: keepaliveAgent,
}

export const createAxiosInstance = (options: any): AxiosInstance => {
  const axiosInstance = axios.create(Object.assign({}, defaultOptions, options))
  axiosInstance.defaults.timeout = 200000

  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const response = error.response
      if (!response) {
        return
      }

      if (response.status === 401 && typeof window !== typeof undefined) {
        window.location.href = '/401'
      }

      if (response.status === 504) {
        return Promise.reject(response)
      }

      let message = response.data?.Message
      if (!message) {
      }

      return Promise.reject(response)
    },
  )
  return axiosInstance
}
