/*
 * @Author: zhihao
 * @Date: 2020-06-28 12:06:30
 * @LastEditTime: 2020-07-01 15:06:06
 * @LastEditors: Please set LastEditors
 * @Description: 消息推送规则 - 请求接口
 * @FilePath: \xkb-admin\src\api\modules\DailyRecordManage.js
 */

import service from '@/utils/request'

/**
 * @description: 消息推送管理 - 消息推送列表 请求接口
 */
export async function msgSendRule (query) {
  return (await service({
    url: '/api/v1/dailyRecordManage/msgSendRule',
    method: 'post',
    params: query
  }))
}
