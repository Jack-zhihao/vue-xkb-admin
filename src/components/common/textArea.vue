<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:27
 * @LastEditTime: 2020-07-08 14:48:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\components\common\textArea.vue
-->
<template>
  <div class="textArea">
    <el-input type="textarea" :rows="2" placeholder="请输入内容" maxLength="200" v-model="value"></el-input>
    <span class="limit">{{limit}}</span>
  </div>
</template>
<script>
export default {
  name: 'textArea',
  props: {
    textarea: {
      type: String,
      default: 'hello world'
    }
  },
  data () {
    return {
      value: this.textarea,
      limit: `${this.textarea.length}/200`
    }
  },
  methods: {
    pullTextarea (textarea) {
      this.$parent.textarea = textarea
    }
  },
  watch: {
    value (newVal) {
      this.limit = `${String(newVal).length}/200`
      this.$emit('update', newVal)
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';
.textArea {
  font-size: $fontSize-12;
  color: $mainText;
  position: relative;
  line-height: 1.4;
  &.el-from-item-textArea {
    .el-textarea {
      height: auto !important;
    }
  }
  .el-textarea {
    height: 1.3rem;
    textarea {
      height: 100%;
      padding-bottom: 0.2rem;
      font-size: $fontSize-12;
    }
  }
  .limit {
    position: absolute;
    bottom: 0.05rem;
    right: 0.15rem;
    color: $mainTextGray;
  }
}
.el-form-item__content {
  .textArea {
    .el-textarea {
      height: auto;
    }
  }
}
</style>
