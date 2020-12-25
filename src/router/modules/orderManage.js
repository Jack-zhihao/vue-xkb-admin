
const orderManageRouter = {
  path: '/orderManage',
  component: () => import('@/layout'),
  name: 'orderManage',
  redirect: 'noRedirect',
  meta: {
    title: '订单管理',
    icon: 'iconorder'
  },
  children: [
    // orderList
    {
      path: '/orderList',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/orderList/orderList'),
      name: 'orderList',
      meta: { title: '订单列表', noCache: true }
    },
    {
      path: '/orderListAdd',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/orderList/orderListAdd'),
      name: 'orderListAdd',
      hidden: true,
      meta: { title: '添加订单', noCache: true }
    },
    {
      path: '/learningPlan',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/orderList/learningPlan'),
      name: 'learningPlan',
      hidden: true,
      meta: { title: '学习计划', noCache: true }
    },
    {
      path: '/learningPlanEdit',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/orderList/learningPlanEdit'),
      name: 'learningPlanEdit',
      hidden: true,
      meta: { title: '学习计划-编辑', noCache: true }
    },
    {
      path: '/orderListDetail',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/orderList/orderListDetail'),
      name: 'orderListDetail',
      hidden: true,
      meta: { title: '订单列表-详情', noCache: true }
    },
    // applyCallOrder
    {
      path: '/applyCallOrder',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/applyCallOrder/applyCallOrder'),
      name: 'applyCallOrder',
      meta: { title: '申请电联订单', noCache: true }
    },
    {
      path: '/callOrderDetail',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/applyCallOrder/callOrderDetail'),
      name: 'callOrderDetail',
      hidden: true,
      meta: { title: '申请电联订单-详情', noCache: true }
    },
    // applyInvoice
    {
      path: '/applyInvoice',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/applyInvoice/applyInvoice'),
      name: 'applyInvoice',
      meta: { title: '申请发票', noCache: true }
    },
    {
      path: '/applyInvoiceAdd',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/applyInvoice/applyInvoiceAdd'),
      name: 'applyInvoiceAdd',
      hidden: true,
      meta: { title: '发票申请', noCache: true }
    },
    {
      path: '/applyInvoiceDetail',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/applyInvoice/applyInvoiceDetail'),
      name: 'applyInvoiceDetail',
      hidden: true,
      meta: { title: '申请发票-详情', noCache: true }
    },
    // changeCourse
    {
      path: '/changeCourse',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/changeCourse/changeCourse'),
      name: 'changeCourse',
      meta: { title: '换课列表', noCache: true }
    },
    {
      path: '/changeCourseAdd',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/changeCourse/changeCourseAdd'),
      name: 'changeCourseAdd',
      hidden: true,
      meta: { title: '换课列表-申请', noCache: true }
    },
    {
      path: '/changeCourseEdit',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/changeCourse/changeCourseEdit'),
      name: 'changeCourseEdit',
      hidden: true,
      meta: { title: '换课列表-修改', noCache: true }
    },
    {
      path: '/changeCourseDetail',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/changeCourse/changeCourseDetail'),
      name: 'changeCourseDetail',
      hidden: true,
      meta: { title: '换课列表-详情', noCache: true }
    },
    // returnCoursere
    {
      path: '/returnCourse',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/returnCourse/returnCourse'),
      name: 'returnCourse',
      meta: { title: '退课列表', noCache: true }
    },
    {
      path: '/returnCourseDetail',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/returnCourse/returnCourseDetail'),
      name: 'returnCourseDetail',
      hidden: true,
      meta: { title: '退课列表-详情', noCache: true }
    },
    // zeroChangeCourse
    {
      path: '/zeroChangeCourse',
      component: () => import(/* webpackChunkName: "orderManage" */ '@/views/orderManage/zeroChangeCourse/zeroChangeCourse'),
      name: 'zeroChangeCourse',
      meta: { title: '0元换课列表', noCache: true }
    }
  ]
}

export default orderManageRouter
