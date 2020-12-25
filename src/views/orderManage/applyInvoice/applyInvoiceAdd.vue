<template>
  <div class="applyInvoiceAdd">
    <pane-head :title="'申请发票'" :borderBottom="true">
      <div slot="tool" class="tool-term">
        <el-button v-if="!isSelectOrder" type="primary" @click="dialogVisible = true">选择订单</el-button>
        <el-button v-else type="info"  @click="dialogVisible = true">重新选择</el-button>
      </div>
    </pane-head>
    <div class="pane-content">
      <el-row class="info-row" v-if="isSelectOrder">
        <el-col :span="5">
          <p>订单号</p>
          <p>347036718326</p>
        </el-col>
        <el-col :span="5">
          <p>用户名</p>
          <p>顾卿</p>
        </el-col>
        <el-col :span="5">
          <p>订单总价</p>
          <p>5,179.00</p>
        </el-col>
        <el-col :span="5">
          <p>修改金额</p>
          <p>0.00</p>
        </el-col>
        <el-col :span="4">
          <p>实际总支付</p>
          <p>5,179.00</p>
        </el-col>
      </el-row>
      <el-row class="info-row" v-if="isSelectOrder" style="padding-bottom: 0.24rem; border-bottom: 1px solid rgba(69, 78, 112, 0.1)">
        <el-col :span="5">
          <p>订单来源</p>
          <p>后台创建</p>
        </el-col>
        <el-col :span="5">
          <p>订单状态</p>
          <p style="color: #19CBA9">已支付</p>
        </el-col>
        <el-col :span="5">
          <p>下单时间</p>
          <p>2019-11-05 12:33:47</p>
        </el-col>
        <el-col :span="5">
          <p>支付方式</p>
          <p>微信支付</p>
        </el-col>
        <el-col :span="4">
          <p>支付时间</p>
          <p>2019-11-05 12:35:10</p>
        </el-col>
      </el-row>
      <el-row class="info-row" v-if="isSelectOrder">
        <el-col :span="5">
          <p>开票金额</p>
          <p>5,179.00</p>
        </el-col>
      </el-row>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="发票类型" prop="name">
          <el-radio v-model="ruleForm.radio" label="1">个人</el-radio>&nbsp;&nbsp;
          <el-radio v-model="ruleForm.radio" label="2">企业</el-radio>
        </el-form-item>
        <el-form-item label="税号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="发票抬头" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="area">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%;margin-top: 0.32rem">
          <el-button type="primary">保存</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog  :modal-append-to-body="true" :append-to-body="true" class="hideHead" title="" :visible.sync="dialogVisible" width="60%">
      <pane-head :title="'选择订单'" class="dialog_head">
        <div slot="tool" class="tool-term">
          <i class="close iconfont iconshut_down" @click="dialogVisible= !dialogVisible"></i>
        </div>
      </pane-head>
      <el-row class="common-condition" style="padding: 0;">
        <el-col :span="6" class="condition">
          <el-input v-model="input" placeholder="请输入订单号"></el-input>
        </el-col>
        <el-col :span="6" class="condition">
          <el-input v-model="input" placeholder="请输入联系电话"></el-input>
        </el-col>
        <el-col :span="6" class="condition">
          <el-button>搜索</el-button>
        </el-col>
      </el-row>
      <el-table :data="tableData" stripe width="100%" style="margin-top: 0.24rem">
        <el-table-column type="selection" align="left" width="55"></el-table-column>
        <el-table-column prop="order" width="120" label="订单号"></el-table-column>
        <el-table-column prop="user" label="用户名"></el-table-column>
        <el-table-column prop="ddzjia" label="订单总价"></el-table-column>
        <el-table-column prop="zsfje" label="总实付金额"></el-table-column>
        <el-table-column prop="xgje" label="修改金额"></el-table-column>
        <el-table-column prop="ddlyuan" label="订单来源"></el-table-column>
        <el-table-column prop="ddztai" label="订单状态"></el-table-column>
        <el-table-column prop="xdsjian" width="150" label="下单时间"></el-table-column>
        <el-table-column prop="zffshi" label="支付方式"></el-table-column>
      </el-table>
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="100"
        layout="slot, prev, pager, next, jumper"
        :total="1000"
      >
        <span class="el-pagination-info">1/10页&nbsp;总共100条</span>
      </el-pagination>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="comfrim">确 定</el-button>
        <el-button type="info" @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'applyInvoiceAdd',
  data () {
    return {
      isSelectOrder: false,
      input: '',
      ruleForm: {
        name: '',
        value: '选项3',
        desc: '',
        radio: '1',
        area: {
          province: {
            code: '150000',
            value: '内蒙古自治区'
          },
          city: {
            code: '150500',
            value: '通辽市'
          },
          area: {
            code: '150526',
            value: '扎鲁特旗'
          }
        }
      },
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
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 0, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      },
      dialogVisible: false,
      tableData: [
        {
          order: '55967897023',
          user: '阳瑶',
          ddzjia: '1,241.00',
          zsfje: '0.00',
          xgje: '1,241.00',
          ddlyuan: '后台创建',
          ddztai: '待支付',
          xdsjian: '2019-04-12 16:44:36',
          zffshi: '微信支付'
        },
        {
          order: '55967897023',
          user: '阳瑶',
          ddzjia: '1,241.00',
          zsfje: '0.00',
          xgje: '1,241.00',
          ddlyuan: '后台创建',
          ddztai: '待支付',
          xdsjian: '2019-04-12 16:44:36',
          zffshi: '微信支付'
        },
        {
          order: '55967897023',
          user: '阳瑶',
          ddzjia: '1,241.00',
          zsfje: '0.00',
          xgje: '1,241.00',
          ddlyuan: '后台创建',
          ddztai: '待支付',
          xdsjian: '2019-04-12 16:44:36',
          zffshi: '微信支付'
        },
        {
          order: '55967897023',
          user: '阳瑶',
          ddzjia: '1,241.00',
          zsfje: '0.00',
          xgje: '1,241.00',
          ddlyuan: '后台创建',
          ddztai: '待支付',
          xdsjian: '2019-04-12 16:44:36',
          zffshi: '微信支付'
        },
        {
          order: '55967897023',
          user: '阳瑶',
          ddzjia: '1,241.00',
          zsfje: '0.00',
          xgje: '1,241.00',
          ddlyuan: '后台创建',
          ddztai: '待支付',
          xdsjian: '2019-04-12 16:44:36',
          zffshi: '微信支付'
        }
      ],
      currentPage: 5
    }
  },
  methods: {
    comfrim () {
      this.dialogVisible = false
      this.isSelectOrder = true
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.applyInvoiceAdd {
  @include pane_boxShadow;
  .pane-content {
    padding: 0 1.27rem 0.24rem;
    .info-row {
      margin-top: 0.24rem;
      &.info-row-last {
        padding-bottom: 0.24rem;
        border-bottom: 1px solid $border-color;
      }
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
        }
      }

      img {
        width: 1.5rem;
        border-radius: 6px;
      }
    }
  }
  .el-dialog__footer {
    padding: 0.32rem 0.24rem 0.24rem;
  }
}
</style>
