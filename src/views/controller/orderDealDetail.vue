<template>
  <div class="orderDealDetail">
    <pane-head :title="'订单处理详情'" :borderBottom="true"></pane-head>
    <el-row class="order-summary">
      <el-col :span="6" class="summary">
        <div class="total">
          <div>
            <p>修改订单</p>
            <p>23</p>
          </div>
          <span class="icon iconfont iconchange_orders"></span>
        </div>
        <div class="detail">
          <div>
            <p>待审核</p>
            <p>3</p>
          </div>
          <div>
            <p>审核中</p>
            <p>2</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="summary">
        <div class="total">
          <div>
            <p>换课订单</p>
            <p>11</p>
          </div>
          <span class="icon iconfont iconlesson_orders"></span>
        </div>
        <div class="detail">
          <div>
            <p>待审核</p>
            <p>3</p>
          </div>
          <div>
            <p>审核中</p>
            <p>2</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="summary">
        <div class="total">
          <div>
            <p>退课订单</p>
            <p>64</p>
          </div>
          <span class="icon iconfont iconback_orders"></span>
        </div>
        <div class="detail">
          <div>
            <p>退款金额</p>
            <p>￥2654</p>
          </div>
          <div>
            <p>待审核</p>
            <p>3</p>
          </div>
          <div>
            <p>审核中</p>
            <p>2</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="summary">
        <div class="total">
          <div>
            <p>0元换课订单</p>
            <p>6</p>
          </div>
          <span class="icon iconfont iconzero_orders"></span>
        </div>
      </el-col>
    </el-row>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入订单号"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入联系电话"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择审核状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择所属部门">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition condition--date">
        <el-select v-model="value" clearable placeholder="本日">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-date-picker v-model="value1" type="date" placeholder="请选择日期"></el-date-picker>
      </el-col>
      <el-col :span="4" class="condition">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <pane-head :nav="['修改订单', '换课订单', '退课订单', '0元换课订单']" class="pane-head-little"></pane-head>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="date" label="订单号"></el-table-column>
        <el-table-column prop="name" label="联系电话"></el-table-column>
        <el-table-column prop="name" label="订单总价"></el-table-column>
        <el-table-column prop="name" label="修改金额"></el-table-column>
        <el-table-column prop="name" label="差价"></el-table-column>
        <el-table-column prop="name" label="收款金额"></el-table-column>
        <el-table-column prop="examine" label="审核状态">
          <template slot-scope="scope">
            <span :style="'color:'+ statusColor[scope.row.examine]">{{scope.row.examine}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="客服"></el-table-column>
        <el-table-column prop="name" label="所属部门"></el-table-column>
        <el-table-column prop="name" label="修改时间"></el-table-column>
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
</template>
<script>
export default {
  name: 'orderDealDetail',
  data () {
    return {
      statusColor: { 待审核: '#FF5555', 审核中: '#FFAA43', 已通过: '#19CBA9' },
      input: '',
      value: '',
      value1: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          number: 1,
          examine: '待审核'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          number: 2,
          examine: '已通过'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          number: 3,
          examine: '待审核'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          number: 4,
          examine: '审核中'
        }
      ],
      currentPage: 5
    }
  },
  methods: {
    examine (row) {
      switch (row.examine) {
        case '待审核':
          return `<span style='color: #FF5555'>${row.examine}</span>`
        case '审核中':
          return `<span style='color: #FFAA43'>${row.examine}</span>`
        case '已通过':
          return `<span style='color: #19CBA9'>${row.examine}</span>`
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.orderDealDetail {
  @include pane_boxShadow;
  .order-summary {
    display: flex;
    justify-content: space-evenly;
    padding: 0.24rem 0.16rem 0;
    .summary {
      margin-right: 0.16rem;
      border-radius: 10px;
      border: 1px solid $border-color;
      height: 1.68rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      @include clearDistance;
      .total {
        height: 1rem;
        padding: 0.16rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        p {
          &:first-child {
            font-size: $fontSize_14;
            color: $mainTextGray;
          }
          &:last-child {
            font-size: 0.28rem;
          }
        }
      }
      .detail {
        height: calc(100% - 1rem);
        border-top: 1px solid $border-color;
        display: flex;
        justify-content: space-around;
        > div {
          text-align: center;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          p {
            line-height: 1;
            &:first-child {
              font-size: $fontSize-12;
              color: $mainTextGray;
              margin-top: 0.14rem;
            }
            &:last-child {
              font-size: $fontSize-16;
              color: $mainText;
              font-weight: 500;
              margin-bottom: 0.14rem;
            }
          }
        }
      }
      .icon {
        display: inline-block;
        width: 0.56rem;
        height: 0.56rem;
        border-radius: 0.56rem;
        text-align: center;
        line-height: 0.56rem;
        font-size: 0.2rem;
      }
      &:nth-child(1) .total > span {
        background-color: $icon-blue-bg;
        color: $icon-blue;
      }
      &:nth-child(2) .total > span {
        background-color: $icon-yellow-bg;
        color: $icon-yellow;
      }
      &:nth-child(3) .total > span {
        background-color: $icon-green-bg;
        color: $icon-green;
      }
      &:nth-child(4) .total > span {
        background-color: $icon-red-bg;
        color: $icon-red;
      }
    }
  }
  .common-condition {
    .condition--date {
      display: flex;
      .el-select {
        width: 40%;
        margin-right: 0.08rem;
      }
      .el-date-editor {
        width: 60%;
      }
    }
  }
  .pane-head-little {
    height: 0.48rem;
    margin-top: 0.24rem;
    .nav .el-menu--horizontal .el-menu-item {
      height: 0.48rem;
      line-height: 0.48rem;
      font-size: $fontSize-14;
      &.is-active::after {
        width: 0.16rem;
        margin-left: -0.08rem;
      }
    }
  }
  .table-data {
    padding: 0.16rem 0.16rem .24rem;
  }
}
</style>
