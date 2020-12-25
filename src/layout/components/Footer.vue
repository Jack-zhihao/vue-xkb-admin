<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:27
 * @LastEditTime: 2020-06-30 15:31:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\layout\components\Footer.vue
-->
<template>
  <div class="footer"><i></i>广州学魁榜教育科技有限公司</div>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.footer {
  color: $mainTextGray2;
  font-size: $fontSize-12;
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0 0.32rem;
  font-family: $fontFamiy-Ios-Medium;
  text-align: right;
  i {
    display: inline-block;
    width: 0.16rem;
    height: 0.16rem;
    background-image: url('../../assets/images/logo.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 0.04rem;
    vertical-align: text-bottom;
  }
}
</style>
