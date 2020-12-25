<template>
  <div class="financeReport">
    <pane-head :nav="['订单列表','换课报表','退课报表','0元换课报表']" :borderBottom="true">
      <div slot="tool" class="tool-term">
        <el-button type="primary">导出</el-button>
      </div>
    </pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入订单号"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入客户姓名"></el-input>
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
        <el-select v-model="value" clearable placeholder="请选择平台">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请输入员工姓名">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择阶段">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择付/退款方式">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择是/否赠送平板">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-date-picker v-model="value1" type="date" placeholder="请选择下单日期"></el-date-picker>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择订单状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" v-loading="loading" stripe width="100%">
        <el-table-column prop="order" width="160" fixed label="订单号"></el-table-column>
        <el-table-column prop="username" align="center" label="客户姓名"></el-table-column>
        <el-table-column prop="orderStatus" align="center" label="订单状态"></el-table-column>
        <el-table-column prop="examineStatus" align="center" label="审核状态">
          <template slot-scope="scope">
            <span :style="'color:'+ statusColor[scope.row.examineStatus]">{{scope.row.examineStatus}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="platform" align="center" label="平台"></el-table-column>
        <el-table-column prop="team" align="center" label="组队"></el-table-column>
        <el-table-column prop="staffName" align="center" label="员工姓名"></el-table-column>
        <el-table-column prop="stage" label="阶段"></el-table-column>
        <el-table-column prop="editMoney" label="修改金额"></el-table-column>
        <el-table-column prop="resultMoney" label="折扣后金额"></el-table-column>
        <el-table-column prop="payMoney" label="实付金额"></el-table-column>
        <el-table-column prop="area" align="center" label="付款地区"></el-table-column>
        <el-table-column prop="payType" align="center" width="100px" label="付/退款方式"></el-table-column>
        <el-table-column prop="isInvoice" align="center" label="是否开发票"></el-table-column>
        <el-table-column prop="applyTime" align="center" width="140" label="下单日期"></el-table-column>
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
import { financeList } from '@/api/modules/FinanceManage'
export default {
  name: 'financeReport',
  data () {
    return {
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
      statusColor: { 待审核: '#FF5555', 审核中: '#FFAA43', 已通过: '#19CBA9', 不通过: '#454E70' },
      loading: true,
      tableData: [],
      currentPage: 5
    }
  },
  mounted () {
    financeList()
      .then(res => {
        window.console.log(res)
        const { data } = res
        this.tableData = data
        this.loading = false
      })
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.financeReport {
  @include pane_boxShadow;
}
</style>
