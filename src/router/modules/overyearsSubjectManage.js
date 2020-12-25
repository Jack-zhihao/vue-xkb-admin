/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:25:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\router\modules\overyearsSubjectManage.js
 */
const overyearsSubjectManageRouter = {
  path: '/overyearsSubjectManage',
  component: () => import('@/layout'),
  name: 'overyearsSubjectManage',
  redirect: 'noRedirect',
  meta: {
    title: '历年真题管理',
    icon: 'iconpaper'
  },
  children: [
    // 命题猜想分类
    {
      path: '/overyearsSubjectClass',
      component: () => import(/* webpackChunkName: "overyearsSubjectManage" */ '@/views/overyearsSubjectManage/overyearsSubjectClass/overyearsSubjectClass'),
      name: 'overyearsSubjectClass',
      meta: { title: '历年真题分类', noCache: true }
    },
    {
      path: '/overyearSubjectList',
      component: () => import(/* webpackChunkName: "overyearsSubjectManage" */ '@/views/overyearsSubjectManage/overyearSubjectList/overyearSubjectList'),
      name: 'overyearSubjectList',
      meta: { title: '历年真题列表', noCache: true }
    },
    {
      path: '/overyearSubjectListDetail',
      component: () => import(/* webpackChunkName: "overyearsSubjectManage" */ '@/views/overyearsSubjectManage/overyearSubjectList/overyearSubjectListDetail'),
      name: 'overyearSubjectListDetail',
      hidden: true,
      meta: { title: '历年真题列表-详情', noCache: true }
    }
  ]
}

export default overyearsSubjectManageRouter
