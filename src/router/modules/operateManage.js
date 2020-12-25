/*
 * @Author: your name
 * @Date: 2019-12-20 17:31:54
 * @LastEditTime: 2020-06-30 15:23:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\router\modules\operateManage.js
 */

const operateManageRouter = {
  path: '/operateManage',
  component: () => import('@/layout'),
  name: 'operateManage',
  redirect: 'noRedirect',
  meta: {
    title: '运营管理',
    icon: 'iconoperation'
  },
  children: [
    // freeCourse
    {
      path: '/freeCourse',
      component: () => import(/* webpackChunkName: "operateManage" */ '@/views/operateManage/freeCourse/freeCourse'),
      name: 'freeCourse',
      meta: { title: '赠送试听课', noCache: true }
    },
    {
      path: '/freeCourseAdd',
      component: () => import(/* webpackChunkName: "operateManage" */ '@/views/operateManage/freeCourse/freeCourseAdd'),
      name: 'freeCourseAdd',
      hidden: true,
      meta: { title: '赠送试听课-添加', noCache: true }
    },
    {
      path: '/freeCourseDetail',
      component: () => import(/* webpackChunkName: "operateManage" */ '@/views/operateManage/freeCourse/freeCourseDetail'),
      name: 'freeCourseDetail',
      hidden: true,
      meta: { title: '赠送试听课-详情', noCache: true }
    }
  ]
}

export default operateManageRouter
