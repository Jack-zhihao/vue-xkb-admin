<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-07-02 09:47:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\views\dailyRecordManage\msgSendRule\msgSendRule.vue
-->
<template>
  <div class="msgSendRule">
    <pane-head :title="'消息推送规则'" :borderBottom="true"></pane-head>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">>
        <el-table-column prop="messgeType" label="消息类型"></el-table-column>
        <el-table-column prop="messageSubject" align="center" label="推送角色">
          <template slot-scope="scope">
            <div class="tagBox">
            <span class="tag" v-for="(val,index) in scope.row.messageSubject.split(',')" :key="index">{{val}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="messageRules" label="推送规则"></el-table-column>
        <el-table-column prop="messageCreateTime" align="right" label="创建时间"></el-table-column>
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
import { msgSendRule } from '@/api/modules/DailyRecordManage'
export default {
  name: 'msgSendRule',
  data () {
    return {
      tableData: [],
      currentPage: 5
    }
  },
  mounted () {
    msgSendRule()
      .then(res => {
        window.console.log(res)
        const { data } = res
        this.tableData = data
      })
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.msgSendRule {
  @include pane_boxShadow;
}
</style>
