/* eslint-disable */
/*
 * @Author: zhihao
 * @Date: 2020-06-28 10:08:37
 * @LastEditTime: 2020-07-01 15:10:57
 * @LastEditors: Please set LastEditors
 * @Description: 员工管理 - 请求接口
 * @FilePath: \xkb-admin\src\Mock\modules\staffManage.js
 */ 

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

/**
  * @description: 员工管理 - 员工列表
  * @param {type} 
  * @return: /api/v1/staffManage/staffList
  */

const staffListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      name: Random.cname(),
      phone: ['159','183','172'][Random.natural(0,2)] + Random.natural(10000000,99999999),
      partment: `销售${['一','二','三','四','五','六','七'][Random.natural(1,6)]}部`,
      post: ['销售','市场','课研','技术','行政'][Random.natural(0,4)],
      status: ['离职','在职'][Random.natural(0,1)],
      lastLoginTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/staffManage/staffList', 'post', staffListRes)

/**
  * @description: 员工管理 - 部门列表
  * @param {type} 
  * @return: /api/v1/staffManage/departmentList
  */

 const departmentListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      partment: `销售${['一','二','三','四','五','六','七'][Random.natural(1,6)]}部`,
      post: ['销售','市场','课研','技术','行政'][Random.natural(0,4)],
      postClass: ['销售','市场','课研','技术','行政'][Random.natural(0,4)],
      leader: Random.cname(),
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/staffManage/departmentList', 'post', departmentListRes)

/**
  * @description: 员工管理 - 职位列表
  * @param {type} 
  * @return: /api/v1/staffManage/positionList
  */
 const positionListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      postName: Random.cname(),
      partment: Random.cname(),
      class: Random.cname(),
      remack: Random.title(),
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/staffManage/postList', 'post', positionListRes)

/**
  * @description: 员工管理 - 角色列表
  * @param {type} 
  * @return: /api/v1/staffManage/rolesList
  */
 const rolesListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      rolesName: Random.cname(),
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/staffManage/rolesList', 'post', rolesListRes)