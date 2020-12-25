<template>
  <div class="overyearsSubjectClass">
    <pane-head :title="'历年真题分类'" :borderBottom="true"></pane-head>
    <div class="content">
      <div class="content-left">
        <class-tree @editNode="editNode" @delNode="delNode"></class-tree>
      </div>
      <div class="content-right">
        <div class="table-data">
          <el-table :data="tableData" stripe width="100%">
            <el-table-column prop="className" label="子分类名称"></el-table-column>
            <el-table-column prop="class" label="分类"></el-table-column>
            <el-table-column prop="stage" label="阶段"></el-table-column>
            <el-table-column prop="subject" label="学科"></el-table-column>
            <el-table-column prop="creater" label="创建人"></el-table-column>
            <el-table-column prop="createTime" width="140" align="center" label="创建时间"></el-table-column>
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
import { overyearsSubjectClass } from '@/api/modules/OveryearsSubjectManage'
import classTree from '@/components/common/classTree'
export default {
  name: 'overyearsSubjectClass',
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
    editNode (node) {
      window.console.log(node)
    },
    delNode (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    edit (scope) {
      window.console.log(scope)
    },
    del (scope) {
      window.console.log(scope)
    }
  },
  mounted () {
    overyearsSubjectClass()
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
.overyearsSubjectClass {
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
