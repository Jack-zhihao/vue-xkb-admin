<template>
  <div class="invoiceHandleDetail">
    <div class="detail">
      <pane-head :title="'订单信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>订单号</p>
            <p>15481202475556</p>
          </el-col>
          <el-col :span="5">
            <p>用户名</p>
            <p>杨维以</p>
          </el-col>
          <el-col :span="5">
            <p>联系电话</p>
            <p>19862833125</p>
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
            <p class="status">换课完成</p>
          </el-col>
          <el-col :span="5">
            <p>支付方式</p>
            <p>微信支付</p>
          </el-col>
          <el-col :span="5">
            <p>下单时间</p>
            <p>2019-12-04 18:53:27</p>
          </el-col>
          <el-col :span="5">
            <p>支付时间</p>
            <p>2019-12-04 18:55:34</p>
          </el-col>
          <el-col :span="4">
            <p>差价支付方式</p>
            <p>支付宝支付</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>差价支付时间</p>
            <p>2019-12-05 09:00:21</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="detail">
      <pane-head :title="'发票信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>开票金额</p>
            <p>1,900.00</p>
          </el-col>
          <el-col :span="5">
            <p>发票类型</p>
            <p>企业</p>
          </el-col>
          <el-col :span="5">
            <p>发票状态</p>
            <p class="status">已开票</p>
          </el-col>
          <el-col :span="5">
            <p>发票抬头</p>
            <p>广州橘子网络科技有限公司</p>
          </el-col>
          <el-col :span="4">
            <p>税号</p>
            <p>6547895ZA00</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>邮箱</p>
            <p>45962114@qq.com</p>
          </el-col>
          <el-col :span="5">
            <p>发票申请时间</p>
            <p>2019-12-04 18:53:27</p>
          </el-col>
          <el-col :span="5">
            <p>发票编号</p>
            <p>654133565</p>
          </el-col>
          <el-col :span="5">
            <p>收款地区</p>
            <p>北京</p>
          </el-col>
          <el-col :span="4">
            <p>差价支付方式</p>
            <p>支付宝支付</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="24">
            <p>备注</p>
            <p>一个方案是一流的 idea 加三流的实施；另外一个方案，一流的实施，三流的 idea，哪个好？我选一流的实施，三流的 idea</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="detail">
      <pane-head :title="'发票申请记录'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-table :data="tableData" width="100%">
          <el-table-column prop="fpztai" align="center" width="80px" label="发票状态"></el-table-column>
          <el-table-column prop="kpje" width="120" label="开票金额"></el-table-column>
          <el-table-column prop="zsfje" width="100" label="总实付金额"></el-table-column>
          <el-table-column prop="fpbhao" width="100" label="发票编号"></el-table-column>
          <el-table-column prop="ddbhao" width="80" label="订单状态"></el-table-column>
          <el-table-column prop="fpsqsjian" width="150" label="发票申请时间"></el-table-column>
          <el-table-column prop="gxsjian" width="150" label="更新时间"></el-table-column>
          <el-table-column prop="gxren" width="80" label="更新人"></el-table-column>
          <el-table-column prop="bzhu" width="260" label="备注"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'invoiceHandleDetail',
  data () {
    return {
      tableData: [
        {
          fpztai: '已开票',
          kpje: '1,241.00',
          zsfje: '1,241.00',
          fpbhao: '4173849054',
          ddbhao: '换课完成',
          fpsqsjian: '2019-04-12 16:44:36',
          gxsjian: '2019-04-12 16:44:36',
          gxren: '羊红群',
          bzhu: '我有一只小毛驴，从来也不骑'
        },
        {
          fpztai: '已开票',
          kpje: '1,241.00',
          zsfje: '1,241.00',
          fpbhao: '4173849054',
          ddbhao: '换课完成',
          fpsqsjian: '2019-04-12 16:44:36',
          gxsjian: '2019-04-12 16:44:36',
          gxren: '羊红群',
          bzhu: '我有一只小毛驴，从来也不骑'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.invoiceHandleDetail {
  .detail {
    @include pane_boxShadow;
    margin-bottom: 0.24rem;
    .pane-content {
      box-sizing: border-box;
      .info-row {
        margin-top: 0.24rem;
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &.status {
            color: $green;
          }
        }
        .el-button {
          margin-top: 0.08rem;
          font-size: $fontSize-14;
          &.el-button--text {
            font-size: $fontSize-12;
          }
        }
        img {
          width: 1.5rem;
          border-radius: 6px;
        }
      }
     .el-table {
          padding: 0.24rem 0 0;
        }
    }
  }
}
</style>
