/*
 * @Author: your name
 * @Date: 2020-06-23 10:48:36
 * @LastEditTime: 2020-07-01 15:05:42
 * @LastEditors: Please set LastEditors
 * @Description: 财务管理接口
 * @FilePath: \xkb-admin\src\api\modules\FinanceManage.js
 */

import service from '@/utils/request'

/**
 * @description: 财务管理 - 财务列表 请求接口
 */
export async function financeList (query) {
  return (await service({
    url: '/api/v1/financeManage/financeList',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 财务管理 - 发票处理 请求接口
 */
export async function invoiceHandle (query) {
  return (await service({
    url: '/api/v1/financeManage/invoiceHandle',
    method: 'post',
    params: query
  }))
}
