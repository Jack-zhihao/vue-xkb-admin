<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:27
 * @LastEditTime: 2020-07-07 10:12:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\components\common\cellInput.vue
-->
<template>
  <div class="code-input-main">
    <div class="code-input-main-item">{{code[0]}}</div> <span>-</span>
    <div class="code-input-main-item">{{code[1]}}</div> <span>-</span>
    <div class="code-input-main-item">{{code[2]}}</div> <span>-</span>
    <div class="code-input-main-item" style="margin-right: 0">{{code[3]}}</div>
    <input class="code-input-input" v-model="code" maxlength="4" type="text">
  </div>
</template>
<script>
export default {
  name: 'CodeInput',
  data () {
    return {
      code: ''
    }
  },
  methods: {
    getCode () {
      return this.code
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.code-input-input {
  height: 0.32rem;
  position: absolute;
  width: 100%;
  outline: none;
  color: transparent;
  background-color: transparent;
  border: none;
}
.code-input-main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1px;
  >span {
    font-size: $fontSize-16;
    color: $mainTextGray;
  }
}
.code-input-main-item {
  width: 0.36rem;
  height: 0.32rem;
  line-height: 2.4;
  opacity: 0.8;
  margin: 0 6px;
  text-align: center;
  padding-bottom: 0;
  font-size: $fontSize-12;
  color: $mainText;
  border: 1px solid $border-color-heavy;
  border-radius: 6px;
  box-sizing: border-box;
  &:first-child {
    margin-left: 0;
  }
  &:nth-child(4){
    margin-right: 0;
  }
}
</style>
