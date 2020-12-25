/* eslint-disable */
/*
 * @Author: zhihao
 * @Date: 2020-06-28 11:59:14
 * @LastEditTime: 2020-07-01 15:08:11
 * @LastEditors: Please set LastEditors
 * @Description: 消息推送
 * @FilePath: \xkb-admin\src\Mock\modules\dailyRecordManage.js
 */ 

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

 /**
  * @description: 课程管理-课程分类
  * @param {type} 
  * @return: /api/v1/dailyRecordManage/msgSendRule
  */
const msgSendRuleRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      messgeType: ['退课待审核','支付成功','异地登录通知'][Random.natural(0,2)],
      messageSubject: '培训主管,平台经理,销售总监',
      messageRules: Random.title(),
      messageCreateTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/dailyRecordManage/msgSendRule', 'post', msgSendRuleRes)