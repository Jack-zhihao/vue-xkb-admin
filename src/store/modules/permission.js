/*
 * @Author: your name
 * @Date: 2019-11-28 17:21:38
 * @LastEditTime: 2020-06-30 15:13:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\store\modules\permission.js
 */
import { constantRoutes } from '@/router'

const asyncRoutes = []

const state = {
  routes: constantRoutes,
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

/**
 * 使用roles参数，筛选当前权限路由
 * @param roles
 * @param route
 */
function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 筛选异步路由
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes (routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const actions = {
  generateRoutes ({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },
  SET_Routes (context, value) {
    context.commit('SET_ROUTES', value)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
