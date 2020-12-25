/* eslint-disable */
/*
 * @Author: zhihao
 * @Date: 2020-06-29 16:40:54
 * @LastEditTime: 2020-07-01 15:10:08
 * @LastEditors: Please set LastEditors
 * @Description: 教师入驻 - 数据请求
 * @FilePath: \xkb-admin\src\Mock\modules\teachterSettled.js
 */ 

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码


/**
  * @description: 学霸笔记 - 学霸笔记列表
  * @param {type} 
  * @return: /api/v1/teachterSettled/teachterSettledList
  */
const teachterSettledListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      teachterName: Random.cname(),
      phone: [154,145,183][Random.natural(0,2)] + Random.natural(10000000, 99999999),
      idCard: Random.natural(1000000000000000000, 9999999999999999999),
      status: ['以处理','未处理'][Random.natural(0,1)],
      createTime: Random.datetime(),
      dealTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/teachterSettled/teachterSettledList', 'post', teachterSettledListRes)