/* eslint-disable */
/*
 * @Author: your name
 * @Date: 2020-06-22 14:16:08
 * @LastEditTime: 2020-07-01 15:11:28
 * @LastEditors: Please set LastEditors
 * @Description: 订单管理 模拟数据
 * @FilePath: \xkb-admin\src\Mock\modules\orderManage.js
 */
const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

 /**
  * @description: 订单管理 - 订单列表
  * @param {type} 
  * @return: /api/v1/orderManage/orderList
  */
 const orderListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      order: Random.natural(15),
      username: Random.cname(),
      isGift: ['是','否'][Random.natural(0,1)],
      isGiftCourse: ['是','否'][Random.natural(0,1)],
      orderMoney: `${Random.natural(1, 10000) / 100 }￥`,
      editMoney: `${Random.natural(1, 10000) / 100 }￥`,
      payMoney: `${Random.natural(1, 10000) / 100 }￥`,
      orderSource: `平台${['一','二','三','四','五','六','七'][Random.natural(0,6)]}`,
      orderStatus: ['不通过','已通过','待审核','审核中'][Random.natural(0,3)],
      examineStatus: ['不通过','已通过','待审核','审核中'][Random.natural(0,3)],
      creater: Random.cname(),
      creatTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/orderManage/orderList', 'post', orderListRes)

/**
  * @description: 订单管理 - 申请电联订单
  * @param {type} 
  * @return: /api/v1/orderManage/applyCallOrder
  */
 const applyCallOrderRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      order: Random.natural(15),
      comfrimOrderUser: ['159','183','172'][Random.natural(0,2)] + Random.natural(10000000,99999999),
      username: Random.cname(),
      phone: ['159','183','172'][Random.natural(0,2)] + Random.natural(10000000,99999999),
      isCall: ['是','否'][Random.natural(0,1)],
      viewRemarks: Random.boolean(),
      editMoney: `${Random.natural(1, 10000) / 100 }￥`,
      appleTime: Random.datetime(),
      callTime: Random.datetime(),
      examine: ['不通过','已通过','待审核','审核中','已取消'][Random.natural(0,4)]
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/orderManage/applyCallOrder', 'post', applyCallOrderRes)

/**
  * @description: 订单管理 - 申请发票
  * @param {type} 
  * @return: /api/v1/orderManage/applyInvoice
  */
 const applyInvoiceRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      order: Random.natural(15),
      username: Random.cname(),
      orderMoney: `${Random.natural(1, 10000) / 100 }￥`,
      payMoney: `${Random.natural(1, 10000) / 100 }￥`,
      resultMoney: `${Random.natural(1, 10000) / 100 }￥`,
      orderStatus: ['待支付','已支付','已取消'][Random.natural(0, 2)],
      invoiceType: ['个人','企业'][Random.natural(0,1)],
      invoiceStatus: ['待开票','已开票','已作废','已退回'][Random.natural(0,3)],
      creater: Random.cname(),
      creatTime: Random.datetime(),
      
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/orderManage/applyInvoice', 'post', applyInvoiceRes)

/**
  * @description: 订单管理 - 换课列表
  * @param {type} 
  * @return: /api/v1/orderManage/changeCourse
  */
 const changeCourseRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      order: Random.natural(15),
      username: Random.cname(),
      phone: ['159','183','172'][Random.natural(0,2)] + Random.natural(10000000,99999999),
      changeCourseType: '客服下单',
      applyDisparityMoney: `${Random.natural(1, 10000) / 100 }￥`,
      applyDisparityType: '减价',
      examineStatus: ['不通过','已通过','审核中','待审核'][Random.natural(0,3)],
      applyer: Random.cname(),
      applyTime: Random.datetime(),
      
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/orderManage/changeCourse', 'post', changeCourseRes)

/**
  * @description: 订单管理 - 退课列表
  * @param {type} 
  * @return: /api/v1/orderManage/returnCourse
  */
 const returnCourseRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      order: Random.natural(15),
      username: Random.cname(),
      phone: ['159','183','172'][Random.natural(0,2)] + Random.natural(10000000,99999999),
      returnCourseType: '客服下单',
      applyDisparityMoney: `${Random.natural(1, 10000) / 100 }￥`,
      applyDisparityType: '减价',
      examineStatus: ['不通过','已通过','审核中','待审核'][Random.natural(0,3)],
      applyer: Random.cname(),
      applyTime: Random.datetime(),
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/orderManage/returnCourse', 'post', returnCourseRes)

/**
  * @description: 订单管理 - 0元换课
  * @param {type} 
  * @return: /api/v1/orderManage/zeroChangeCourse
  */
 const zeroChangeCourseRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      order: Random.natural(15),
      username: Random.cname(),
      phone: ['159','183','172'][Random.natural(0,2)] + Random.natural(10000000,99999999),
      changeCourseType: '客服下单',
      applyDisparityMoney: `${Random.natural(1, 10000) / 100 }￥`,
      applyDisparityType: '减价',
      examineStatus: ['不通过','已通过','审核中','待审核'][Random.natural(0,3)],
      applyer: Random.cname(),
      applyTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/orderManage/zeroChangeCourse', 'post', zeroChangeCourseRes)