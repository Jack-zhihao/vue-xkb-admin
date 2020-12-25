/*
 * @Author: zhihao
 * @Date: 2020-06-29 15:49:44
 * @LastEditTime: 2020-07-01 14:38:29
 * @LastEditors: Please set LastEditors
 * @Description: 学霸笔记 - 请求接口
 * @FilePath: \xkb-admin\src\api\modules\TestNoteManage.JS
 */

import service from '@/utils/request'

/**
 * @description: 学霸笔记 - 学霸笔记分类
 */
export async function testNoteClass (query) {
  return (await service({
    url: '/api/v1/testNoteManage/testNoteClass',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 学霸笔记 - 学霸笔记列表
 */
export async function testNoteList (query) {
  return (await service({
    url: '/api/v1/testNoteManage/testNoteList',
    method: 'post',
    params: query
  }))
}
