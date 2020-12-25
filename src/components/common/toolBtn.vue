<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:27
 * @LastEditTime: 2020-06-30 15:51:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\components\common\toolBtn.vue
-->
<template>
  <div>
    <el-button type="text" v-for="(btn , idx) in btns" :key="idx" @click="toolFunc(btn,id)">{{btn}}</el-button>
  </div>
</template>
<script>
export default {
  name: 'toolBtn',
  props: {
    btns: {
      type: Array,
      require: true
    },
    id: {
      type: String,
      require: false
    }
  },
  methods: {
    toolFunc (btn, id) {
      this.$emit('toolFunc', { btn, id })
    }
  }
}
</script>
