/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:25:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\router\modules\staffManage.js
 */
const staffManageRouter = {
  path: '/staffManage',
  component: () => import('@/layout'),
  name: 'staffManage',
  redirect: 'noRedirect',
  meta: {
    title: '员工管理',
    icon: 'iconid'
  },
  children: [
    {
      path: '/staffList',
      component: () => import(/* webpackChunkName: "staffManage" */ '@/views/staffManage/staffList/staffList'),
      name: 'staffList',
      meta: { title: '员工列表', noCache: true }
    },
    {
      path: '/staffListAdd',
      component: () => import(/* webpackChunkName: "staffManage" */ '@/views/staffManage/staffList/staffListAdd'),
      name: 'staffListAdd',
      hidden: true,
      meta: { title: '员工列表-添加', noCache: true }
    },
    {
      path: '/staffListLeave',
      component: () => import(/* webpackChunkName: "staffManage" */ '@/views/staffManage/staffList/staffListLeave'),
      name: 'staffListLeave',
      hidden: true,
      meta: { title: '员工列表-离职处理', noCache: true }
    },
    {
      path: '/staffListDetail',
      component: () => import(/* webpackChunkName: "staffManage" */ '@/views/staffManage/staffList/staffListDetail'),
      name: 'staffListDetail',
      hidden: true,
      meta: { title: '员工列表-详情', noCache: true }
    },
    {
      path: '/departmentList',
      component: () => import(/* webpackChunkName: "staffManage" */ '@/views/staffManage/departmentList/departmentList'),
      name: 'departmentList',
      meta: { title: '部门列表', noCache: true }
    },
    {
      path: '/positionList',
      component: () => import(/* webpackChunkName: "staffManage" */ '@/views/staffManage/positionList/positionList'),
      name: 'positionList',
      meta: { title: '职位列表', noCache: true }
    },
    {
      path: '/positionListAdd',
      component: () => import(/* webpackChunkName: "staffManage" */ '@/views/staffManage/positionList/positionListAdd'),
      name: 'positionListAdd',
      hidden: true,
      meta: { title: '职位列表-添加', noCache: true }
    },
    {
      path: '/roleList',
      component: () => import(/* webpackChunkName: "staffManage" */ '@/views/staffManage/roleList/roleList'),
      name: 'roleList',
      meta: { title: '角色列表', noCache: true }
    }
  ]
}

export default staffManageRouter
