/*
 * @Author: your name
 * @Date: 2020-01-19 18:16:39
 * @LastEditTime: 2020-06-29 16:46:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin\app\src\Mock\index.js
 */
import { asyncRoutes } from '@/router'
import './modules/controller'
import './modules/courseManage'
import './modules/orderManage'
import './modules/financeManage'
import './modules/assessManage'
import './modules/userManage'
import './modules/teachterManage'
import './modules/staffManage'
import './modules/dailyRecordManage'
import './modules/operateManage'
import './modules/contentManage'
import './modules/subjectGuessManage'
import './modules/errorSubjectManage'
import './modules/testNoteManage'
import './modules/overyearsSubjectManage'
import './modules/teachterSettled'

const Mock = require('mockjs') // 获取mock对象

Mock.mock('/api/v1/login', 'post', {
  code: 200,
  data: JSON.stringify(asyncRoutes)
})
