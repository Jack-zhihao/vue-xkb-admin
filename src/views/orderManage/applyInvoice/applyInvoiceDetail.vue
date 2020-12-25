<template>
  <div class="applyInvoiceDetail">
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
            <p>实际总支付</p>
            <p>5,179.00</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>订单状态</p>
            <p style="color: #19CBA9">已换课</p>
          </el-col>
          <el-col :span="5">
            <p>支付方式</p>
            <p>微信支付</p>
          </el-col>
          <el-col :span="5">
            <p>下单时间</p>
            <p>2019-11-05 12:33:47</p>
          </el-col>
          <el-col :span="5">
            <p>支付时间</p>
            <p>2019-11-05 12:35:10</p>
          </el-col>
          <el-col :span="4">
            <p>差价支付方式</p>
            <p>支付宝支付</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>差价支付时间</p>
            <p>2019-11-05 15:40:35</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pane">
      <pane-head :title="'发票信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>开票金额</p>
            <p>5,179.00</p>
          </el-col>
          <el-col :span="5">
            <p>发票类型</p>
            <p>企业</p>
          </el-col>
          <el-col :span="5">
            <p>发票状态</p>
            <p>已开票</p>
          </el-col>
          <el-col :span="5">
            <p>发票抬头</p>
            <p>广州橘子网络科技有限公司</p>
          </el-col>
          <el-col :span="4">
            <p>税号</p>
            <p>51402992888</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>邮箱</p>
            <p>45962114@qq.com</p>
          </el-col>
          <el-col :span="5">
            <p>发票申请时间</p>
            <p>2019-06-22 18:53:27</p>
          </el-col>
          <el-col :span="5">
            <p>发票编号</p>
            <p>43947154394</p>
          </el-col>
          <el-col :span="5">
            <p>收款地区</p>
            <p>北京</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>备注</p>
            <p>设计工作上最重要的是针对人们习以为常，认为理所当然的事物来做一些思考</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pane">
      <pane-head :title="'发票申请记录'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-table :data="tableData" stripe width="100%" style="padding-top: 0.24rem;">
          <el-table-column prop="fpztai" label="发票状态"></el-table-column>
          <el-table-column prop="kpje" label="开票金额"></el-table-column>
          <el-table-column prop="zsfje" label="总实付金额"></el-table-column>
          <el-table-column prop="fpbhao" label="发票编号"></el-table-column>
          <el-table-column prop="ddztai" label="订单状态"></el-table-column>
          <el-table-column prop="fpsqsjian" width="150" label="发票申请时间"></el-table-column>
          <el-table-column prop="gxsjian" width="150" label="更新时间"></el-table-column>
          <el-table-column prop="gxren" label="更新人"></el-table-column>
          <el-table-column prop="bzhu" label="备注"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'applyInvoiceDetail',
  data () {
    return {
      tableData: [
        {
          fpztai: '已开票',
          kpje: '1,241.00',
          zsfje: '1,241.00',
          fpbhao: '4173849054',
          ddztai: '换课完成',
          fpsqsjian: '2019-04-12 16:44:36',
          gxsjian: '2019-04-12 16:44:36',
          gxren: '羊红群',
          bzhu: ''
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.applyInvoiceDetail {
  .pane {
    @include pane_boxShadow;
    margin-bottom: 0.24rem;
    &:last-child {
      margin: 0;
    }
    .pane-content {
      padding: 0 1.27rem 0.24rem;
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
}
</style>
