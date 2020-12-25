<template>
  <div class="applyInvoice">
    <pane-head :title="'申请发票'" :borderBottom="true">
      <div slot="tool" class="tool-term">
        <el-button type="primary" @click="applyInvoiceAdd">申请发票</el-button>
      </div>
    </pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入订单号"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入用户名"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择发票类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择发票状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择申请时间">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
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
        <el-table-column prop="order" fixed width="160" label="订单号"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="orderMoney" label="订单总价"></el-table-column>
        <el-table-column prop="payMoney" label="总实付金额"></el-table-column>
        <el-table-column prop="resultMoney"  label="开票金额"></el-table-column>
        <el-table-column prop="orderStatus"  label="订单状态"></el-table-column>
        <el-table-column prop="invoiceType" align="center" label="发票类型"></el-table-column>
        <el-table-column prop="invoiceStatus" align="center" label="发票状态">
          <template slot-scope="scope">
            <span :style="`color: ${statusColor[scope.row.invoiceStatus]}`">{{scope.row.invoiceStatus }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="creater"  label="创建人"></el-table-column>
        <el-table-column prop="creatTime" width="160" label="申请时间"></el-table-column>
        <el-table-column align="right" fixed="right" width="120" label="操作">
          <template slot-scope="scope">
            <tool-btn :btns="scope.row.status == 2 ?['详情']: ['重新申请','详情']" :id="scope.row.name" @toolFunc="toolFunc"></tool-btn>
          </template>
        </el-table-column>
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
import { applyInvoice } from '@/api/modules/OrderManage'
import toolBtn from '@/components/common/toolBtn'
export default {
  name: 'applyInvoice',
  components: {
    toolBtn
  },
  data () {
    return {
      input: '',
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
      value: '',
      value1: '',
      statusColor: { 待开票: '#454E70', 已开票: '#19CBA9', 已作废: 'rgba(69, 78, 112, 0.44)', 已退回: '#FF5555' },
      loading: false,
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    applyInvoiceAdd () {
      this.$router.push({ name: 'applyInvoiceAdd' })
    },
    toolFunc (data) {
      if (data.btn === '详情') {
        this.$router.push({ name: 'applyInvoiceDetail' })
      }
    }
  },
  mounted () {
    applyInvoice()
      .then(res => {
        window.console.log(res)
        const { data } = res
        this.tableData = data
      })
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.applyInvoice {
  @include pane_boxShadow;
}
</style>
