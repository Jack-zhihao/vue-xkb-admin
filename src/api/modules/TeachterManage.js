/*
 * @Author: your name
 * @Date: 2020-06-23 14:53:44
 * @LastEditTime: 2020-07-01 14:39:31
 * @LastEditors: Please set LastEditors
 * @Description: 教师管理 - 接口请求
 * @FilePath: \xkb-admin\src\api\modules\TeachterManage.js
 */

import service from '@/utils/request'

/**
 * @description: 教师管理 - 教师列表 请求接口
 */
export async function teachterList (query) {
  return (await service({
    url: '/api/v1/teachterManage/teachterList',
    method: 'post',
    params: query
  }))
}
