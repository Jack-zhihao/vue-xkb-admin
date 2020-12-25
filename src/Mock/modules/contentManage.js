/* eslint-disable */
/*
 * @Author: zhihao
 * @Date: 2020-06-28 15:15:53
 * @LastEditTime: 2020-06-29 10:31:31
 * @LastEditors: Please set LastEditors
 * @Description: 内容管理 - 模拟数据
 * @FilePath: \xkb-admin\src\Mock\modules\contentManage.js
 */ 

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码


 /**
  * @description: 内容管理 - 话术管理
  * @param {type} 
  * @return: /api/v1/contentManage/speechcraft
  */
const speechcraftRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      speechcraft: Random.title(),
      stage: ['初中','高中'][Random.natural(0,1)],
      grade: ['初一','初二','初三','高一','高二','高三'][Random.natural(0,5)],
      subject: ['语文','数学','英语','政治','物理','化学','生物'][Random.natural(0,6)],
      courseClass: Random.cname(),
      status: ['不通过','已通过','审核中','待审核','已取消'][Random.natural(0,4)],
      creater: Random.cname(),
      createTime: Random.datetime(),
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/contentManage/speechcraft', 'post', speechcraftRes)

 /**
  * @description: 内容管理 - 学习方法
  * @param {type} 
  * @return: /api/v1/contentManage/learnMethod
  */
 const learnMethodRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      index: i+1,
      cover: Random.image('100px * 50px'),
      title: Random.title(),
      status: ['不通过','已通过','审核中','待审核','已取消'][Random.natural(0,4)],
      onlineStatus:  ['上架','下架','撤销'][Random.natural(0,2)],
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/contentManage/learnMethod', 'post', learnMethodRes)

 /**
  * @description: 内容管理 - 学习方法回收站
  * @param {type} 
  * @return: /api/v1/contentManage/learnMethodRecycle
  */
 const learnMethodRecycleRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      index: i+1,
      cover: Random.image('100px * 50px'),
      title: Random.title(),
      status: ['不通过','已通过','审核中','待审核','已取消'][Random.natural(0,4)],
      onlineStatus:  ['上架','下架','撤销'][Random.natural(0,2)],
      creater: Random.cname(),
      createTime: Random.datetime(),
      operator: Random.cname(),
      operatTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/contentManage/learnMethodRecycle', 'post', learnMethodRecycleRes)

/**
  * @description: 内容管理 - 学习方法回收站
  * @param {type} 
  * @return: /api/v1/contentManage/consultManage
  */
 const consultManageRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      index: i+1,
      cover: Random.image('100px * 50px'),
      title: Random.title(),
      consultType: ['清北打卡','考试直通车','试前精选练习'][Random.natural(0,2)],
      recom: Random.boolean(),
      status: ['不通过','已通过','审核中','待审核','已取消'][Random.natural(0,4)],
      views: Random.natural(0,200),
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/contentManage/consultManage', 'post', consultManageRes)

/**
  * @description: 内容管理 - 广告管理
  * @param {type} 
  * @return: /api/v1/contentManage/bannerManage
  */
 const bannerManageRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      title: Random.title(),
      bannerType: ['轮播图','代码'][Random.natural(0,1)],
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/contentManage/bannerManage', 'post', bannerManageRes)
