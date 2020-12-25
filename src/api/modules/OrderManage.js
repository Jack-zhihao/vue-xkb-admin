/*
 * @Author: your name
 * @Date: 2020-06-22 14:25:52
 * @LastEditTime: 2020-07-01 14:40:44
 * @LastEditors: Please set LastEditors
 * @Description: 订单管理 请求接口
 * @FilePath: \xkb-admin\src\api\modules\OrderManage.js
 */

import service from '@/utils/request'

/**
 * @description: 订单管理 - 订单列表 请求接口
 */
export async function orderList (query) {
  return (await service({
    url: '/api/v1/orderManage/orderList',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 订单管理 - 申请电联 请求接口
 */
export async function applyCallOrder (query) {
  return (await service({
    url: '/api/v1/orderManage/applyCallOrder',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 订单管理 - 申请发票 请求接口
 */
export async function applyInvoice (query) {
  return (await service({
    url: '/api/v1/orderManage/applyInvoice',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 订单管理 - 换课管理 请求接口
 */
export async function changeCourse (query) {
  return (await service({
    url: '/api/v1/orderManage/changeCourse',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 订单管理 - 退课管理 请求接口
 */
export async function returnCourse (query) {
  return (await service({
    url: '/api/v1/orderManage/returnCourse',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 订单管理 - 0元换课 请求接口
 */
export async function zeroChangeCourse (query) {
  return (await service({
    url: '/api/v1/orderManage/zeroChangeCourse',
    method: 'post',
    params: query
  }))
}
