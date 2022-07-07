import axios from 'axios'
import router from '@router/index'
import store from '@store/index'
import { Message } from 'element-ui'

// 创建一个主要的请求体
const fetch = axios.create({
  // 设置请求地址前默认的url地址
  baseURL: '/api',
  // 设置超时时间
  timeout: 10000
})

// 请求拦截器
fetch.interceptors.request.use(
  config => {
    // token验证
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  error => {
    Message.error(error)
    return Promise.reject(new Error(error))
  }
)

// 响应拦截器
fetch.interceptors.response.use(
  response => {
    const { code, message, data } = response.data
    if (code === 200) {
      return data
    } else if (code === 401) {
      Message.error(message)
      store.commit('user/LOGOUT')
      router.replace('/login')
      return Promise.reject(new Error(message))
    }
    return Promise.reject(new Error(message))
  },
  error => {
    Message.error(error.message)
    return Promise.reject(error)
  }
)

export default fetch
