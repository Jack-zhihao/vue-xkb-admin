/* eslint-disable */
/*
 * @Author: zhihao
 * @Date: 2020-06-18 15:39:59
 * @LastEditTime: 2020-07-01 15:11:45
 * @LastEditors: Please set LastEditors
 * @Description: 模拟数据
 * @FilePath: \app\src\Mock\modules\controller.js
 */ 
const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

 /**
  * @description: 控制台 - 顶部汇总数据详情
  * @param {type} 
  * @return: /api/v1/controller/summary
  */
const summaryRes = () => {
  let data = []
  for (let i = 0; i < 4; i++) {
    const post = {
      'number': Random.natural(1, 10000),
      'number2-1': Random.natural(1, 10000),
      'number2-2': Random.natural(1, 10000),
      'number2-3': Random.natural(1, 10000),
      'average':  Random.natural(1, 5000),
      'percent':  Random.natural(1, 100)
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/controller/summary', 'post', summaryRes)

const saleOfRankRes = () => {
  
  let salesMixs = [];
  for ( let i = 0; i < 7; i++) {
    salesMixs[i] = {
      platform: `平台${Random.natural(0, 7)}`,
      number: Random.natural(0,1000),
      proport: Random.natural(0,100)
    }
  }

  let salesRank = []
  for ( let i = 0; i < 10; i++) {
    salesRank[i] = {
      rank: i + 1,
      img: Random.dataImage('20x20'),
      platform: `平台${Random.natural(0,10)}`,
      number: Random.natural(0,1000),
      saler: Random.cname()
    }
  }
  return {
    code,
    data: {salesMixs, salesRank}
  }
}
Mock.mock('/api/v1/controller/saleOfRank', 'post', saleOfRankRes)

const saleAnalysisRes = () => {
  
  let hours = Random.range(9, 24)
  hours = hours.map( hour => hour = `${hour}时`)
  
  let today = [];
  let yesterday = [];
  for ( let i = 0; i < 15 ; i++ ) {
    today[i] = Random.natural(100, 1000)
    yesterday[i] = Random.natural(100, 1000)
  }
  
  return {
    code,
    data: {today, yesterday, hours}
  }
}

Mock.mock('/api/v1/controller/saleAnalysis', 'post', saleAnalysisRes)
