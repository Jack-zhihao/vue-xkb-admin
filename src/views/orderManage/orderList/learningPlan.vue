<template>
  <div class="learningPlan">
    <pane-head :title="'学生姓名：张小志'" :borderBottom="true">
      <div slot="tool" class="tool-term">
        <el-button type="primary" @click="edit">编辑学习计划</el-button>
        <el-button type="primary" @click="dialogVisible = !dialogVisible">预览</el-button>
        <el-button type="info">下载附件</el-button>
        <el-button type="info">下载学习计划</el-button>
        <el-button type="info">下载学习情况</el-button>
      </div>
    </pane-head>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column type="selection" width="40px"></el-table-column>
        <el-table-column prop="xke" width="60px" label="学科"></el-table-column>
        <el-table-column prop="kcmkbti" width="120px" label="课程模块标题"></el-table-column>
        <el-table-column prop="kcbti" width="120px" label="课程标题"></el-table-column>
        <el-table-column prop="kcjjie" label="课程简介"></el-table-column>
        <el-table-column prop="jhxxsjian" width="128px" label="计划学习时间"></el-table-column>
        <el-table-column prop="xxztai" align="center" width="80px" label="学习状态"></el-table-column>
        <el-table-column prop="sfylxi" align="center" width="80px" label="是否已练习"></el-table-column>
        <el-table-column prop="xxjdu" align="center" width="80px" label="学习进度"></el-table-column>
        <el-table-column prop="bzhu" label="备注"></el-table-column>
      </el-table>
    </div>
    <el-dialog  :modal-append-to-body="true"
      :append-to-body="true"
      class="hideHead"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <pane-head :nav="['学习计划','学习情况']" class="dialog_head">
        <div slot="tool" class="tool-term">
          <i class="close iconfont iconshut_down" @click="dialogVisible= !dialogVisible"></i>
        </div>
      </pane-head>
      <!-- <h2>学习计划</h2> -->
      <div class="table-data">
        <div class="title">
          <span>张小志&nbsp;</span>同学，根据你的情况，为你安排的学习计划如下：
        </div>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="xke" label="学科" width="60"></el-table-column>
          <el-table-column prop="kcmkbti" label="课程模块标题" width="160"></el-table-column>
          <el-table-column prop="kcbti" label="课程标题"  width="160"></el-table-column>
          <el-table-column prop="kcjjie" label="课程简介"></el-table-column>
          <el-table-column prop="jhxxsjian" fixed="right" width="240" label="计划学习时间"></el-table-column>
        </el-table>
        <div class="summry">
          <div>
            <p>如有问题，请加微信&nbsp;difg123&nbsp;咨询</p>
            <p class="lightColor">提示：学习时一定要课前预习课件，课后独立完成课件问题与课后习题</p>
          </div>
          <div>
            <p>学习规划师编号：U42841</p>
            <p>2019年11月19日</p>
          </div>
        </div>
      </div>
      <div class="Logo">
        <img :src="logoCover" alt="logo">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">下载学习计划</el-button>
        <el-button type="info" @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import logoCover from '@/assets/images/logo.png'
export default {
  name: 'learningPlan',
  data () {
    return {
      logoCover,
      tableData: [
        {
          xke: '数学',
          kcmkbti: '几何解题技巧',
          kcbti: '几何解题技巧',
          kcjjie: '有些事情想想难，其实只要行动起来，也就解决了',
          jhxxsjian: '2019-04-12 16:44 至 2019-04-13 22:24',
          xxztai: '未开始',
          sfylxi: '否',
          xxjdu: '0%',
          bzhu: '我有一只小毛驴，从来也不骑'
        },
        {
          xke: '数学',
          kcmkbti: '几何解题技巧',
          kcbti: '几何解题技巧',
          kcjjie: '有些事情想想难，其实只要行动起来，也就解决了',
          jhxxsjian: '2019-04-12 16:44 至 2019-04-13 22:24',
          xxztai: '未开始',
          sfylxi: '否',
          xxjdu: '0%',
          bzhu: '我有一只小毛驴，从来也不骑'
        },
        {
          xke: '数学',
          kcmkbti: '几何解题技巧',
          kcbti: '几何解题技巧',
          kcjjie: '有些事情想想难，其实只要行动起来，也就解决了',
          jhxxsjian: '2019-04-12 16:44 至 2019-04-13 22:24',
          xxztai: '未开始',
          sfylxi: '否',
          xxjdu: '0%',
          bzhu: '我有一只小毛驴，从来也不骑'
        }
      ],
      dialogVisible: false
    }
  },
  methods: {
    edit () {
      this.$router.push({ name: 'learningPlanEdit' })
    },
    handleClose () {}
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.learningPlan {
  @include pane_boxShadow;
  .el-dialog {
    h2 {
      font-size: 0.28rem;
      text-align: center;
      line-height: 1;
      padding: 0.32rem 0;
    }
    .table-data {
      padding: 0;
      .title {
        font-size: $fontSize-12;
        padding-bottom: 0.24rem;
        > span {
          font-size: $fontSize-16;
          font-weight: 600;
        }
      }
    }
    .summry {
      display: flex;
      justify-content: space-between;
      color: $mainText;
      padding-top: 0.24rem;
      >div:last-child{
        text-align: right;
      }
      /deep/ p {
        line-height: 1.8;
        &.lightColor {
          color: $mainTextGray;
        }
      }
    }
    .Logo {
      text-align: right;
      padding: 0.16rem 0 0.24rem;
      img {
        width: 1.8rem;
      }
    }
  }
}
</style>
