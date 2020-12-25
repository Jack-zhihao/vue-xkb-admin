<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 10:19:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\views\userManage\userList\userListDetail.vue
-->
<template>
  <div class="userListDetail">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="headFunc"></pane-head>
    <template v-if="nav[navIdx] === '用户信息'"><userInfo></userInfo></template>
    <template v-if="nav[navIdx] === '订单信息'"><orderInfo></orderInfo></template>
    <template v-if="nav[navIdx] === '赠送课听课'"><audition></audition></template>
    <template v-if="nav[navIdx] === '测评题'"><review></review></template>
    <template v-if="nav[navIdx] === '历年真题'"><overyears></overyears></template>
    <template v-if="nav[navIdx] === '命题猜想'"><guessClass></guessClass></template>
    <template v-if="nav[navIdx] === '错题本'"><errorClass></errorClass></template>
    <template v-if="nav[navIdx] === '学霸笔记'"><testNote></testNote></template>
    <template v-if="nav[navIdx] === '回访记录'"><visitRecord></visitRecord></template>
  </div>
</template>
<script>
import userInfo from './components/userInfo'
import orderInfo from './components/orderInfo'
import audition from './components/audition'
import review from './components/review'
import overyears from './components/overyears'
import guessClass from './components/guessClass'
import errorClass from './components/errorClass'
import testNote from './components/testNote'
import visitRecord from './components/visitRecord'
export default {
  name: 'userListDetail',
  components: {
    userInfo,
    orderInfo,
    audition,
    review,
    overyears,
    guessClass,
    errorClass,
    testNote,
    visitRecord
  },
  data () {
    return {
      nav: ['用户信息', '订单信息', '赠送课听课', '测评题', '历年真题', '命题猜想', '错题本', '学霸笔记', '回访记录'],
      navIdx: 0
    }
  },
  methods: {
    headFunc (index) {
      this.navIdx = Number(index)
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.userListDetail {
  @include pane_boxShadow
}
</style>
