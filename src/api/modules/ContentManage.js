/*
 * @Author: zhihao
 * @Date: 2020-06-28 15:19:44
 * @LastEditTime: 2020-07-01 15:06:50
 * @LastEditors: Please set LastEditors
 * @Description: 内容管理
 * @FilePath: \xkb-admin\src\api\modules\ContentManage.js
 */

import service from '@/utils/request'

/**
 * @description: 内容管理 - 话术管理 - 请求接口
 */
export async function speechcraft (query) {
  return (await service({
    url: '/api/v1/contentManage/speechcraft',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 内容管理 - 学习方法 - 请求接口
 */
export async function learnMethod (query) {
  return (await service({
    url: '/api/v1/contentManage/learnMethod',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 内容管理 - 学习方法回收站 - 请求接口
 */
export async function learnMethodRecycle (query) {
  return (await service({
    url: '/api/v1/contentManage/learnMethodRecycle',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 内容管理 - 咨询管理 - 请求接口
 */
export async function consultManage (query) {
  return (await service({
    url: '/api/v1/contentManage/consultManage',
    method: 'post',
    params: query
  }))
}

/**
 * @description: 内容管理 - 广告管理 - 请求接口
 */
export async function bannerManage (query) {
  return (await service({
    url: '/api/v1/contentManage/bannerManage',
    method: 'post',
    params: query
  }))
}
