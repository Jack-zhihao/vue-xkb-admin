<template>
  <div class="orderInfo">
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入订单号"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入联系电话"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择来源">
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
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="ddhao" width="160" label="订单号">
          <template slot-scope="scope">
            <el-button type="text" @click="linkToOrderDetail">{{scope.row.ddhao}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="sfhswzping" align="center" label="是否含实物赠品"></el-table-column>
        <el-table-column prop="sfzskcheng" align="center" label="是否赠送课程"></el-table-column>
        <el-table-column prop="ddze" label="订单总额"></el-table-column>
        <el-table-column prop="xgje" label="修改金额"></el-table-column>
        <el-table-column prop="sjsfu" label="实际实付"></el-table-column>
        <el-table-column prop="ddlyuan" label="订单来源"></el-table-column>
        <el-table-column prop="ddztai" label="订单状态"></el-table-column>
        <el-table-column prop="zffshi" label="支付方式"></el-table-column>
        <el-table-column prop="xdsjian" width="160" label="下单时间"></el-table-column>
        <el-table-column prop="zfsjian" width="160" label="支付时间"></el-table-column>
      </el-table>
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="100"
        layout="slot, prev, pager, next, jumper"
        :total="1000">
        <span class="el-pagination-info">1/10页&nbsp;总共100条</span>
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'orderInfo',
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
      tableData: [
        {
          ddhao: '569849532158941',
          sfhswzping: '是',
          sfzskcheng: '是',
          ddze: '190.00',
          xgje: '190.00',
          sjsfu: '190.00',
          ddlyuan: '后台创建',
          ddztai: '已完成',
          zffshi: '微信支付',
          xdsjian: '2019-06-22 18:53:27',
          zfsjian: '2019-06-22 18:53:27'
        },
        {
          ddhao: '569849532158941',
          sfhswzping: '是',
          sfzskcheng: '是',
          ddze: '190.00',
          xgje: '190.00',
          sjsfu: '190.00',
          ddlyuan: '后台创建',
          ddztai: '已完成',
          zffshi: '微信支付',
          xdsjian: '2019-06-22 18:53:27',
          zfsjian: '2019-06-22 18:53:27'
        },
        {
          ddhao: '569849532158941',
          sfhswzping: '是',
          sfzskcheng: '是',
          ddze: '190.00',
          xgje: '190.00',
          sjsfu: '190.00',
          ddlyuan: '后台创建',
          ddztai: '已完成',
          zffshi: '微信支付',
          xdsjian: '2019-06-22 18:53:27',
          zfsjian: '2019-06-22 18:53:27'
        }
      ],
      currentPage: 5
    }
  },
  methods: {
    linkToOrderDetail () {
      this.$router.push({ name: 'orderListDetail' })
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.orderInfo {
}
</style>
