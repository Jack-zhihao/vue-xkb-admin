/*
 * @Author: zhihao
 * @Date: 2020-01-20 09:35:30
 * @LastEditTime: 2020-07-03 10:18:08
 * @LastEditors: Please set LastEditors
 * @Description: Axios 请求封装
 * @FilePath: \app\src\utils\request.js
 */
import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

/**
 * @description: 封装axios请求方法
 * @param {
 *   baseURL: 请求地址
 * }
 * @return: service
 */
function createAxios (baseURL) {
  /**
   * @description: 拦截器创建
   */
  const service = axios.create({
    baseURL: baseURL || process.env.VUE_APP_BASE_API,
    timeout: 5000
  })

  /**
   * @description: 拦截器请求
   */
  service.interceptors.request.use(
    config => {
      if (store.getters.token) {
        config.headers['X-Token'] = getToken()
      }
      return config
    },
    error => {
      window.console.log(error)
      return Promise.reject(error)
    }
  )

  /**
   * @description: 拦截器响应
   */
  service.interceptors.response.use(
    response => {
      const res = response.data

      // 返回状态码不等于200的判断
      if (res.code !== 200) {
        Message({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        return res
      }
    },

    // 请求超时
    error => {
      window.console.log('err' + error)
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )
  return service
}

/**
 * @description: 方法调用-> 创建请求
 */
const service = createAxios()

export default service
