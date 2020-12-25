/*
 * @Author: zhihao
 * @Date: 2020-06-29 16:45:00
 * @LastEditTime: 2020-07-01 14:39:12
 * @LastEditors: Please set LastEditors
 * @Description: 教师入驻 - 模拟数据
 * @FilePath: \xkb-admin\src\api\modules\TeachterSettled.js
 */

import service from '@/utils/request'

/**
 * @description: 教师入驻 - 数据请求
 */
export async function teachterSettledList (query) {
  return (await service({
    url: '/api/v1/teachterSettled/teachterSettledList',
    method: 'post',
    params: query
  }))
}
