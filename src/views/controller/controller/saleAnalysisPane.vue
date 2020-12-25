<!--
 * @Author: zhihao
 * @Date: 2020-06-18 15:02:20
 * @LastEditTime: 2020-06-30 11:40:19
 * @LastEditors: Please set LastEditors
 * @Description: 控制台 -> 业绩分析
 * @FilePath: \app\src\views\controller\controller\saleAnalysisPane.vue
-->
<template>
  <div class="sales-line-chart">
    <pane-head :borderBottom="true" :nav="['总销售额','订单量','新增用户']" @pane-head-func="selectClick">
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
    <div class="lineChart" id="lineChart"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import { saleAnalysis } from '@/api/modules/Controller'
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
    },
    initChart (today, yesterday, hours) {
      const salesAmountEchat = echarts.init(document.getElementById('lineChart'))
      const salesOption = {
        color: ['#0F6FFF', 'rgba(13, 40, 86, 0.06)'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: 'rgba(13, 40, 86, 0.3)'
            }
          }
        },
        legend: {
          data: ['今日', '昨天'],
          right: '30',
          top: 10,
          icon: 'circle',
          borderColor: 'yellow',
          textStyle: {
            color: 'rgba(0, 0, 0, 0.6)',
            fontSize: 12
          }
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '8%',
          containLabel: true
        },
        xAxis: [
          {
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(237, 238, 242, 1)'
              }
            },
            axisLabel: {
              color: 'rgba(69, 78, 112, 1)'
            },
            type: 'category',
            boundaryGap: true,
            data: hours
          }
        ],
        yAxis: [
          {
            minInterval: 50,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              inside: false,
              margin: 20,
              color: 'rgba(69, 78, 112, 1)'
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: 'rgba(69, 78, 112, 0.2)'
              }
            },
            type: 'value'
          }
        ],
        series: [
          {
            name: '今日',
            type: 'line',
            stack: '金额',
            itemStyle: {
              normal: {
                // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
                  {
                    offset: 0,
                    color: 'rgba(15, 111, 255, 0.3)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(15, 111, 255, 0)'
                  }
                ]),
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 3,
                  type: 'solid',
                  color: '#0F6FFF'
                }
              },
              emphasis: {
                color: '#0F6FFF',
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 3,
                  type: 'dotted',
                  color: '#0F6FFF' // 折线的颜色
                }
              }
            }, // 线条样式
            symbolSize: 5, // 折线点的大小
            areaStyle: { normal: {} },
            symbol: 'circle',
            smooth: 0.3,
            data: today
          },
          {
            name: '昨天',
            type: 'line',
            stack: '',
            itemStyle: {
              normal: {
                // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: 'rgba(0,0,0,0)',
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 3,
                  type: 'solid',
                  color: 'rgba(13, 40, 86, 0.06)' // 折线的颜色
                }
              }
            }, // 线条样式
            symbolSize: 5, // 折线点的大小
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { normal: {} },
            symbol: 'circle',
            smooth: 0.3,
            data: yesterday
          }
        ]
      }

      salesAmountEchat.setOption(salesOption)
      window.onresize = () => salesAmountEchat.resize()
    }
  },
  mounted () {
    saleAnalysis()
      .then(res => {
        const { today, yesterday, hours } = res.data
        this.initChart(today, yesterday, hours)
      })
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixin.scss";
.ranks-content-table {
  /deep/ td,
  /deep/ th {
    padding: 9px 0;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:nth-child(4) {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  /deep/.el-table__header th {
    background-color: $table-gray-1;
    border: none;
    &:first-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .el-table__row td {
    border: none;
  }
  .el-table__row--striped td {
    background: $table-gray-2 !important;
  }
  &::before {
    content: none;
  }
}
.sales-line-chart {
  margin-top: 0.24rem;
  @include pane_boxShadow;
  .tool-term {
    text-align: right;
    .el-select {
      width: 1rem;
      margin-right: 0.08rem;
    }
    .el-date-editor {
      width: 1.34rem;
    }
  }
  .lineChart {
    height: 4.27rem;
  }
}
</style>
