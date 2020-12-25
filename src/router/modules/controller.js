/*
 * @Author: zhihao
 * @Date: 2019-11-28 14:47:11
 * @LastEditTime: 2020-06-30 15:22:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\router\modules\controller.js
 */
const controllerRouter = {
  path: '/layout_controller',
  component: () => import('@/layout'),
  name: 'layout_controller',
  redirect: 'noRedirect',
  meta: {
    title: '控制台',
    icon: 'iconmodule'
  },
  children: [
    {
      path: '/controller',
      component: () => import(/* webpackChunkName: "layout_controller" */ '@/views/controller/controller'),
      name: 'controller',
      meta: { title: '控制台', noCache: true }
    },
    {
      path: '/controllerCourseDetail',
      component: () => import(/* webpackChunkName: "layout_controller" */ '@/views/controller/freeCourseDetail'),
      name: 'controllerCourseDetail',
      hidden: true,
      meta: { title: '赠送试听课详情' }
    },
    {
      path: '/orderDealDetail',
      component: () => import(/* webpackChunkName: "layout_controller" */ '@/views/controller/orderDealDetail'),
      name: 'orderDealDetail',
      hidden: true,
      meta: { title: '订单处理详情' }
    },
    {
      path: '/salesReport',
      component: () => import(/* webpackChunkName: "layout_controller" */ '@/views/controller/salesReport'),
      name: 'salesReport',
      hidden: true,
      meta: { title: '销售报表' }
    }
  ]
}

export default controllerRouter
