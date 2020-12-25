/* eslint-disable */
/*
 * @Author: zhihao
 * @Date: 2020-06-19 15:40:02
 * @LastEditTime: 2020-06-22 15:35:04
 * @LastEditors: Please set LastEditors
 * @Description: 模拟数据
 * @FilePath: \xkb-admin\src\Mock\modules\courseMange.js
 */ 

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

 /**
  * @description: 课程管理-课程分类
  * @param {type} 
  * @return: /api/v1/courseMenage/courseClass
  */
const courseClassRes = () => {
  let data = []
  for (let i = 0; i < 15; i++) {
    const post = {
      title: Random.cname(),
      stage: '初'+['一','二','三'][Random.natural(0, 2)],
      grade: ['一','二','三','四','五','六','七'][Random.natural(0, 6)]+'年级',
      subject: ['语文','数学','英文','政治','地理','生物','物理','历史'][Random.natural(0,7)],
      creater: Random.cname(),
      creatTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/courseMenage/courseClass', 'post', courseClassRes)

 /**
  * @description: 课程管理-课程列表
  * @param {type} 
  * @return: /api/v1/courseMenage/courseList
  */ 
const courseListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      index: i+ 1,
      title: Random.cname(),
      stage: '初'+['一','二','三'][Random.natural(0, 2)],
      grade:  ['一','二','三','四','五','六','七'][Random.natural(0, 6)]+'年级',
      subject: ['语文','数学','英文','政治','地理','生物','物理','历史'][Random.natural(0,7)],
      creater: Random.cname(),
      creatTime: Random.datetime(),
      auditState: Random.natural(0, 4),
      onlineState: Random.natural(0, 4),
      teachter: Random.cname(),
      salesMoney: Random.natural(1, 200000) / 100 + '￥',
      courseModulesCode: Random.natural(100000, 999999),
      courseClass: Random.cname(),
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/courseMenage/courseList', 'post', courseListRes)


 /**
  * @description: 课程管理-视频库
  * @param {type} 
  * @return: /api/v1/courseMenage/videoStorehouse
  */ 
 
const videoStorehouseListRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      courseCover: Random.image('200x100'),
      videoName: Random.cname(),
      teachter: Random.cname(),
      videoSize: Random.natural(1, 1000)/ 100 + 'MB',
      status: Random.natural(0,2),
      isView: Random.boolean(),
      updater: Random.cname(),
      updateTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/courseMenage/videoStorehouse', 'post', videoStorehouseListRes)

/**
  * @description: 课程管理-回收库
  * @param {type} 
  * @return: /api/v1/courseMenage/recycleBin - courseModules | courseRecylebin
  */
const recycleBinRes = () => {
  let courseModulesRecylebin = [];
  let courseRecylebin = []
  for (let i = 0; i < 10; i++) {
    const post = {
      courseModulesTitle: Random.cname(),
      courseStage: (['初中', '高中'])[Random.natural(0,1)],
      courseGrade:  ['一','二','三','四','五','六','七'][Random.natural(0, 6)]+'年级',
      courseSubject:  ['语文','数学','英文','政治','地理','生物','物理','历史'][Random.natural(0,7)],
      courseClass: Random.cname(),
      salesMoney: `${Random.natural(1, 10000)/ 100}￥`,
      teachter: Random.cname(),
      verifyStatus: Random.natural(0,4),
      delUser: Random.cname(),
      delTime: Random.datetime()
      
    }
    courseModulesRecylebin.push(post)
  }

  for (let k = 0; k < 10; k++) {
    const post2 = {
      courseModulesTitle: Random.cname(),
      courseTitle: Random.cname(),
      courseStage: (['初中', '高中'])[Random.natural(0,1)],
      courseGrade:  ['一','二','三','四','五','六','七'][Random.natural(0, 6)]+'年级',
      courseSubject:  ['语文','数学','英文','政治','地理','生物','物理','历史'][Random.natural(0,7)],
      courseClass: Random.cname(),
      salesMoney: `${Random.natural(1, 10000)/ 100}￥`,
      teachter: Random.cname(),
      verifyStatus: Random.natural(0,4),
      delUser: Random.cname(),
      delTime: Random.datetime()
      
    }
    courseRecylebin.push(post2)
  }

  return {code, data:{ courseModulesRecylebin, courseRecylebin }}
}
Mock.mock('/api/v1/courseMenage/recycleBin', 'post', recycleBinRes)

/**
  * @description: 课程管理-评分
  * @param {type}
  * @return: /api/v1/courseMenage/courseScore
  */

 const courseScoreRes = () => {
  let data = []
  for( var i = 0; i< 10 ; i++ ) {
    const posts = {
      courseModulesTitle: Random.string(5,15),
      courseTitle: Random.string(5,15),
      courseStage: (['初中', '高中'])[Random.natural(0,1)],
      courseGrade:  ['一','二','三','四','五','六','七'][Random.natural(0, 6)]+'年级',
      courseSubject:  ['语文','数学','英文','政治','地理','生物','物理','历史'][Random.natural(0,7)],
      courseClass: Random.cname(),
      userScorePerent: `${Random.natural(1,100) /100 }%`,
      goodScorePerent: `${Random.natural(1,100) /100 }%`,
      teachter: Random.cname(),
      updateTime: Random.datetime()
    }
    data.push( posts )
  }
  return {
    code,
    data
  }
 }
 Mock.mock('/api/v1/courseMenage/courseScore', 'post', courseScoreRes)