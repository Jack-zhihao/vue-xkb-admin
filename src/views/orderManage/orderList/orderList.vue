<template>
  <div class="orderList">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="paneHeadFunc">
      <div slot="tool" class="tool-term" v-show="nav[navIdx] === '我添加的'">
        <el-button type="primary" @click="addOrder">添加</el-button>
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
        <el-select v-model="value" clearable placeholder="请选择是否含实物赠品">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择是否赠送课程">
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
        <el-table-column prop="order" fixed width="140" label="订单号"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="isGift" align="center" label="含实物赠品"></el-table-column>
        <el-table-column prop="isGiftCourse"  align="center" label="含赠送课程"></el-table-column>
        <el-table-column prop="orderMoney" label="订单总价"></el-table-column>
        <el-table-column prop="editMoney" label="修改金额"></el-table-column>
        <el-table-column prop="payMoney" label="实际支付"></el-table-column>
        <el-table-column prop="orderSource" label="订单来源"></el-table-column>
        <el-table-column prop="orderStatus" label="订单状态"></el-table-column>
        <el-table-column prop="examineStatus" label="审核状态">
          <template slot-scope="scope">
            <span :style="'color:'+ statusColor[scope.row.examineStatus]">{{scope.row.examineStatus}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="creater" label="创建人"></el-table-column>
        <el-table-column prop="creatTime" width="140" label="下单时间"></el-table-column>
        <el-table-column align="right" fixed="right" width="300" label="操作">
          <template slot-scope="scope">
            <div v-if="scope.row.examineStatus === '不通过'">
              <tool-btn
                :btns="['微信支付','支付链接','修改金额','取消订单','详情']"
                :id="scope.row.examineStatus"
                @toolFunc="toolFunc"
              ></tool-btn>
            </div>
            <div v-if="scope.row.examineStatus === '已通过'">
              <tool-btn :btns="['申请开票','学习计划','详情']" :id="scope.row.examineStatus" @toolFunc="toolFunc"></tool-btn>
            </div>
            <div v-if="scope.row.examineStatus === '审核中'">
              <tool-btn :btns="['填写物流信息','学习计划','详情']" :id="scope.row.examineStatus" @toolFunc="toolFunc"></tool-btn>
            </div>
            <div v-if="scope.row.examineStatus === '待审核'">
              <tool-btn :btns="['修改','学习计划','详情']" :id="scope.row.examineStatus" @toolFunc="toolFunc"></tool-btn>
            </div>
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
    <!-- 微信支付 - 支付链接 -弹窗 - payC -->
    <el-dialog  :modal-append-to-body="true"
      :append-to-body="true"
      class="hideHead payC"
      title="提示"
      :visible.sync="dialogVisible_pay"
      width="380px"
      :before-close="handleClose"
    >
      <pane-head class="dialog_head" :title="'微信/支付宝支付'">
        <div slot="tool" class="tool-term">
          <i class="close iconfont iconshut_down" @click="dialogVisible_pay= !dialogVisible_pay"></i>
        </div>
      </pane-head>
      <p>应付金额</p>
      <p>
        ¥
        <span>825,325</span>
      </p>
      <div class="qr">
        <img src="../../../assets/images/qrCode.jpg" alt="封面">
      </div>
      <div class="summry">
        <div>
          <span>收款公司</span>
          <span>长春市硕学通教育科技有限公司</span>
        </div>
        <div>
          <span>订单号</span>
          <span>62030984788</span>
        </div>
      </div>
    </el-dialog>
    <el-dialog  :modal-append-to-body="true"
      :append-to-body="true"
      class="hideHead payC"
      title="提示"
      :visible.sync="dialogVisible_payLink"
      width="380px"
      :before-close="handleClose"
    >
      <pane-head class="dialog_head" :title="'支付链接'">
        <div slot="tool" class="tool-term">
          <i
            class="close iconfont iconshut_down"
            @click="dialogVisible_payLink= !dialogVisible_payLink"
          ></i>
        </div>
      </pane-head>
      <div class="qr">
        <img src="../../../assets/images/qrCode.jpg" alt="二维码">
      </div>
      <div class="summry">
        <div>
          <span style="display: inline-block; width: 50px">链接地址</span>
          <span>http://testwww.xkb365.com/order-detail-share/?shareId=9A6AFBEBA88EF60B02AD2D4798D06FEBE07907F1AD2E1378E725FE57042E9CAFAC0BA90097F7F151D5FB01730DB635387F19473D1F768A0F</span>
        </div>
      </div>
    </el-dialog>
    <!-- 修改金额 - editMoneyC -->
    <el-dialog  :modal-append-to-body="true"
      :append-to-body="true"
      class="hideHead editMoneyC"
      title="提示"
      :visible.sync="dialogVisible_editMoney"
      width="380px"
      :before-close="handleClose"
    >
      <pane-head class="dialog_head" :title="'修改金额'">
        <div slot="tool" class="tool-term">
          <i class="close iconfont iconshut_down" @click="dialogVisible_editMoney= false"></i>
        </div>
      </pane-head>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="订单号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="订单总额" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="上级审核人" prop="name">
          <el-select v-model="ruleForm.value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="修改金额" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        <el-button type="info" @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
    <!-- 填写物流信息 - editMoneyC -->
     <el-dialog  :modal-append-to-body="true"
      :append-to-body="true"
      class="hideHead editMoneyC"
      title="提示"
      :visible.sync="dialogVisible_logistics"
      width="380px"
      :before-close="handleClose"
    >
      <pane-head class="dialog_head" :title="'填写物流信息'">
        <div slot="tool" class="tool-term">
          <i class="close iconfont iconshut_down" @click="dialogVisible_logistics= false"></i>
        </div>
      </pane-head>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="订单号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="物流名称" prop="name">
          <el-select v-model="ruleForm.value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物流单号 " prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        <el-button type="info" @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>

    <!-- 取消订单 -- cancelOrderC -->
    <el-dialog  :modal-append-to-body="true"
      :append-to-body="true"
      class="hideHead cancelOrderC"
      title="提示"
      :visible.sync="dialogVisible_cancelOrder"
      width="380px"
      :before-close="handleClose"
    >
      <pane-head class="dialog_head" :title="'取消订单'">
        <div slot="tool" class="tool-term">
          <i class="close iconfont iconshut_down"
            @click="dialogVisible_cancelOrder= false"
          ></i>
        </div>
      </pane-head>
      <p class="tips">确定要取消订单吗？</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="dialogVisible = false">确 定</el-button>
        <el-button type="info" @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import toolBtn from '@/components/common/toolBtn'
import { orderList } from '@/api/modules/OrderManage'
import { setTimeout } from 'timers'
export default {
  name: 'orderList',
  components: {
    toolBtn
  },
  data () {
    return {
      nav: ['订单列表', '我添加的', '待审核', '已审核'],
      navIdx: 0,
      statusColor: {
        待审核: '#FF5555',
        审核中: '#FFAA43',
        已通过: '#19CBA9',
        不通过: '#454E70'
      },
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
      loading: true,
      tableData: [],
      currentPage: 5,
      dialogVisible_pay: false, // 微信支付
      dialogVisible_payLink: false, // 支付链接
      dialogVisible_editMoney: false, // 修改金额
      dialogVisible_cancelOrder: false, // 取消订单
      dialogVisible_logistics: false, // 填写物流订单
      ruleForm: {
        name: '',
        value: '选项3',
        desc: ''
      },

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
      }
    }
  },
  methods: {
    paneHeadFunc (idx) {
      this.navIdx = Number(idx)
    },
    addOrder () {
      this.$router.push({ name: 'orderListAdd' })
    },
    toolFunc (data) {
      window.console.log(data)
      if (data.btn === '学习计划') {
        this.$router.push({ name: 'learningPlan' })
      } else if (data.btn === '微信支付') {
        this.dialogVisible_pay = true
      } else if (data.btn === '支付链接') {
        this.dialogVisible_payLink = true
      } else if (data.btn === '修改金额') {
        this.dialogVisible_editMoney = true
      } else if (data.btn === '取消订单') {
        this.dialogVisible_cancelOrder = true
      } else if (data.btn === '填写物流信息') {
        this.dialogVisible_logistics = true
      } else if (data.btn === '详情') {
        this.$router.push({ name: 'orderListDetail' })
      }
    },
    updatePayC (visible) {
      window.console.log(visible)
    },
    handleClose (e) {
      window.console.log(e)
    }
  },
  mounted () {
    orderList()
      .then(res => {
        window.console.log(res)
        const { data } = res
        const vm = this
        setTimeout(function () {
          vm.tableData = data
          vm.loading = false
        }, 3000)
      })
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.orderList {
  @include pane_boxShadow;
  .table-data {
    padding: 0.24rem 0.16rem;
  }
  .payC {
    .el-dialog__body {
      padding-bottom: 0.24rem;
      > p {
        text-align: center;
        &:first-child(2) {
          font-size: $fontSize-14;
          color: $mainTextGray2;
          line-height: 1;
        }
        &:nth-child(3) {
          font-size: $fontSize-20;
          color: $mainText;
          padding: 0.08rem 0 0.24rem;
          span {
            font-size: 0.28rem;
            line-height: 1;
          }
        }
      }
      .qr {
        text-align: center;
        border-bottom: 1px solid $border-color-heavy;
        padding-bottom: 0.32rem;
        img {
          width: 1.6rem;
        }
      }
      .summry {
        div {
          display: flex;
          justify-content: space-between;
          margin-top: 0.12rem;
          span {
            display: inline-block;
            &:first-child {
              color: $mainTextGray2;
              width: 0.8rem;
            }
            &:last-child {
              color: $mainText;
              width: calc(100% - 0.8rem);
              text-align: right;
            }
          }
        }
      }
    }
  }
  .editMoneyC {
    .common-form {
      .el-form-item {
        width: 100%;
        padding: 0;
        &:first-child {
          margin: 0;
        }
        .el-select {
          width: 100%;
        }
      }
    }
    .el-dialog__footer {
      padding: 0.32rem 0.24rem 0.24rem;
    }
  }
  .cancelOrderC {
    .tips {
      font-size: $fontSize-14;
      color: $mainText;
    }
    .el-dialog__footer {
      padding: 0.32rem 0.24rem 0.24rem;
    }
  }
}
</style>
