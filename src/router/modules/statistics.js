/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:26:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\router\modules\statistics.js
 */
const statisticsRouter = {
  path: '/statistics',
  component: () => import('@/layout'),
  name: 'statistics',
  redirect: 'noRedirect',
  meta: {
    title: '数据统计',
    icon: 'icondata'
  },
  children: [
    // 数据统计
    {
      path: '/userStatistics',
      component: () => import(/* webpackChunkName: "statistics" */ '@/views/statistics/userStatistics'),
      name: 'userStatistics',
      meta: { title: '用户统计', noCache: true }
    }
  ]
}

export default statisticsRouter
