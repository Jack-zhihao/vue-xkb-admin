<!--
 * @Author: zhihao
 * @Date: 2020-06-18 15:01:56
 * @LastEditTime: 2020-07-13 16:17:27
 * @LastEditors: Please set LastEditors
 * @Description: 控制台 -> 部门销售占比 销售员业绩排名
 * @FilePath: \app\src\views\controller\controller\saleOfRank-pane.vue
-->
<template>
  <div class="sales-pane">
    <div class="sales-chart">
      <pane-head :borderBottom="true" :nav="['各部门销售额占比','各部门销售额占比']" @pane-head-func="selectClick">
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
      <div class="charts">
        <div class="saleChart" id="saleChart"></div>
        <div class="chart-list">
          <el-table :data="salesMixs" :border="false" style="width: 100%">
            <el-table-column prop="platform" align="left" label="平台"></el-table-column>
            <el-table-column prop="proport" align="left" label="占比"></el-table-column>
            <el-table-column prop="number" align="left" label="销售额"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="sales-ranks">
      <pane-head :borderBottom="true">
        <div slot="title">
          <div class="title">
            <span>销售员业绩排名</span>
            <i class="iconfont iconarrow-top"></i>
            <i class="iconfont iconarrow-bottom active"></i>
          </div>
        </div>
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
      <div class="sales-ranks-content">
        <el-table :data="salesRank" stripe style="width: 100%" class="ranks-content-table">
          <el-table-column prop="rank" align="center" label="排名">
            <template slot-scope="{row}">
              <div><img class="salerImg" :src="row.img" alt="封面"><span>{{row.rank}}</span></div>
            </template>
          </el-table-column>
          <el-table-column prop="saler" align="center" label="销售员"></el-table-column>
          <el-table-column prop="platform" align="center" label="所属部门"></el-table-column>
          <el-table-column prop="number" align="center" label="销售金额">
            <template slot-scope="{row}">
              <span>{{row.number + '￥'}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import { saleOfRank } from '@/api/modules/Controller'
export default {
  name: 'salesPane',
  data () {
    return {
      salesSelectValue: '',
      salesChartPicker: '',
      salesMixs: [],
      salesRank: []
    }
  },
  methods: {
    selectClick (data) {
      window.console.log(data)
    },
    initCharts (data) {
      const colors = ['#FF5858', '#FF9254', '#FFCE60', '#9FEB31', '#3BCCF5', '#237AFD', '#CC5BFF']

      const myChart = echarts.init(document.getElementById('saleChart'))
      const options = {
        color: colors,
        tooltip: {
          show: false,
          trigger: 'item',
          formatter: '{b}:<br/> 销售额：{c} <br/>占比：({d}%)'
        },
        legend: {
          show: false,
          orient: 'vertical',
          x: 'left'
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center',
                formatter: '{b}\n{d}%'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold',
                  lineHeight: 35
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data
          }
        ]
      }

      myChart.setOption(options)
      const tempData = []
      data.filter(d => tempData.push(d.value))

      var index = tempData.indexOf(Math.max(...tempData))

      myChart.dispatchAction({ type: 'highlight', dataIndex: index }) // 设置默认选中高亮部分

      myChart.on('mouseover', function (e) {
        if (e.dataIndex !== index) {
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index
          })
        }
      })

      myChart.on('mouseout', function () {
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: index
        })
      })
    }
  },
  mounted () {
    saleOfRank().then(res => {
      window.console.log(res)
      this.salesMixs = res.data.salesMixs
      this.salesRank = res.data.salesRank
      const salesMixs_ = []
      this.salesMixs.filter((salesMix, idx) => {
        salesMixs_[idx] = {
          name: salesMix.platform,
          value: salesMix.number
        }
      })
      this.initCharts(salesMixs_)
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixin.scss";
.sales-pane {
  display: flex;
  justify-content: space-between;
  margin-top: 0.24rem;
  .sales-chart {
    width: calc(100% - 4.4rem);
    @include pane_boxShadow;
    border-radius: 0.1rem;
    margin-right: 0.2rem;
    background-color: $white;
    .el-select {
      width: 1rem;
      margin-right: 8px;
    }
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 1.34rem;
    }
    .charts {
      height: calc(100% - 0.64rem);
      display: flex;
      justify-content: space-between;
      .saleChart {
        width: 50%;
      }
      .chart-list {
        width: 45%;
        .el-table {
          /deep/ td,
          /ddep/ th {
            border: none;
            padding: 5px 0;
            color: $mainText;
          }
          &:before {
            content: none;
          }
          margin-top: 0.5rem;
          .el-table__header {
            /deep/th {
              background-color: #fff !important;
              &:first-child {
                text-indent: 0.05rem;
              }
            }
          }
          .el-table__body {
            /deep/ td {
              height: 0.32rem;
            }
          }
          .el-table__row {
            td:first-child {
              text-indent: 0.12rem;
              position: relative;
              &::before {
                content: "";
                display: inline-block;
                width: 0.08rem;
                height: 0.08rem;
                border-radius: 0.08rem;
                position: absolute;
                left: 0px;
                top: 50%;
                margin-top: -0.04rem;
              }
            }
            &:nth-child(1) td:first-child::before {
              background-color: rgba(255, 69, 69, 1);
            }
            &:nth-child(2) td:first-child::before {
              background-color: rgba(255, 137, 71, 1);
            }
            &:nth-child(3) td:first-child::before {
              background-color: rgba(255, 200, 75, 1);
            }
            &:nth-child(4) td:first-child::before {
              background-color: rgba(162, 243, 47, 1);
            }
            &:nth-child(5) td:first-child::before {
              background-color: rgba(37, 207, 255, 1);
            }
            &:nth-child(6) td:first-child::before {
              background-color: rgba(31, 120, 255, 1);
            }
            &:nth-child(7) td:first-child::before {
              background-color: rgba(195, 62, 255, 1);
            }
          }
        }
      }
    }
  }
  .sales-ranks {
    width: 4.4rem;
    height: 5.46rem;
    @include pane_boxShadow;
    border-radius: 0.1rem;
    background-color: $white;
    .title {
      font-size: $fontSize-16;
      height: 0.64rem;
      line-height: 0.64rem;
      position: relative;
      i {
        display: inline-block;
        width: 0.16rem;
        height: 0.16rem;
        font-size: $fontSize-16;
        position: absolute;
        top: 50%;
        margin-top: -0.08rem;
        line-height: 1;
        color: $mainTextGray;
        &.iconarrow-top {
          margin-top: -0.14rem;
        }
        &.iconarrow-bottom {
          margin-top: -0.03rem;
        }
        &.active {
          color: $mainText;
        }
      }
    }
    /deep/.salerImg {
      border-radius: 1rem;
      vertical-align: middle;
      margin-right: 0.04rem
    }
    .tool-term {
      .el-select {
        width: 1.14rem;
        margin-right: 0.08rem;
      }
      .el-date-editor {
        width: 1.34rem;
      }
    }
    .sales-ranks-content {
      padding: 0.16rem;
    }
  }
}
</style>
