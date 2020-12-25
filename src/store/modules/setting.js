/*
 * @Author: your name
 * @Date: 2019-11-29 12:19:45
 * @LastEditTime: 2020-06-30 15:14:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\store\modules\setting.js
 */

const state = {
  // 控制侧边栏展开
  isCollapse: false,

  // 判断页面是否刷新
  initFirstView: false
}

const mutations = {
  SET_Collapse (state, value) {
    state.isCollapse = value
  },
  SET_FirstView (state, value) {
    state.initFirstView = value
  }
}

const actions = {
  SET_Collapse (context, value) {
    context.commit('SET_Collapse', value)
  },
  SET_FirstView (context, value) {
    context.commit('SET_FirstView', value)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
