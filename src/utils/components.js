/*
 * @Author: zhihao
 * @Date: 2019-12-11 11:04:15
 * @LastEditTime: 2020-07-08 14:48:19
 * @LastEditors: Please set LastEditors
 * @Description: 全局注册组件
 * @FilePath: \app\src\utils\components.js
 */
/**
 * @description: 全局头部pane-head
 */
import paneHead from '@/components/common/paneHead'
export default {
  install (Vue) {
    Vue.component('pane-head', paneHead)
  }
}
