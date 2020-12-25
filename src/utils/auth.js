/*
 * @Author: zhihao
 * @Date: 2020-01-20 10:25:11
 * @LastEditTime: 2020-06-30 14:54:16
 * @LastEditors: Please set LastEditors
 * @Description: 此js文件用于获取系统用户数据；权限路由等
 * @FilePath: \app\src\utils\auth.js
 */

const TokenKey = 'Admin-Token'
/**
 * @description: 获取token
 */
export const getToken = () => window.localStorage.getItem(TokenKey)

/**
 * @description: 存储token
 */
export const setToken = (token) => window.localStorage.setItem(TokenKey, token)

/**
 * @description: 删除token
 */
export const removeToken = () => window.localStorage.removeItem(TokenKey)

/**
 * @description: 获取权限路由
 */
export const getAuthRouter = () => JSON.parse(window.localStorage.getItem('AUTH_ROUTER'))

/**
 * @description: 存储权限路由
 */
export const setAuthRouter = (data) => JSON.stringify(window.localStorage.setItem('AUTH_ROUTER', data))

/**
 * @description: 删除权限路由
 */
export const removeAuthRouter = () => {
  window.localStorage.removeItem('AUTH_ROUTER')
}

/**
 * @description: 根据返回权限路由结构，筛选本地路由
 */
export const filterAuthRouter = (tempRouter, devRouter) => {
  window.console.log(tempRouter)
  return devRouter
}
