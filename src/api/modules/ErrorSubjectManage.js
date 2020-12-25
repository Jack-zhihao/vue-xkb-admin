/*
 * @Author: zhihao
 * @Date: 2020-06-29 15:13:21
 * @LastEditTime: 2020-07-01 15:05:54
 * @LastEditors: Please set LastEditors
 * @Description: 错题本 - 请求接口
 * @FilePath: \xkb-admin\src\api\modules\ErrorSubjectManage.js
 */

import service from '@/utils/request'

/**
 * @description: 错题本管理 - 错题本分类 请求接口
 */
export async function errorSubjectClass (query) {
  return (await service({
    url: '/api/v1/errorSubjectManage/errorSubjectClass',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 错题本管理 - 错题本原因 请求接口
 */
export async function errorSubjectReason (query) {
  return (await service({
    url: '/api/v1/errorSubjectManage/errorSubjectReason',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 错题本管理 - 错题本列表 请求接口
 */
export async function errorSubjectList (query) {
  return (await service({
    url: '/api/v1/errorSubjectManage/errorSubjectList',
    method: 'post',
    params: query
  }))
}
