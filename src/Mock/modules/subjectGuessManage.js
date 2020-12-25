/* eslint-disable */ 
/*
 * @Author: zhihao
 * @Date: 2020-06-29 10:35:27
 * @LastEditTime: 2020-07-01 15:08:57
 * @LastEditors: Please set LastEditors
 * @Description: 命题猜想 模拟数据
 * @FilePath: \xkb-admin\src\Mock\modules\subjectGuessClass.js
 */ 

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

/**
  * @description: 命题猜想 - 命题分类
  * @param {type} 
  * @return: /api/v1/subjectGuessManage/subjectGuessClass
  */

 const subjectGuessClassRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      className: Random.cname(),
      class: Random.cname(),
      stage: ['初中','高中'][Random.natural(0,1)],
      subject: ['语文','数学','英语','政治','物理'][Random.natural(0,4)],
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/subjectGuessManage/subjectGuessClass', 'post', subjectGuessClassRes)
