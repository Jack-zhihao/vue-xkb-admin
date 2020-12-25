<template>
  <div class="review">
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入测评题名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="cptmcheng" width="160" label="测评题名称"></el-table-column>
        <el-table-column prop="tmsliang" label="题目数量" align="center"></el-table-column>
        <el-table-column prop="zqsliang" width="80" align="center" label="正确数量"></el-table-column>
        <el-table-column prop="cwsliang" width="80" align="center" label="错误数量"></el-table-column>
        <el-table-column prop="zfen" width="80" align="center" label="总分"></el-table-column>
        <el-table-column prop="dfen" width="80" align="center" label="得分"></el-table-column>
        <el-table-column prop="dji" label="等级"></el-table-column>
        <el-table-column prop="dtztai" label="答题状态"></el-table-column>
        <el-table-column prop="yshi" label="用时"></el-table-column>
        <el-table-column prop="dtkssjian" width="160" label="答题开始时间"></el-table-column>
        <el-table-column prop="dtjssjian" width="160" label="答题结束时间"></el-table-column>
        <el-table-column label="操作" width="220" align="right" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="viewTestReport(scope.row)">查看练习报告</el-button>
            <el-button type="text" @click="viewAnswer(scope.row)">查看答题卡</el-button>
            <el-button type="text" @click="detail(scope.row)">详情</el-button>
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
    <el-dialog  :modal-append-to-body="true" :append-to-body="true" title="提示" class="hideHead" :visible.sync="dialogVisible__detail" width="60%">
      <pane-head :title="'详情'" class="dialog_head">
        <div slot="tool" class="tool-term">
          <i class="close iconfont iconshut_down" @click="dialogVisible__detail= false"></i>
        </div>
      </pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="6">
            <p>测评题名称</p>
            <p>代数专章试听课</p>
          </el-col>
          <el-col :span="6">
            <p>分类</p>
            <p>高中阶段 > 高三 > 语文 > 实战演练</p>
          </el-col>
          <el-col :span="6">
            <p>题目数量</p>
            <p>20</p>
          </el-col>
          <el-col :span="6">
            <p>正确数量</p>
            <p>18</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="6">
            <p>错误数量</p>
            <p>2</p>
          </el-col>
          <el-col :span="6">
            <p>总分</p>
            <p>100</p>
          </el-col>
          <el-col :span="6">
            <p>得分</p>
            <p>95</p>
          </el-col>
          <el-col :span="6">
            <p>等级</p>
            <p>菜鸟小生</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="6">
            <p>答题状态</p>
            <p>已完成</p>
          </el-col>
          <el-col :span="6">
            <p>答题开始时间</p>
            <p>2019-06-28 19:06:12</p>
          </el-col>
          <el-col :span="6">
            <p>答题结束时间</p>
            <p>2019-06-28 19:06:12</p>
          </el-col>
        </el-row>
      </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="第一题" name="1"></el-collapse-item>
        <el-collapse-item title="第二题" name="2"></el-collapse-item>
      </el-collapse>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible__detail = false">确 定</el-button>
        <el-button type="info" @click="dialogVisible__detail = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'review',
  data () {
    return {
      input: '',
      tableData: [
        {
          cptmcheng: '代数专章试听课',
          tmsliang: '20',
          zqsliang: '18',
          cwsliang: '2',
          zfen: '100',
          dfen: '95',
          dji: '菜鸟小生',
          dtztai: '已完成',
          yshi: '19:06:12',
          dtkssjian: '2019-06-28 19:06:12',
          dtjssjian: '2019-06-28 19:06:12'
        },
        {
          cptmcheng: '代数专章试听课',
          tmsliang: '20',
          zqsliang: '18',
          cwsliang: '2',
          zfen: '100',
          dfen: '95',
          dji: '菜鸟小生',
          dtztai: '已完成',
          yshi: '19:06:12',
          dtkssjian: '2019-06-28 19:06:12',
          dtjssjian: '2019-06-28 19:06:12'
        },
        {
          cptmcheng: '代数专章试听课',
          tmsliang: '20',
          zqsliang: '18',
          cwsliang: '2',
          zfen: '100',
          dfen: '95',
          dji: '菜鸟小生',
          dtztai: '已完成',
          yshi: '19:06:12',
          dtkssjian: '2019-06-28 19:06:12',
          dtjssjian: '2019-06-28 19:06:12'
        }
      ],
      currentPage: 5,
      activeNames: 1,
      dialogVisible__detail: false
    }
  },
  methods: {
    viewTestReport (row) {
      window.console.log(row)
    },
    viewAnswer (row) {
      window.console.log(row)
    },
    detail (row) {
      this.dialogVisible__detail = true
      window.console.log(row)
    },
    handleChange () {}
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.review {
}
</style>
