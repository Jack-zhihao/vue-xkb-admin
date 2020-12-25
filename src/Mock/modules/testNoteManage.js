/* eslint-disable */
/*
 * @Author: zhihao
 * @Date: 2020-06-29 15:46:13
 * @LastEditTime: 2020-07-01 15:10:01
 * @LastEditors: Please set LastEditors
 * @Description: 学霸笔记 数据模拟
 * @FilePath: \xkb-admin\src\Mock\modules\testNoteManage.js
 */

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

/**
  * @description: 学霸笔记 - 学霸笔记分类
  * @param {type} 
  * @return: /api/v1/testNoteManage/testNoteClass
  */
 const testNoteClassRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      stage: ['初中','高中'][Random.natural(0,1)],
      subject: ['数学','语文','英语'][Random.natural(0,2)],
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/testNoteManage/testNoteClass', 'post', testNoteClassRes)

/**
  * @description: 学霸笔记 - 学霸笔记列表
  * @param {type} 
  * @return: /api/v1/testNoteManage/testNoteList
  */
 const testNoteListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      index: i + 1,
      subjectCover: Random.image('100px * 50px'),
      backgroundCover: Random.image('100px * 50px'),
      stage: ['初中','高中'][Random.natural(0,1)],
      subject: ['数学','语文','英语'][Random.natural(0,2)],
      status: ['审核中','已通过','待审核'][Random.natural(0,2)],
      onlineStatus: ['已上线','已下线'][Random.natural(0,1)],
      creater: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/testNoteManage/testNoteList', 'post', testNoteListRes)