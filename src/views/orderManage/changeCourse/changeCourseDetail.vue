<template>
  <div class="changeCourseDetail">
    <div class="pane">
      <pane-head :title="'订单信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>订单号</p>
            <p>347036718326</p>
          </el-col>
          <el-col :span="5">
            <p>用户名</p>
            <p>顾卿</p>
          </el-col>
          <el-col :span="5">
            <p>联系电话</p>
            <p>19815155065</p>
          </el-col>
          <el-col :span="5">
            <p>订单总额</p>
            <p>5,179.00</p>
          </el-col>
          <el-col :span="4">
            <p>实际支付</p>
            <p>5,179.00</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>订单状态</p>
            <p style="color: #19CBA9">待支付</p>
          </el-col>
          <el-col :span="5">
            <p>是否赠送实物</p>
            <p>是</p>
          </el-col>
          <el-col :span="5">
            <p>是否赠送课程</p>
            <p>是</p>
          </el-col>
          <el-col :span="5">
            <p>订单创建时间</p>
            <p>2019-11-05 12:35:10</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pane">
      <pane-head :title="'换课信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>实际差价</p>
            <p>26.00</p>
          </el-col>
          <el-col :span="5">
            <p>申请差价</p>
            <p>26.00</p>
          </el-col>
          <el-col :span="5">
            <p>差价类型</p>
            <p>加价</p>
          </el-col>
          <el-col :span="5">
            <p>换课类型</p>
            <p>客户申请换课</p>
          </el-col>
          <el-col :span="4">
            <p>审核状态</p>
            <p style="color: #19CBA9">已通过</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>申请人</p>
            <p>果冻</p>
          </el-col>
          <el-col :span="5">
            <p>订单创建时间</p>
            <p>2019-11-06 15:05:23</p>
          </el-col>
          <el-col :span="5">
            <p>申请人</p>
            <p>果冻</p>
          </el-col>
          <el-col :span="5">
            <p>差价支付时间</p>
            <p>2019-11-06 15:12:35</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="24">
            <p>换课凭证</p>
            <div class="imgList">
              <el-image :src="cover" width="150"></el-image>
              <el-image :src="cover" width="150"></el-image>
            </div>
          </el-col>
        </el-row>
        <el-row class="info-row border-bottom">
          <el-col :span="24">
            <p>备注</p>
            <p>设计工作上最重要的是针对人们习以为常，认为理所当然的事物来做一些思考</p>
          </el-col>
        </el-row>
        <pane-head :title="'需要更换的已购课程'" class="pane_head_info"></pane-head>
        <el-table :data="tableData" stripe width="100%" class="border-bottom">
          <el-table-column prop="kcmcheng" fixed label="课程名称"></el-table-column>
          <el-table-column prop="zjmcheng" label="专辑名称"></el-table-column>
          <el-table-column prop="jduan" label="阶段"></el-table-column>
          <el-table-column prop="nji" label="年级"></el-table-column>
          <el-table-column prop="xke" label="学科"></el-table-column>
          <el-table-column prop="xcflei" label="课程分类"></el-table-column>
          <el-table-column prop="xsjge" label="销售价格"></el-table-column>
        </el-table>
        <pane-head :title="'更换的课程'" class="pane_head_info"></pane-head>
        <el-table :data="tableData" stripe width="100%">
          <el-table-column prop="kcmcheng" fixed label="课程名称"></el-table-column>
          <el-table-column prop="zjmcheng" label="专辑名称"></el-table-column>
          <el-table-column prop="jduan" label="阶段"></el-table-column>
          <el-table-column prop="nji" label="年级"></el-table-column>
          <el-table-column prop="xke" label="学科"></el-table-column>
          <el-table-column prop="xcflei" label="课程分类"></el-table-column>
          <el-table-column prop="xsjge" label="销售价格"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="pane">
      <pane-head :title="'审核信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <examine-step></examine-step>
      </div>
    </div>
  </div>
</template>
<script>
import examineStep from '@/components/common/examineStep'
import cover from '@/assets/images/defaultCover.png'
export default {
  name: 'changeCourseDetail',
  components: {
    examineStep
  },
  data () {
    return {
      cover,
      tableData: [
        {
          kcmcheng: '没有坑，就先让自己成为萝卜',
          zjmcheng: '今日因，明日果',
          jduan: '初中',
          nji: '初一',
          xke: '生物',
          xcflei: '专题训练',
          xsjge: '4,166.15'
        },
        {
          kcmcheng: '没有坑，就先让自己成为萝卜',
          zjmcheng: '今日因，明日果',
          jduan: '初中',
          nji: '初一',
          xke: '生物',
          xcflei: '专题训练',
          xsjge: '4,166.15'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.changeCourseDetail {
  .pane {
    @include pane_boxShadow;
    margin-bottom: 0.24rem;
    .pane-content {
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
        .imgList {
          margin-top: 0.08rem;
        }
        img {
          width: 1.5rem;
          border-radius: 6px;
          margin-right: 0.08rem;
        }
      }
      .border-bottom {
        padding-bottom: 0.24rem;
        border-bottom: 1px solid $border-color;
      }
    }
  }
}
</style>
