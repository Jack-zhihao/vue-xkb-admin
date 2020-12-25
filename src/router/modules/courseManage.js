/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:22:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\router\modules\courseManage.js
 */
const courseManageRouter = {
  path: '/courseManage',
  component: () => import('@/layout'),
  name: 'courseManage',
  redirect: 'noRedirect',
  meta: {
    title: '课程管理',
    icon: 'iconcourse'
  },
  children: [
    {
      path: '/courseClass',
      component: () => import(/* webpackChunkName: "courseManage" */ '@/views/courseManage/courseClass/courseClass'),
      name: 'courseClass',
      meta: { title: '课程分类', noCache: true }
    },
    {
      path: '/courseList',
      component: () => import(/* webpackChunkName: "courseManage" */ '@/views/courseManage/courseList/courseList'),
      name: 'courseList',
      meta: { title: '课程模块', noCache: true }
    },
    {
      path: '/courseListDetail',
      component: () => import(/* webpackChunkName: "courseManage" */ '@/views/courseManage/courseList/courseListDetail'),
      name: 'courseListDetail',
      hidden: true,
      meta: { title: '课程模块-详情', noCache: true }
    },
    {
      path: '/courseListAdd',
      component: () => import(/* webpackChunkName: "courseManage" */ '@/views/courseManage/courseList/courseListAdd'),
      name: 'courseListAdd',
      hidden: true,
      meta: { title: '课程模块-添加', noCache: true }
    },
    {
      path: '/videoStorehouse',
      component: () => import(/* webpackChunkName: "courseManage" */ '@/views/courseManage/videoStorehouse/videoStorehouse'),
      name: 'videoStorehouse',
      meta: { title: '视频库', noCache: true }
    },
    {
      path: '/videoStorehouseAdd',
      component: () => import(/* webpackChunkName: "courseManage" */ '@/views/courseManage/videoStorehouse/videoStorehouseAdd'),
      name: 'videoStorehouseAdd',
      hidden: true,
      meta: { title: '视频库-添加', noCache: true }
    },
    {
      path: '/recycleBin',
      component: () => import(/* webpackChunkName: "courseManage" */ '@/views/courseManage/recycleBin/recycleBin'),
      name: 'recycleBin',
      meta: { title: '回收站', noCache: true }
    },
    {
      path: '/recycleBinCourseModul',
      component: () => import(/* webpackChunkName: "courseManage" */ '@/views/courseManage/recycleBin/recycleBinCourseModul'),
      name: 'recycleBinCourseModul',
      hidden: true,
      meta: { title: '课程模块回收详情', noCache: true }
    },
    {
      path: '/recycleBinCourse',
      component: () => import(/* webpackChunkName: "courseManage" */ '@/views/courseManage/recycleBin/recycleBinCourse'),
      name: 'recycleBinCourse',
      hidden: true,
      meta: { title: '课程回收详情', noCache: true }
    },
    {
      path: '/courseScore',
      component: () => import(/* webpackChunkName: "courseManage" */ '@/views/courseManage/courseScore/courseScore'),
      name: 'courseScore',
      meta: { title: '课程评分', noCache: true }
    }
  ]
}

export default courseManageRouter
