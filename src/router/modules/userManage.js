/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:27:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\router\modules\userManage.js
 */
const userManageRouter = {
  path: '/userManage',
  component: () => import('@/layout'),
  name: 'userManage',
  redirect: 'noRedirect',
  meta: {
    title: '用户管理',
    icon: 'iconuser'
  },
  children: [
    // 学霸笔记分类
    {
      path: '/userList',
      component: () => import(/* webpackChunkName: "userManage" */ '@/views/userManage/userList/userList'),
      name: 'userList',
      meta: { title: '用户列表', noCache: true }
    },
    {
      path: '/userListDetail',
      component: () => import(/* webpackChunkName: "userManage" */ '@/views/userManage/userList/userListDetail'),
      name: 'userListDetail',
      hidden: true,
      meta: { title: '用户列表-详情', noCache: true }
    }
  ]
}

export default userManageRouter
