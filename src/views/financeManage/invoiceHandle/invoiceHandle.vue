<template>
  <div class="invoiceHandle">
    <pane-head :title="'发票处理'" :borderBottom="true"></pane-head>
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
      <el-table :data="tableData"  v-loading="loading" stripe width="100%">>
        <el-table-column prop="order" width="160" fixed label="订单号"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="payMoney" label="总实付金额"></el-table-column>
        <el-table-column prop="resultMoney" label="开票金额"></el-table-column>
        <el-table-column prop="orderStatus" align="center" label="订单状态"></el-table-column>
        <el-table-column prop="payType" label="支付方式"></el-table-column>
        <el-table-column prop="invoiceType" align="center" label="发票类型"></el-table-column>
        <el-table-column prop="invoiceStatus" align="center" label="发票状态"></el-table-column>
        <el-table-column prop="applyTime" width="160" label="发票申请时间"></el-table-column>
        <el-table-column label="操作" width="160" fixed="right" align="right">
          <template slot-scope="scope">
            <tool-btn
              :id="String(scope.row.index)"
              :btns="scope.row.invoiceStatus === '待开票' ? ['退回','标记开票','详情'] : ['异常处理','详情']"
              @toolFunc="toolFunc"
            ></tool-btn>
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
    <el-dialog  :modal-append-to-body="true" :append-to-body="true" title="提示" :visible.sync="dialogVisibleTipBill" class="hideHead" width="380px">
      <pane-head :title="'标记已开票'" class="dialog_head">
        <div slot="tool" class="tool-term">
          <i class="close iconfont iconshut_down" @click="dialogVisibleTipBill= false"></i>
        </div>
      </pane-head>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="活动名称" prop="name" style="width: 100%;padding: 0;margin: 0;">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="备注" style="width: 100%;padding: 0;">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary"  @click="submitForm('ruleForm')">确 定</el-button>
        <el-button type="info" @click="dialogVisibleTipBill = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import toolBtn from '@/components/common/toolBtn'
import { invoiceHandle } from '@/api/modules/FinanceManage'
export default {
  name: 'invoiceHandle',
  components: {
    toolBtn
  },
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
      loading: true,
      tableData: [],
      dialogVisibleTipBill: false,
      ruleForm: {
        name: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      currentPage: 5
    }
  },
  methods: {
    toolFunc (data) {
      if (data.btn === '详情') {
        this.$router.push({ name: 'invoiceHandleDetail' })
      } else if (data.btn === '标记开票') {
        this.dialogVisibleTipBill = true
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    }
  },
  mounted () {
    invoiceHandle()
      .then(res => {
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
.invoiceHandle {
  @include pane_boxShadow;
}
</style>
