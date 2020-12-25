<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 10:24:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\views\userManage\userList\components\visitRecord.vue
-->
<template>
  <div class="visitRecord">
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="czren" label="操作人"></el-table-column>
        <el-table-column prop="yxdu" label="意向度"></el-table-column>
        <el-table-column prop="xchfsjian" label="下次回访时间"></el-table-column>
        <el-table-column prop="bzhu" label="备注"></el-table-column>
      </el-table>
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="100"
        layout="slot, prev, pager, next, jumper"
        :total="1000"
      >
        <span class="el-pagination-info">1/10页&nbsp;总共100条</span>
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'visitRecord',
  data () {
    return {
      tableData: [
        {
          czren: '销售一',
          yxdu: '高',
          xchfsjian: '2019-12-18',
          bzhu: '用户觉得课程价格略高'
        },
        {
          czren: '销售一',
          yxdu: '高',
          xchfsjian: '2019-12-18',
          bzhu: '用户觉得课程价格略高'
        },
        {
          czren: '销售一',
          yxdu: '高',
          xchfsjian: '2019-12-18',
          bzhu: '用户觉得课程价格略高'
        },
        {
          czren: '销售一',
          yxdu: '高',
          xchfsjian: '2019-12-18',
          bzhu: '用户觉得课程价格略高'
        }
      ],
      currentPage: 5
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
</style>
