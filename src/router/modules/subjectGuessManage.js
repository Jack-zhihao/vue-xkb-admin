/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:26:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\router\modules\subjectGuessManage.js
 */
const subjectGuessManageRouter = {
  path: '/subjectGuessManage',
  component: () => import('@/layout'),
  name: 'subjectGuessManage',
  redirect: 'noRedirect',
  meta: {
    title: '命题猜想管理',
    icon: 'iconbook'
  },
  children: [
    // 命题猜想分类
    {
      path: '/subjectGuessClass',
      component: () => import('@/views/subjectGuessManage/subjectGuessClass/subjectGuessClass'),
      name: 'subjectGuessClass',
      meta: { title: '命题猜想分类', noCache: true }
    }
  ]
}

export default subjectGuessManageRouter
