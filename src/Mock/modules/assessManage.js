/* eslint-disable */
/*
 * @Author: your name
 * @Date: 2020-06-23 11:42:29
 * @LastEditTime: 2020-07-01 15:07:54
 * @LastEditors: Please set LastEditors
 * @Description: 评测管理 - 模拟数据
 * @FilePath: \xkb-admin\src\Mock\modules\assessManage.js
 */

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

/**
  * @description: 评测管理 - 评测分类
  * @param {type} 
  * @return: /api/v1/assessManage/assessClass
  */
 const assessClassRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      childClassName: Random.cname(),
      class: Random.cname(),
      assessName: Random.cname(),
      stage: ['初中','高中'][Random.natural(0,1)],
      subject: ['语文','英语','数学','政治','地理','生物','物理','化学'][Random.natural(0,7)],
      courseClass: Random.cname(),
      examineStatus: ['不通过','已通过','审核中','待审核'][Random.natural(0,3)],
      onlineStatus: ['不通过','已通过','审核中','待审核'][Random.natural(0,3)],
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/assessManage/assessClass', 'post', assessClassRes)

/**
  * @description: 评测管理 - 评测列表
  * @param {type} 
  * @return: /api/v1/assessManage/assessList
  */
 const assessListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      assessName: Random.cname(),
      stage: ['初中','高中'][Random.natural(0,1)],
      subject: ['语文','英语','数学','政治','地理','生物','物理','化学'][Random.natural(0,7)],
      courseClass: Random.cname(),
      examineStatus: ['不通过','已通过','审核中','待审核'][Random.natural(0,3)],
      onlineStatus: ['不通过','已通过','审核中','待审核'][Random.natural(0,3)],
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/assessManage/assessList', 'post', assessListRes)