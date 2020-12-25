<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:27
 * @LastEditTime: 2020-06-30 15:49:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\components\common\keyWord.vue
-->
<template>
  <div class="keyWord">
    <el-input type="text" v-model="inputWord" ref="inputText" @keyup.enter.native="initWord"></el-input>
    <div class="words" ref="words">
      <div class="word-text">
        <span v-for="(word , i) in words" :key="i">{{word}} <i class="iconfont iconshut_down" @click="delWord(word)"></i></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'keyWord',
  data () {
    return {
      inputWord: '',
      words: []
    }
  },
  methods: {
    initLength () {
      this.$refs.inputText.$el.children[0].style.paddingLeft = this.$refs.words.offsetWidth + 8 + 'px'
    },
    initWord () {
      if (this.inputWord) {
        this.words.push(this.inputWord)
        const _ = this
        setTimeout(function () {
          _.initLength()
          _.inputWord = ''
        }, 20)
      }
    },
    delWord (word) {
      this.$nextTick(function () {
        this.words.splice(this.words.indexOf(word), 1)
        const _ = this
        setTimeout(_.initLength())
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';
.keyWord {
  position: relative;
  &::after {
    content: '请输入关键词，按回车键确定关键词';
    color: $mainTextGray;
    font-size: $fontSize-12;
  }
  .words {
    position: absolute;
    top: 0;
    left: 0;
    font-size: $fontSize-12;
    span {
      display: inline-block;
      background-color: rgba(92, 102, 140, 0.7);
      color: #fff;
      height: 0.2rem;
      line-height: 1.8;
      vertical-align: middle;
      padding: 0 0.04rem;
      border-radius: 3px;
      margin-left: 0.08rem;
      .iconfont {
        font-size: $fontSize-12;
      }
    }
  }
}
</style>
