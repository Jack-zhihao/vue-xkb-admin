/*
 * @Author: zhihao
 * @Date: 2020-06-29 16:21:37
 * @LastEditTime: 2020-07-01 14:40:22
 * @LastEditors: Please set LastEditors
 * @Description: 历年真题 - 模拟数据
 * @FilePath: \xkb-admin\src\api\modules\OveryearsSubjectManage.js
 */

import service from '@/utils/request'

/**
 * @description: 历年真题 - 历年真题分类 请求接口
 */
export async function overyearsSubjectClass (query) {
  return (await service({
    url: '/api/v1/overyearsSubjectManage/overyearsSubjectClass',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 历年真题 - 历年真题列表 请求接口
 */
export async function overyearSubjectList (query) {
  return (await service({
    url: '/api/v1/overyearsSubjectManage/overyearSubjectList',
    method: 'post',
    params: query
  }))
}
