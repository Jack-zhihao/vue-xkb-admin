/*
 * @Author: zhihao
 * @Date: 2020-01-20 10:25:55
 * @LastEditTime: 2020-07-01 15:05:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\api\modules\Login.js
 */

import service from '@/utils/request'

export async function Login (query) {
  return (await service({
    url: '/api/v1/login',
    method: 'post',
    params: query
  }))
}
