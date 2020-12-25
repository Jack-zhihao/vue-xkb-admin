/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-07-02 14:50:38
 * @LastEditors: Please set LastEditors
 * @Description: 此文件编写工具函数
 * @FilePath: \xkb-admin-H\app\src\utils\utils.js
 */
import { getLocalScale } from '@/utils/localHandle'

/**
 * @description: 初始化页面 -> 调整页面布局比例大小
 */
export function initLayout () {
  const initLayoutFontSize = 100 * (Number(getLocalScale()) || 1) + 'px'
  document.getElementsByTagName('html')[0].style.fontSize = initLayoutFontSize
}

/**
 * @description: 数组去重
 */
export function unique (array) {
  return [...new Set(array)]
}
