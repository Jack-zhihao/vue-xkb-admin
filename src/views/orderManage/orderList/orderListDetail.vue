<template>
  <div class="orderListDetail">
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
            <p>订单状态</p>
            <p style="color: #FF5555">待支付</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>订单来源</p>
            <p>后台创建</p>
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
            <p>支付方式</p>
            <p>微信支付</p>
          </el-col>
          <el-col :span="4">
            <p>创建人</p>
            <p>杨大力</p>
          </el-col>
        </el-row>
        <el-row class="info-row info-row-last">
          <el-col :span="5">
            <p>创建时间</p>
            <p>2019-11-05 12:33:47</p>
          </el-col>
        </el-row>
        <pane-head class="pane_head_info" :title="'收货信息'">
          <div slot="tool" class="tool-term">
            <el-button>修改</el-button>
          </div>
        </pane-head>
        <el-row class="info-row" style="margin: 0;">
          <el-col :span="5">
            <p>收货人</p>
            <p>万良璐</p>
          </el-col>
          <el-col :span="5">
            <p>联系电话</p>
            <p>19815155065</p>
          </el-col>
          <el-col :span="14">
            <p>收货地址</p>
            <p>重庆 重庆市 北碚区 友爱大道978号</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pane" style="margin-top: .24rem">
      <pane-head :title="'购买信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <pane-head class="pane_head_info" :title="'已选专辑'"></pane-head>
        <el-table :data="tableData" stripe width="100%">
          <el-table-column prop="zjmcheng" width="220" label="专辑名称"></el-table-column>
          <el-table-column prop="jduan" label="阶段"></el-table-column>
          <el-table-column prop="nji" label="年级"></el-table-column>
          <el-table-column prop="xke" label="学科"></el-table-column>
          <el-table-column prop="kcheng" label="课程分类"></el-table-column>
          <el-table-column prop="xsjge" label="销售价格"></el-table-column>
          <el-table-column prop="kcshu" align="center" label="课程数"></el-table-column>
          <el-table-column label="操作" align="right">
            <template slot-scope="scope">
              <el-button type="text" :id="scope.row.kcshu">查看课程</el-button>
            </template>
          </el-table-column>
        </el-table>
        <pane-head class="pane_head_info" :title="'已选课程'" style="margin-top: 0.08rem"></pane-head>
        <el-table :data="tableData" stripe width="100%">
          <el-table-column prop="zjmcheng" width="220" label="课程名称"></el-table-column>
          <el-table-column prop="jduan" label="专辑名称"></el-table-column>
          <el-table-column prop="nji" label="阶段"></el-table-column>
          <el-table-column prop="xke" label="年级"></el-table-column>
          <el-table-column prop="kcheng" label="学科"></el-table-column>
          <el-table-column prop="kcheng" label="课程分类"></el-table-column>
          <el-table-column prop="xsjge" label="销售价格"></el-table-column>
          <el-table-column label="操作" align="right">
            <template slot-scope="scope">
              <el-button type="text" :id="scope.row.kcshu">查看视频</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="summry">
          <div>共选择了
            <span>1</span>个课程
          </div>
          <div>
            <p>
              <span>订单原价：</span>
              <span>5,279</span>
            </p>
            <p>
              <span>订单折扣：</span>
              <span>-100.00(8 折)</span>
            </p>
            <p>
              <span>订单总价：</span>
              <span>5,179</span>
            </p>
            <p>
              <span style="line-height: 2.4">应付款：</span>
              <span>5179.00</span>
            </p>
          </div>
        </div>
         <pane-head class="pane_head_info" :title="'赠送课程'" :title2="'（购买课程满3个送3个）'"></pane-head>
        <el-table :data="tableData" stripe width="100%" class="gift-course-table">
          <el-table-column prop="zjmcheng" width="220" label="课程名称"></el-table-column>
          <el-table-column prop="jduan" label="专辑名称"></el-table-column>
          <el-table-column prop="nji" label="阶段"></el-table-column>
          <el-table-column prop="xke" label="年级"></el-table-column>
          <el-table-column prop="kcheng" label="学科"></el-table-column>
          <el-table-column prop="kcheng" label="课程分类"></el-table-column>
          <el-table-column prop="xsjge" label="销售价格"></el-table-column>
          <el-table-column label="操作" align="right">
            <template slot-scope="scope">
              <el-button type="text" :id="scope.row.kcshu">查看视频</el-button>
            </template>
          </el-table-column>
        </el-table>
        <pane-head class="pane_head_info" :title="'赠送实物'" :title2="'（订单总价满3000，送iPad一部）'"></pane-head>
        <div class="gift-cover">
          <img :src="cover" alt="礼品">
          <p>iPad  10.2英寸</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cover from '@/assets/images/defaultCover.png'
export default {
  name: 'orderListDetail',
  data () {
    return {
      cover,
      tableData: [
        {
          zjmcheng: '当你只是需要一根针时，千万不要去磨铁棒',
          jduan: '初中',
          nji: '初一',
          xke: 'xke',
          kcheng: '专题训练',
          xsjge: '6,729.24',
          kcshu: '2'
        },
        {
          zjmcheng: '当你只是需要一根针时，千万不要去磨铁棒',
          jduan: '初中',
          nji: '初一',
          xke: 'xke',
          kcheng: '专题训练',
          xsjge: '6,729.24',
          kcshu: '2'
        },
        {
          zjmcheng: '当你只是需要一根针时，千万不要去磨铁棒',
          jduan: '初中',
          nji: '初一',
          xke: 'xke',
          kcheng: '专题训练',
          xsjge: '6,729.24',
          kcshu: '2'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.orderListDetail {
  .pane {
    @include pane_boxShadow;
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

        img {
          width: 1.5rem;
          border-radius: 6px;
        }
      }
      .summry {
        display: flex;
        justify-content: space-between;
        padding: 0.16rem 0 0.24rem;
        border-bottom: 1px solid $border-color;
        > div {
          color: $mainTextGray2;
          &:first-child {
            span {
              color: $mainText;
            }
          }
          &:last-child {
            > p {
              text-align: right;
              display: flex;
              justify-content: space-between;
              padding-top: 0.08rem;
              span:first-child {
                display: inline-block;
                width: 0.8rem;
              }
              span:last-child {
                display: inline-block;
                color: $mainText;
              }
              &:last-child {
                padding-top: 0.06rem;
                span:last-child {
                  font-size: $fontSize-20;
                  color: $red;
                  &:before {
                    content: "￥";
                    font-size: $fontSize-14;
                  }
                }
              }
            }
          }
        }
      }
      .gift-course-table {
        padding-bottom: 0.24rem;
        border-bottom: 1px solid $border-color;
      }
      .gift-cover {
        width: 1.5rem;
        text-align: center;
        img {
          width: 100%;
        }
        >p {
          margin-top: 0.08rem;
        }
      }
    }
  }
}
</style>
