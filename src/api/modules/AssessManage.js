/*
 * @Author: your name
 * @Date: 2020-06-23 11:44:38
 * @LastEditTime: 2020-07-01 15:06:59
 * @LastEditors: Please set LastEditors
 * @Description: 评测管理 - 请求接口
 * @FilePath: \xkb-admin\src\api\modules\assessManage.js
 */

import service from '@/utils/request'

/**
 * @description: 评测管理 - 评测分类 请求接口
 */
export async function assessClass (query) {
  return (await service({
    url: '/api/v1/assessManage/assessClass',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 评测管理 - 评测列表 请求接口
 */
export async function assessList (query) {
  return (await service({
    url: '/api/v1/assessManage/assessList',
    method: 'post',
    params: query
  }))
}
