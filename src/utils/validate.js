/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-07-06 17:29:14
 * @LastEditors: Please set LastEditors
 * @Description: 汇总 - 验证数据格式工具
 * @FilePath: \xkb-admin-H\app\src\utils\validate.js
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @description: 检验手机号
 */
export function checkPhone (phoneNumber) {
  return /^1[34578]\d{9}$/.test(phoneNumber)
}

/**
 * @description: 检验邮箱
 */
export function checkEmail (email) {
  return /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(email)
}
