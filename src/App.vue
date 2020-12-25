<!--
 * @Author: your name
 * @Date: 2019-11-27 18:23:02
 * @LastEditTime: 2020-07-02 14:53:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\App.vue
-->
<template>
  <div id="app" ref="appView">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'appView'
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
html , body {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  text-align: left;
  color: $mainText;
  height: 100%;
  font-size: $fontSize-12;
  font-family: $fontFamiy-Ios-Light
}
/* 进度条颜色 */
#nprogress .bar {
  background: #0F6FFF !important;
}
</style>
