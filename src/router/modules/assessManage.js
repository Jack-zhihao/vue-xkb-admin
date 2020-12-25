/*
 * @Author: zhihao
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:20:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\router\modules\assessManage.js
 */
const assessManageRouter = {
  path: '/assessManage',
  component: () => import('@/layout'),
  name: 'assessManage',
  redirect: 'noRedirect',
  meta: {
    title: '评测管理',
    icon: 'icondriving-range'
  },
  children: [
    {
      path: '/assessClass',
      component: () => import(/* webpackChunkName: "assessManage" */ '@/views/assessManage/assessClass/assessClass'),
      name: 'assessClass',
      meta: { title: '测评分类', noCache: true }
    },
    {
      path: '/assessList',
      component: () => import(/* webpackChunkName: "assessManage" */ '@/views/assessManage/assessList/assessList'),
      name: 'assessList',
      meta: { title: '测评列表', noCache: true }
    },
    {
      path: '/assessListDetail',
      component: () => import(/* webpackChunkName: "assessManage" */ '@/views/assessManage/assessList/assessListDetail'),
      name: 'assessListDetail',
      hidden: true,
      meta: { title: '测评列表-详情', noCache: true }
    },
    {
      path: '/assessListAdd',
      component: () => import(/* webpackChunkName: "assessManage" */ '@/views/assessManage/assessList/assessListAdd'),
      name: 'assessListAdd',
      hidden: true,
      meta: { title: '测评列表-添加', noCache: true }
    }
  ]
}

export default assessManageRouter
