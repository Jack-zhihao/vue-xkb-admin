/*
 * @Author: zhihao
 * @Date: 2019-11-28 17:23:24
 * @LastEditTime: 2020-06-30 15:11:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\store\getters.js
 */
const getters = {
  permission_routes: state => state.permission.routes,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  initFirstView: state => state.setting.initFirstView
}

export default getters
