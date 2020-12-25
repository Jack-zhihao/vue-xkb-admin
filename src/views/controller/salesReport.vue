<template>
  <div class="salesReport">
    <pane-head :title="'销售报表'" :borderBottom="true">
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
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%" class="table-column">
        <el-table-column prop="type" width="100px" align="center" label="类型 \ 部门"></el-table-column>
        <el-table-column prop="name" label="平台一部"></el-table-column>
        <el-table-column prop="name" label="平台二部"></el-table-column>
        <el-table-column prop="name" label="平台三部"></el-table-column>
        <el-table-column prop="name" label="平台四部"></el-table-column>
        <el-table-column prop="name" label="平台五部"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'salesReport',
  data () {
    return {
      salesSelectValue: '',
      salesChartPicker: '',
      tableData: [
        {
          type: '销售额',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          number: 1
        },
        {
          type: '订单量',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          number: 2
        },
        {
          type: '每单均价',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          number: 3
        },
        {
          type: '复购销售额',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          number: 4
        },
        {
          type: '复购订单量',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          number: 4
        },
        {
          type: '复购单均价',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          number: 4
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.salesReport {
  @include pane_boxShadow;
  .tool-term {
    .el-select {
      width: 0.84rem;
      margin-right: 0.08rem;
    }
    .el-date-editor {
      width: 1.34rem;
    }
  }
  .table-data {
    padding: .24rem .16rem;
    .el-table {
      /deep/ td,
      /deep/th {
        border-radius: 0 !important;
      }

      .el-table__body {
        .el-table__row {
          .el-table_1_column_1 {
            background-color: rgba(246, 246, 248, 1);
          }
        }
      }
    }
  }
}
</style>
