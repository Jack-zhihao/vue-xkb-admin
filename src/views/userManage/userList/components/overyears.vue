<!--
 * @Author: zhihao
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-07-07 10:34:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\views\userManage\userList\components\overyears.vue
-->
<template>
  <div class="overyears">
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入试卷标题"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="sjbti" label="试卷标题"></el-table-column>
        <el-table-column prop="sjflei" label="试卷分类"></el-table-column>
        <el-table-column prop="nfen" label="年份"></el-table-column>
        <el-table-column prop="xke" label="学科"></el-table-column>
        <el-table-column prop="xlei" label="类型"></el-table-column>
        <el-table-column prop="llyshu" label="浏览页数"></el-table-column>
        <el-table-column prop="cksjian" label="查看时间"></el-table-column>
      </el-table>
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="100"
        layout="slot, prev, pager, next, jumper"
        :total="1000">
        <span class="el-pagination-info">1/10页&nbsp;总共100条</span>
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'overyears',
  data () {
    return {
      input: '',
      tableData: [
        {
          sjbti: '代数专章试听课',
          sjflei: '自主命题',
          nfen: '2017',
          xke: '数学',
          xlei: '问题',
          llyshu: '1',
          cksjian: '2019-07-16 16:12:37'
        },
        {
          sjbti: '代数专章试听课',
          sjflei: '自主命题',
          nfen: '2017',
          xke: '数学',
          xlei: '问题',
          llyshu: '1',
          cksjian: '2019-07-16 16:12:37'
        },
        {
          sjbti: '代数专章试听课',
          sjflei: '自主命题',
          nfen: '2017',
          xke: '数学',
          xlei: '问题',
          llyshu: '1',
          cksjian: '2019-07-16 16:12:37'
        }
      ],
      currentPage: 5
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
</style>
