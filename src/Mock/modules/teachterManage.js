/* eslint-disable */
/*
 * @Author: your name
 * @Date: 2020-06-23 14:51:15
 * @LastEditTime: 2020-07-01 15:10:16
 * @LastEditors: Please set LastEditors
 * @Description: 教师管理 - 接口请求
 * @FilePath: \xkb-admin\src\Mock\modules\teachterManage.js
 */ 
const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

/**
  * @description: 教师管理 - 教师列表
  * @param {type} 
  * @return: /api/v1/teachterManage/teachterList
  */
 const teachterListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      cover: Random.image('40x40', '#f0f0f0', '40x40'),
      teachterName: Random.cname(),
      teachAge: Random.natural(2,6),
      teachType: ['线上授课','线下授课'][Random.natural(0,1)],
      courseNumber: Random.natural(1,4),
      flowNumber: `${Random.natural(1000, 10000) / 100}M`,
      sex: ['男','女'][Random.natural(0,1)],
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/teachterManage/teachterList', 'post', teachterListRes)