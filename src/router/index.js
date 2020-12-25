/*
 * @Author: your name
 * @Date: 2019-11-27 18:23:02
 * @LastEditTime: 2020-06-30 10:52:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import controller from './modules/controller'
import courseManage from './modules/courseManage'
import orderManage from './modules/orderManage'
import financeManage from './modules/financeManage'
import assessManage from './modules/assessManage'
import operateManage from './modules/operateManage'
import contentManage from './modules/contentManage'
import subjectGuessManage from './modules/subjectGuessManage'
import errorSubjectManage from './modules/errorSubjectManage'
import testNoteManage from './modules/testNoteManage'
import overyearsSubjectManage from './modules/overyearsSubjectManage'
import userManage from './modules/userManage'
import teachterManage from './modules/teachterManage'
import statistics from './modules/statistics'
import staffManage from './modules/staffManage'
import dailyRecordManage from './modules/dailyRecordManage'
import teachterSettled from './modules/teachterSettled'

Vue.use(VueRouter)

export const asyncRoutes = [
  controller,
  courseManage,
  orderManage,
  financeManage,
  assessManage,
  userManage,
  teachterManage,
  statistics,
  staffManage,
  dailyRecordManage,
  operateManage,
  contentManage,
  subjectGuessManage,
  errorSubjectManage,
  testNoteManage,
  overyearsSubjectManage,
  teachterSettled
]

export const constantRoutes = [
  {
    path: '/login',
    hidden: true,
    name: 'login',
    meta: {
      title: '登录页'
    },
    component: () => import('@/views/login/index')
  },
  {
    path: '/404',
    hidden: true,
    name: '404',
    meta: {
      title: '404'
    },
    component: () => import('@/views/errorPage/404')
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

function createRouter () {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRoutes
  })
}

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
