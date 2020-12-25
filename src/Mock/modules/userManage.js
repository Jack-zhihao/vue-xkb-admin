/* eslint-disable */
/* eslint-disable
 * @Author: zhihao
 * @Date: 2020-06-23 14:15:58
 * @LastEditTime: 2020-07-01 15:07:12
 * @LastEditors: Please set LastEditors
 * @Description: 用户管理 - 模拟数据
 * @FilePath: \xkb-admin\src\Mock\modules\userManage.js
 */

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

/**
  * @description: 用户管理 - 用户列表
  * @param {type} 
  * @return: /api/v1/userManage/userList
  */
const userListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      cover: Random.image('40x40', '#f0f0f0', '40x40'),
      username: Random.cname(),
      phone: ['159','183','172'][Random.natural(0,2)] + Random.natural(10000000,99999999),
      tabs: ['学生','教师','职工'][Random.natural(0,2)],
      class: `高三(${Random.natural(0,10)})班`,
      recourse: ['官网','客服下单'][Random.natural(0,1)],
      service: `销售${['一','二','三','四','五','六','七'][Random.natural(0,6)]}`,
      status: ['有效','无效'][Random.natural(0,1)],
      lastLoginTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/userManage/userList', 'post', userListRes)
