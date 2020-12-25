/*
 * @Author: zhihao
 * @Date: 2020-06-02 18:34:14
 * @LastEditTime: 2020-07-01 15:06:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin\app\src\api\modules\Controller.js
 */

import service from '@/utils/request'

/**
 * @description: 控制台 summaryPane 请求接口
 */
export async function summary (query) {
  return (await service({
    url: '/api/v1/controller/summary',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 控制台 saleOfRankPane 请求接口
 */
export async function saleOfRank (query) {
  return (await service({
    url: '/api/v1/controller/saleOfRank',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 控制台 saleAnalysis 请求接口
 */
export async function saleAnalysis (query) {
  return (await service({
    url: '/api/v1/controller/saleAnalysis',
    method: 'post',
    params: query
  }))
}
