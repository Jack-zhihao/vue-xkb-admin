/*
 * @Author: zhihao
 * @Date: 2020-06-28 15:03:44
 * @LastEditTime: 2020-07-01 14:41:02
 * @LastEditors: Please set LastEditors
 * @Description: 运营管理 - 赠送试听课
 * @FilePath: \xkb-admin\src\api\modules\OperateManage.js
 */

import service from '@/utils/request'

export async function freeCourse (query) {
  return (await service({
    url: '/api/v1/operateManage/freeCourse',
    method: 'post',
    params: query
  }))
}
