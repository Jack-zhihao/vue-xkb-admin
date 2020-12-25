/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:22:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\router\modules\dailyRecordManage.js
 */
const dailyRecordManageRouter = {
  path: '/dailyRecordManage',
  component: () => import('@/layout'),
  name: 'dailyRecordManage',
  redirect: 'noRedirect',
  meta: {
    title: '日志管理',
    icon: 'iconfeedback'
  },
  children: [
    // 日志管理
    {
      path: '/msgSendRule',
      component: () => import(/* webpackChunkName: "dailyRecordManage" */ '@/views/dailyRecordManage/msgSendRule/msgSendRule'),
      name: 'msgSendRule',
      meta: { title: '消息推送规则', noCache: true }
    }
  ]
}

export default dailyRecordManageRouter
