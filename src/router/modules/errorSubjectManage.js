/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:23:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\router\modules\errorSubjectManage.js
 */
const errorSubjectManageRouter = {
  path: '/errorSubjectManage',
  component: () => import('@/layout'),
  name: 'errorSubjectManage',
  redirect: 'noRedirect',
  meta: {
    title: '错题本管理',
    icon: 'icontopic-book'
  },
  children: [
    // 命题猜想分类
    {
      path: '/errorSubjectClass',
      component: () => import(/* webpackChunkName: "errorSubjectManage" */ '@/views/errorSubjectManage/errorSubjectClass/errorSubjectClass'),
      name: 'errorSubjectClass',
      meta: { title: '错题本分类', noCache: true }
    },
    {
      path: '/errorSubjectReason',
      component: () => import(/* webpackChunkName: "errorSubjectManage" */ '@/views/errorSubjectManage/errorSubjectReason/errorSubjectReason'),
      name: 'errorSubjectReason',
      meta: { title: '错题原因', noCache: true }
    },
    {
      path: '/errorSubjectReasonAdd',
      component: () => import(/* webpackChunkName: "errorSubjectManage" */ '@/views/errorSubjectManage/errorSubjectReason/errorSubjectReasonAdd'),
      name: 'errorSubjectReasonAdd',
      hidden: true,
      meta: { title: '错题原因-添加', noCache: true }
    },
    {
      path: '/errorSubjectList',
      component: () => import(/* webpackChunkName: "errorSubjectManage" */ '@/views/errorSubjectManage/errorSubjectList/errorSubjectList'),
      name: 'errorSubjectList',
      meta: { title: '错题列表', noCache: true }
    }
  ]
}

export default errorSubjectManageRouter
