/* eslint-disable */
/*
 * @Author: your name
 * @Date: 2020-06-23 10:49:12
 * @LastEditTime: 2020-07-01 15:08:18
 * @LastEditors: Please set LastEditors
 * @Description:  财务管理 模拟数据
 * @FilePath: \xkb-admin\src\Mock\modules\financeManage.js
 */ 

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

 /**
  * @description: 财务管理 - 财务列表
  * @param {type} 
  * @return: /api/v1/financeManage/financeList
  */
const financeListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      order: Random.natural(15),
      username: Random.cname(),
      orderStatus: ['不通过','已通过','审核中','待审核'][Random.natural(0,3)],
      examineStatus: ['不通过','已通过','审核中','待审核'][Random.natural(0,3)],
      platform: `平台${['一','二','三','四','五','六','七'][Random.natural(0,6)]}`,
      team: ['是','否'][Random.natural(0,1)],
      staffName: Random.cname(),
      stage: ['初中','高中'][Random.natural(0,1)],
      editMoney: `${Random.natural(1, 10000) / 100 }￥`,
      resultMoney: `${Random.natural(1, 10000) / 100 }￥`,
      payMoney: `${Random.natural(1, 10000) / 100 }￥`,
      area: Random.region(),
      payType: ['微信','支付宝'][Random.natural(0,1)],
      isInvoice: ['是','否'][Random.natural(0,1)],
      applyTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/financeManage/financeList', 'post', financeListRes)

/**
  * @description: 财务管理 - 发票处理
  * @param {type} 
  * @return: /api/v1/financeManage/invoiceHandle
  */
 const invoiceHandleRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      order: Random.natural(15),
      username: Random.cname(),
      orderStatus: ['不通过','已通过','审核中','待审核'][Random.natural(0,3)],
      examineStatus: ['不通过','已通过','审核中','待审核'][Random.natural(0,3)],
      team: ['是','否'][Random.natural(0,1)],
      staffName: Random.cname(),
      stage: ['初中','高中'][Random.natural(0,1)],
      editMoney: `${Random.natural(1, 10000) / 100 }￥`,
      resultMoney: `${Random.natural(1, 10000) / 100 }￥`,
      payMoney: `${Random.natural(1, 10000) / 100 }￥`,
      area: Random.region(),
      payType: ['微信','支付宝'][Random.natural(0,1)],
      isInvoice: ['是','否'][Random.natural(0,1)],
      invoiceType: ['个人','企业'][Random.natural(0,1)],
      invoiceStatus: ['已开票','开票中','待开票'][Random.natural(0,2)],
      applyTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/financeManage/invoiceHandle', 'post', invoiceHandleRes)