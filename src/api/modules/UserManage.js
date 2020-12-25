/*
 * @Author: your name
 * @Date: 2020-06-23 14:28:16
 * @LastEditTime: 2020-07-01 14:37:58
 * @LastEditors: Please set LastEditors
 * @Description: 用户管理 请求接口
 * @FilePath: \xkb-admin\src\api\modules\UserManage.js
 */

import service from '@/utils/request'

/**
 * @description: 用户管理 - 用户列表 请求接口
 */
export async function userList (query) {
  return (await service({
    url: '/api/v1/userManage/userList',
    method: 'post',
    params: query
  }))
}
