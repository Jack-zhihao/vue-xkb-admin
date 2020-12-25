/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:23:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\router\modules\financeManage.js
 */
const financeManageRouter = {
  path: '/financeManage',
  component: () => import('@/layout'),
  name: 'financeManage',
  redirect: 'noRedirect',
  meta: {
    title: '财务管理',
    icon: 'iconwallet'
  },
  children: [
    {
      path: '/financeList',
      component: () => import(/* webpackChunkName: "financeManage" */ '@/views/financeManage/financeList/financeList'),
      name: 'financeList',
      meta: { title: '财务报表', noCache: true }
    },
    {
      path: '/invoiceHandle',
      component: () => import(/* webpackChunkName: "financeManage" */ '@/views/financeManage/invoiceHandle/invoiceHandle'),
      name: 'invoiceHandle',
      meta: { title: '发票处理', noCache: true }
    },
    {
      path: '/invoiceHandleDetail',
      component: () => import(/* webpackChunkName: "financeManage" */ '@/views/financeManage/invoiceHandle/invoiceHandleDetail'),
      name: 'invoiceHandleDetail',
      hidden: true,
      meta: { title: '发票处理-详情', noCache: true }
    }
  ]
}

export default financeManageRouter
