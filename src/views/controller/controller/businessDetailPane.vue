<!--
 * @Author: zhihao
 * @Date: 2020-06-18 15:03:55
 * @LastEditTime: 2020-06-30 11:36:37
 * @LastEditors: Please set LastEditors
 * @Description: 控制台 -> 订单处理 - 复购统计 - 赠送试听课
 * @FilePath: \app\src\views\controller\controller\businessDetailPane.vue
-->
<template>
   <div class="sales-bottom-content">
      <div class="bottom-content">
        <pane-head :borderBottom="true" :title="'订单处理'">
          <div slot="tool" class="tool-term">
            <el-select v-model="salesSelectValue" placeholder="请选择">
              <el-option
                v-for="item in [{name: '本日',value: 'day'},{name: '本周',value: 'week'},{name: '本月',value: 'month'}]"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-date-picker v-model="salesChartPicker" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </pane-head>
        <div class="content order-deal">
          <div class="item">
            <div class="data-content">
              <p class="data">23</p>
              <p class="data-title">修改订单</p>
            </div>
            <div class="data-detail">
              <div class="detail">
                待审核&nbsp;&nbsp;
                <span>3</span>
              </div>
              <div class="detail">
                审核中&nbsp;&nbsp;
                <span>3</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="data-content">
              <p class="data">23</p>
              <p class="data-title">换课订单</p>
            </div>
            <div class="data-detail">
              <div class="detail">
                待审核&nbsp;&nbsp;
                <span>0</span>
              </div>
              <div class="detail">
                审核中&nbsp;&nbsp;
                <span>2</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="data-content">
              <p class="data">5</p>
              <p class="data-title">退课订单</p>
              <span class="tips-money">¥ 2,654</span>
            </div>
            <div class="data-detail">
              <div class="detail">
                待审核&nbsp;&nbsp;
                <span>0</span>
              </div>
              <div class="detail">
                审核中&nbsp;&nbsp;
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-content">
        <pane-head :borderBottom="true" :title="'复购统计'">
          <div slot="tool" class="tool-term">
            <el-select v-model="salesSelectValue" placeholder="请选择">
              <el-option
                v-for="item in [{name: '本日',value: 'day'},{name: '本周',value: 'week'},{name: '本月',value: 'month'}]"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-date-picker v-model="salesChartPicker" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </pane-head>
        <div class="content rePurchase">
          <div class="rePurChart"></div>
          <div class="saleChart"></div>
        </div>
      </div>
      <div class="bottom-content">
        <pane-head :borderBottom="true" :title="'赠送试听课'">
          <div slot="tool" class="tool-term">
            <el-select v-model="salesSelectValue" placeholder="请选择">
              <el-option
                v-for="item in [{name: '本日',value: 'day'},{name: '本周',value: 'week'},{name: '本月',value: 'month'}]"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-date-picker v-model="salesChartPicker" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </pane-head>
        <div class="content"></div>
      </div>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      salesSelectValue: '',
      salesChartPicker: ''
    }
  },
  methods: {
    selectClick (data) {
      window.console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixin.scss";
.sales-bottom-content {
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.24rem;
  .bottom-content {
    width: 33%;
    @include pane_boxShadow;
    &:nth-child(2) {
      margin: 0 0.2rem;
    }
    .el-select {
      width: 1rem;
      margin-right: 0.08rem;
    }
    .el-date-editor {
      width: 1.34rem;
    }
    .content {
      &.order-deal {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .item {
          width: 50%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          position: relative;
          margin: 0;
          box-sizing: border-box;
          &:nth-child(2n-1) {
            border-right: 1px solid $border-color;
          }
          &:nth-child(1),
          &:nth-child(2) {
            border-bottom: 1px solid $border-color;
          }
          .data-content {
            position: relative;
            p:nth-child(1) {
              color: #454e70;
              font-size: 0.28rem;
              font-family: "DINNextW1G Light";
              text-align: center;
              margin: 0;
              margin-top: 0.34rem;
            }
            p:nth-child(2) {
              color: rgba(45, 51, 77, 0.4);
              font-size: $fontSize-12;
              text-align: center;
              margin: 0;
              line-height: 3;
            }
            .tips-money {
              display: inline-block;
              background-color: $icon-yellow-bg;
              color: $icon-yellow;
              padding: 0.03rem 0.08rem;
              border-radius: 0.24rem;
              font-size: $fontSize_12;
              font-family: "DINNextW1G Light";
              position: absolute;
              right: 0.1rem;
              top: 0.1rem;
            }
          }
          .data-detail {
            display: flex;
            justify-content: space-between;
            margin: 0 0.16rem;
            border-top: 1px solid $border-color;
            .detail {
              width: 50%;
              font-size: $fontSize-12;
              color: rgba(69, 78, 112, 0.44);
              padding: 0.1rem 0;
              text-align: center;
              &:nth-child(1) {
                border-right: 1px solid $border-color;
              }
              span {
                color: #2d334d;
                font-size: $fontSize-14;
                font-family: "DINNextW1G Light";
                font-weight: bold;
                margin-left: 0.04rem;
              }
            }
          }
        }
      }
      &.rePurchase {
        display: flex;
        justify-content: flex-start;
        .rePurChart {
          width: 60%;
          height: 100%;
          background-color: #2d334d;
        }
        .saleChart {
          width: 40%;
          height: 100%;
          background-color: #454e70;
        }
      }
    }
  }
}
</style>
