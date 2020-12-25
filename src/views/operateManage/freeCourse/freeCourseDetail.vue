<template>
  <div class="freeCourseDetail">
    <div class="pane">
      <pane-head :title="'用户信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>用户名</p>
            <p>杨大力</p>
          </el-col>
          <el-col :span="5">
            <p>手机号</p>
            <p>15869547485</p>
          </el-col>
          <el-col :span="5">
            <p>账号</p>
            <p>15869547874</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pane">
      <pane-head :title="'课程信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>课程名称</p>
            <p>代数专章试听课</p>
          </el-col>
          <el-col :span="5">
            <p>课程模块</p>
            <p>代数专章试听课</p>
          </el-col>
          <el-col :span="5">
            <p>高中</p>
            <p>课程阶段</p>
          </el-col>
          <el-col :span="5">
            <p>学科分类</p>
            <p>数学</p>
          </el-col>
          <el-col :span="4">
            <p>课程分类</p>
            <p>试听</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>讲师</p>
            <p>张悦</p>
          </el-col>
          <el-col :span="5">
            <p>销售价格</p>
            <p>2,000.00</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="24">
            <p>备注</p>
            <p>设计工作上最重要的是针对人们习以为常，认为理所当然的事物来做一些思考</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pane">
      <pane-head :title="'视频信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <pane-head :title="'已选专辑'" class="pane_head_info"></pane-head>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="videoName" label="视频名称"></el-table-column>
          <el-table-column prop="progress" align="center" width="220" label="观看进度"></el-table-column>
          <el-table-column prop="times" align="center" width="220" label="观看次数"></el-table-column>
          <el-table-column prop="overdue" align="center" width="100" label="是否过期"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'freeCourseDetail',
  data () {
    return {
      tableData: [
        {
          videoName: '当你只是需要一根针时，千万不要去磨铁棒',
          progress: '48%',
          times: '2',
          overdue: '否'
        },
        {
          videoName: '你感觉不舒服的时候，就是成长的时候',
          progress: '0',
          times: '2',
          overdue: '是'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.freeCourseDetail {
  .pane {
    @include pane_boxShadow;
    margin-bottom: 0.24rem;
    &:last-child {
      margin: 0;
    }
    .info-row {
      margin-top: 0.24rem;
      &.info-row-last {
        padding-bottom: 0.24rem;
        border-bottom: 1px solid $border-color;
      }
      p {
        text-align: left;
        line-height: 1.2;
        &:first-child {
          color: $mainTextGray2;
        }
        &:nth-child(2) {
          font-size: $fontSize-14;
          margin-top: 0.08rem;
          padding-right: 0.16rem;
        }
      }

      img {
        width: 1.5rem;
        border-radius: 6px;
      }
    }
  }
}
</style>
