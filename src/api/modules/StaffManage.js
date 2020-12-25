/*
 * @Author: zhihao
 * @Date: 2020-06-28 10:18:36
 * @LastEditTime: 2020-07-01 14:40:10
 * @LastEditors: Please set LastEditors
 * @Description: 员工管理 - 员工列表
 * @FilePath: \xkb-admin\src\api\modules\staffManage.js
 */

import service from '@/utils/request'

/**
 * @description: 员工管理 - 员工列表 请求接口
 */
export async function staffList (query) {
  return (await service({
    url: '/api/v1/staffManage/staffList',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 员工管理 - 部门列表 请求接口
 */
export async function departmentList (query) {
  return (await service({
    url: '/api/v1/staffManage/departmentList',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 员工管理 - 职位列表 请求接口
 */
export async function postList (query) {
  return (await service({
    url: '/api/v1/staffManage/postList',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 员工管理 - 角色列表 请求接口
 */
export async function rolesList (query) {
  return (await service({
    url: '/api/v1/staffManage/rolesList',
    method: 'post',
    params: query
  }))
}
