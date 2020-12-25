/*
 * @Author: your name
 * @Date: 2020-01-19 12:16:53
 * @LastEditTime: 2020-06-30 15:26:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\router\modules\teachterSettled.js
 */

const teachterSettledRouter = {
  path: '/teachterSettled',
  component: () => import('@/layout'),
  name: 'teachterSettled_layout',
  redirect: 'noRedirect',
  meta: {
    title: '教师入驻',
    icon: 'iconcopy'
  },
  children: [
    {
      path: '/teachterSettled',
      component: () => import(/* webpackChunkName: "teachterSettled_layout" */ '@/views/teachterSettled/teachterSettled'),
      name: 'teachterSettled',
      meta: { title: '教师入驻', noCache: true }
    },
    {
      path: '/teachterSettledDetail',
      component: () => import(/* webpackChunkName: "teachterSettled_layout" */ '@/views/teachterSettled/teachterSettledDetail'),
      name: 'teachterSettledDetail',
      hidden: true,
      meta: { title: '教师入驻-详情', noCache: true }
    }
  ]
}

export default teachterSettledRouter
