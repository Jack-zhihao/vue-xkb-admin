<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 11:02:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\views\contentManage\bannerManage\bannerManage.vue
-->
<template>
  <div class="bannerManage">
    <pane-head :title="'广告管理'" :borderBottom="true"></pane-head>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="bannerType" label="广告类型"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column label="操作" align="right">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)">修改</el-button>
          </template>
        </el-table-column>
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
import { bannerManage } from '@/api/modules/ContentManage'
export default {
  name: 'bannerManage',
  data () {
    return {
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    edit (row) {
      if (row.title === '官网资讯轮播图') {
        this.$router.push({ name: 'websiteConsultEdit' })
      } else if (row.title === '官网首页轮播图') {
        this.$router.push({ name: 'websiteIndexEdit' })
      } else if (row.title === 'APP首页轮播图') {
        this.$router.push({ name: 'appIndexEdit' })
      } else {
        this.$router.push({ name: 'appIntryEdit' })
      }
    }
  },
  mounted () {
    bannerManage()
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
.bannerManage {
  @include pane_boxShadow;
}
</style>
