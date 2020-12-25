/* eslint-disable */
/*
 * @Author: zhihao
 * @Date: 2020-06-29 15:08:58
 * @LastEditTime: 2020-07-01 15:11:37
 * @LastEditors: Please set LastEditors
 * @Description: 错题本 - 数据模拟
 * @FilePath: \xkb-admin\src\Mock\modules\errorSubjectManage.js
 */ 

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

/**
  * @description: 错题本 - 错题本分类
  * @param {type} 
  * @return: /api/v1/errorSubjectManage/errorSubjectClass
  */
 const errorSubjectClassRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      className: Random.cname(),
      stage: ['初中','高中'][Random.natural(0,1)],
      subject: ['语文','数学','英语','政治','物理'][Random.natural(0,4)],
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/errorSubjectManage/errorSubjectClass', 'post', errorSubjectClassRes)

/**
  * @description: 错题本 - 错题本原因
  * @param {type} 
  * @return: /api/v1/errorSubjectManage/errorSubjectReason
  */
 const errorSubjectReasonRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      errorSeason: Random.title(),
      errorDetail: Random.title(),
      viewStatus: ['显示','隐藏'][Random.natural(0,1)],
      isUsed: Random.boolean(),
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/errorSubjectManage/errorSubjectReason', 'post', errorSubjectReasonRes)

/**
  * @description: 错题本 - 错题本原因
  * @param {type} 
  * @return: /api/v1/errorSubjectManage/errorSubjectList
  */
 const errorSubjectListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      cover: Random.image('100px * 50px'),
      errorSeason: '语文诗词,英语短句,数学理解',
      stage: ['初中','高中'][Random.natural(0,1)],
      subject: ['语文','数学','英语','政治','物理'][Random.natural(0,3)],
      errorClass: ['字音','短句','错别字'][Random.natural(0,2)],
      username: Random.cname(),
      phone: ['159','193','152'][Random.natural(0,2)] + Random.natural(10000000,99999999),
      isTip: Random.boolean(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/errorSubjectManage/errorSubjectList', 'post', errorSubjectListRes)
