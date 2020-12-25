/*
 * @Author: zhihao
 * @Date: 2020-06-29 10:50:05
 * @LastEditTime: 2020-07-01 14:39:48
 * @LastEditors: Please set LastEditors
 * @Description: 命题猜想管理
 * @FilePath: \xkb-admin\src\api\modules\SubjectGuessManage.js
 */

import service from '@/utils/request'

/**
 * @description: 命题猜想分类列表
 */
export async function subjectGuessClass (query) {
  return (await service({
    url: '/api/v1/subjectGuessManage/subjectGuessClass',
    method: 'post',
    params: query
  }))
}
