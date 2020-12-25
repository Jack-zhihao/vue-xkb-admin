/*
 * @Author: zhihao
 * @Date: 2020-06-19 15:58:37
 * @LastEditTime: 2020-07-01 15:06:22
 * @LastEditors: Please set LastEditors
 * @Description: 课程管理 请求接口
 * @FilePath: \xkb-admin\src\api\modules\CourseManage.js
 */

import service from '@/utils/request'

/**
 * @description: 课程管理 - 课程分类 请求接口
 */
export async function courseClass (query) {
  return (await service({
    url: '/api/v1/courseMenage/courseClass',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 课程管理 - 课程列表 请求接口
 */
export async function courseList (query) {
  return (await service({
    url: '/api/v1/courseMenage/courseList',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 课程管理 - 视频库 请求接口
 */

export async function videoStorehouse (query) {
  return (await service({
    url: '/api/v1/courseMenage/videoStorehouse',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 课程管理 - 回收站 请求接口
 */
export async function recycleBin (query) {
  return (await service({
    url: '/api/v1/courseMenage/recycleBin',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 课程管理 - 课程评分 请求接口
 */
export async function courseScore (query) {
  return (await service({
    url: '/api/v1/courseMenage/courseScore',
    method: 'post',
    params: query
  }))
}
