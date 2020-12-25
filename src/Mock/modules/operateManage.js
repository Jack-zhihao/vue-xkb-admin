/* eslint-disable */
/*
 * @Author: zhihao
 * @Date: 2020-06-28 14:55:25
 * @LastEditTime: 2020-06-28 15:12:14
 * @LastEditors: Please set LastEditors
 * @Description: 运营管理 - 模拟接口
 * @FilePath: \xkb-admin\src\Mock\modules\operateManege.js
 */ 

const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200 // 返回的状态码

 /**
  * @description: 运营管理 - 赠送试听课
  * @param {type} 
  * @return: /api/v1/operateManage/freeCourse
  */
 const freeCourseRes = () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    const post = {
      username: Random.cname(),
      courseModulesName: Random.title(),
      courseName: Random.title(),
      stage: ['初中','高中'][Random.natural(0,1)],
      subject: ['数学','语文','英语','地理','政治','物理','生物','化学'][Random.natural(0,7)],
      courseClass: Random.name(),
      studyStatus: ['未开始','学习中','已学习'][Random.natural(0,2)],
      service: Random.cname(),
      createTime: Random.datetime()
    }
    data.push(post)
  }
  return {code, data}
}
Mock.mock('/api/v1/operateManage/freeCourse', 'post', freeCourseRes)