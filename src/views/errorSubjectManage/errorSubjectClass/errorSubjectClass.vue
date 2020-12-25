<!--
 * @Author: your name
 * @Date: 2020-03-31 11:14:54
 * @LastEditTime: 2020-06-30 12:19:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin\src\views\errorSubjectManage\errorSubjectClass\errorSubjectClass.vue
-->
<template>
  <div class="errorSubjectClass">
    <pane-head :title="'错题本分类'" :borderBottom="true"></pane-head>
    <div class="content">
      <div class="content-left">
        <class-tree ></class-tree>
      </div>
      <div class="content-right">
        <div class="table-data">
          <el-table :data="tableData" stripe width="100%">
            <el-table-column prop="className" width="120" label="课程分类名称"></el-table-column>
            <el-table-column prop="stage" label="阶段"></el-table-column>
            <el-table-column prop="subject" label="学科"></el-table-column>
            <el-table-column prop="creater" label="创建人"></el-table-column>
            <el-table-column prop="createTime" width="150" align="center" label="创建时间"></el-table-column>
            <el-table-column align="right" width="100" fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button type="text" @click="edit(scope)">修改</el-button>
                <el-button type="text" @click="del(scope)">删除</el-button>
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
    </div>
  </div>
</template>
<script>
import classTree from '@/components/common/classTree'
import { errorSubjectClass } from '@/api/modules/ErrorSubjectManage'
export default {
  name: 'errorSubjectClass',
  components: {
    classTree
  },
  data () {
    return {
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    edit (scope) {
      window.console.log(scope)
    },
    del (scope) {
      window.console.log(scope)
    }
  },
  mounted () {
    errorSubjectClass()
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
.errorSubjectClass {
  @include pane_boxShadow;
  .content {
    display: flex;
    justify-content: space-between;
    min-height: 2rem;
    .content-left {
      width: 35%;
      border-right: 1px solid $border-color;
      min-width: 2rem;
      box-sizing: border-box;
    }
    .content-right {
      width: 65%;
      height: 100%;
      min-width: calc(100% - 3rem);
    }
  }

}
</style>
