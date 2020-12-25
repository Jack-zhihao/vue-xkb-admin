/*
 * @Author: zhihao
 * @Date: 2020-06-19 10:29:57
 * @LastEditTime: 2020-06-30 14:56:27
 * @LastEditors: Please set LastEditors
 * @Description: 此js文件用户操作本地localstroge数据
 * @FilePath: \app\src\utils\localHandle.js
 */

/**
 * @description: scale 参数 增删查
 * @param {
 *  scale： 屏幕布局比例
 * }
 */
export const getLocalScale = () => {
  const scale = window.localStorage.getItem('scale')
  return scale === 'undefined' ? null : scale
}

export const setLocalScale = (scale) => {
  return window.localStorage.setItem('scale', scale)
}

export const removeLocalScale = () => {
  return window.localStorage.removeItem('scale')
}
