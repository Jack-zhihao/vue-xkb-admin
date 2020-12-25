<template>
  <div class="applyCallOrder">
    <pane-head :title="'申请电联订单'" :borderBottom="true"></pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入订单号"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入下单用户"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入联系电话"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择是否已电联">
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
      <el-table :data="tableData" v-loading="loading" stripe width="100%">>
        <el-table-column prop="order" fixed label="订单号"></el-table-column>
        <el-table-column prop="comfrimOrderUser" width="100" label="下单用户"></el-table-column>
        <el-table-column prop="username" width="80" label="称呼"></el-table-column>
        <el-table-column prop="phone" width="100" label="联系电话"></el-table-column>
        <el-table-column prop="isCall" width="100" align="center" label="是否已电联"></el-table-column>
        <el-table-column prop="viewRemarks" align="center" label="查看备注">
          <template slot-scope="scope">
            <el-popover
              v-if="scope.row.examine === '不通过'"
              placement="right"
              title=""
              width="200"
              trigger="click"
              content="二次购买意向"
            >
              <el-button type="text" slot="reference">查看</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="appleTime" label="申请时间"></el-table-column>
        <el-table-column prop="callTime" label="电联时间"></el-table-column>
        <el-table-column label="操作" width="110px" align="right">
          <template slot-scope="scope">
            <tool-btn
              v-if="scope.row.examine !== '不通过'"
              :id="String(scope.row.index)"
              :btns="['添加备注']"
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
    <el-dialog  :modal-append-to-body="true" :append-to-body="true" title="提示" :visible.sync="dialogVisible" class="hideHead" width="380px">
      <pane-head :title="'添加备注'" class="dialog_head">
        <div slot="tool" class="tool-term">
          <i class="close iconfont iconshut_down" @click="dialogVisible= !dialogVisible"></i>
        </div>
      </pane-head>
      <p class="text-area-title">备注</p>
      <text-area :textarea.sync="textarea" @update="update"></text-area>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        <el-button type="info" @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import toolBtn from '@/components/common/toolBtn'
import textArea from '@/components/common/textArea'
import { applyCallOrder } from '@/api/modules/OrderManage'
export default {
  name: 'applyCallOrder',
  components: {
    toolBtn,
    textArea
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

      loading: false,
      tableData: [
        {
          index: 1,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          number: 19920147207,
          examine: '不通过',
          stage: '高中',
          status: '待开票',
          date: '2019-04-12 16:44:36'
        },
        {
          index: 2,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          number: 2,
          examine: '已通过',
          stage: '高中,初中',
          status: '已退回',
          date: '2019-04-12 16:44:36'
        },
        {
          index: 3,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          number: 3,
          examine: '待审核',
          stage: '高中,初中',
          status: '待开票',
          date: '2019-04-12 16:44:36'
        },
        {
          index: 4,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          number: 4,
          examine: '审核中',
          stage: '初中',
          status: '已退回',
          date: '2019-04-12 16:44:36'
        },
        {
          index: 5,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          number: 4,
          examine: '已取消',
          stage: '高中',
          status: '待开票',
          date: '2019-04-12 16:44:36'
        }
      ],
      dialogVisible: false,
      textarea: 'asdf',
      currentPage: 5
    }
  },
  methods: {
    toolFunc () {
      this.dialogVisible = true
    },
    update (textarea) {
      this.textarea = textarea
    }
  },
  mounted () {
    applyCallOrder()
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
.applyCallOrder {
  @include pane_boxShadow;
  .text-area-title {
    color: $mainTextGray2;
    padding-bottom: 0.08rem;
  }
  .el-dialog__footer {
    padding: 0.32rem 0.24rem 0.24rem;
  }
}
</style>
