/*
 * @Author: z-h
 * @Date: 2020-06-11 11:33:08
 * @LastEditTime: 2020-06-30 15:19:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin\src\store\modules\userinfo.js
 */

const state = {
  baseInfo: JSON.parse(localStorage.getItem('baseInfo')) || {}
}

const mutations = {
  baseInfo: (state, value) => {
    state.baseInfo = { ...state.baseInfo, ...value }
    localStorage.setItem('baseInfo', JSON.stringify({ ...state.baseInfo }))
  }
}

const actions = {
  setBaseInfo (context, value) {
    context.commit('baseInfo', value)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
