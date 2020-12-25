/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-07-09 15:17:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\router\modules\teachterManage.js
 */
const teachterManageRouter = {
  path: '/teachterManage',
  component: () => import('@/layout'),
  name: 'teachterManage',
  redirect: 'noRedirect',
  meta: {
    title: '讲师管理',
    icon: 'iconglasses'
  },
  children: [
    {
      path: '/teachterList',
      component: () => import('@/views/teachterManage/teachterList/teachterList'),
      name: 'teachterList',
      meta: { title: '讲师列表', noCache: true }
    },
    {
      path: '/teachterListEdit',
      component: () => import('@/views/teachterManage/teachterList/teachterListEdit'),
      name: 'teachterListEdit',
      hidden: true,
      meta: { title: '讲师列表-修改', noCache: true }
    }
  ]
}

export default teachterManageRouter
