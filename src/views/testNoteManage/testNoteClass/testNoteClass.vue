<template>
  <div class="testNoteClass">
    <pane-head :title="'学霸笔记分类'" :borderBottom="true"></pane-head>
    <div class="content">
      <div class="content-left">
        <class-tree ></class-tree>
      </div>
      <div class="content-right">
        <div class="table-data">
          <el-table :data="tableData" stripe width="100%">
            <el-table-column prop="stage" label="阶段"></el-table-column>
            <el-table-column prop="subject" label="学科"></el-table-column>
            <el-table-column prop="creater" label="创建人"></el-table-column>
            <el-table-column prop="createTime" align="center" width="150" label="创建时间"></el-table-column>
            <el-table-column align="right" fixed="right" width="120" label="操作">
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
import { testNoteClass } from '@/api/modules/TestNoteManage'
export default {
  name: 'subjectGuessClass',
  components: {
    classTree
  },
  data () {
    return {
      tableData: [
        {
          name: '字音',
          flei: '语言文字运用',
          jduan: '初中',
          xke: '数学',
          cjren: '羊红群',
          cjsjian: '2019-04-12 16:44:36'
        },
        {
          name: '字音',
          flei: '语言文字运用',
          jduan: '初中',
          xke: '数学',
          cjren: '羊红群',
          cjsjian: '2019-04-12 16:44:36'
        },
        {
          name: '字音',
          flei: '语言文字运用',
          jduan: '初中',
          xke: '数学',
          cjren: '羊红群',
          cjsjian: '2019-04-12 16:44:36'
        },
        {
          name: '字音',
          flei: '语言文字运用',
          jduan: '初中',
          xke: '数学',
          cjren: '羊红群',
          cjsjian: '2019-04-12 16:44:36'
        }
      ],
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
    testNoteClass()
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
.testNoteClass {
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
