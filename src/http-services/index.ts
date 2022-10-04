import { createAxiosInstance } from './interceptors'
import { AxiosRequestConfig } from 'axios'

export const axiosClient = () => {
  const acceptLang = 'en-US'
  //const token = localStorage.getItem(TOKEN);
  //const authHeader = token ? `Bearer ${token}` : '';

  const client = createAxiosInstance({
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': acceptLang,
      //"Authorization": authHeader
    },
  })

  return {
    get: (url: string, options: AxiosRequestConfig = {}) => client.get(url, { ...options }),
    post: (url: string, data: any, options: AxiosRequestConfig = {}) =>
      client.post(url, data, { ...options }),
    put: (url: string, data: any, options: AxiosRequestConfig = {}) =>
      client.put(url, data, { ...options }),
    delete: (url: string, options: AxiosRequestConfig = {}) => client.delete(url, { ...options }),
  }
}

export { default as END_POINT } from './end-points'
