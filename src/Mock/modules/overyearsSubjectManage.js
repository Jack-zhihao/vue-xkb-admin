/* eslint-disable */
/*
 * @Author: zhihao
 * @Date: 2020-06-29 16:17:57
 * @LastEditTime: 2020-07-01 15:11:06
 * @LastEditors: Please set LastEditors
 * @Description: 历年真题 - 模拟数据
 * @FilePath: \xkb-admin\src\Mock\modules\overyearsSubjectManage.js
 */
 
const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

/**
  * @description: 历年真题  - 真题分类
  * @param {type} 
  * @return: /api/v1/overyearsSubjectManage/overyearsSubjectClass
  */
 const overyearsSubjectClassRes = () => {
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
Mock.mock('/api/v1/overyearsSubjectManage/overyearsSubjectClass', 'post', overyearsSubjectClassRes)

/**
  * @description: 历年真题  - 真题列表
  * @param {type} 
  * @return: /api/v1/overyearsSubjectManage/overyearSubjectList
  */
const overyearSubjectListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      subjectClass: Random.title(),
      stage: ['初中','高中'][Random.natural(0,1)],
      subject: ['语文','数学','英语','政治','物理'][Random.natural(0,4)],
      status: ['待审核','已通过','不通过','已取消','审核中'][Random.natural(0,4)],
      openStatus: ['是','否'][Random.natural(0,1)],
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/overyearsSubjectManage/overyearSubjectList', 'post', overyearSubjectListRes)
