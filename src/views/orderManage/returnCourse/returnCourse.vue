<template>
  <div class="returnCourse">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="headFunc">
      <div slot="tool" class="tool-term">
        <el-button v-if="nav[navIdx] === '我的申请'" type="primary">申请</el-button>
      </div>
    </pane-head>
    <div class="pane">
      <el-row class="common-condition">
        <el-col :span="4" class="condition">
          <el-input v-model="input" placeholder="请输入订单号"></el-input>
        </el-col>
        <el-col :span="4" class="condition">
          <el-input v-model="input" placeholder="请输入联系电话"></el-input>
        </el-col>
        <el-col :span="4" class="condition">
          <el-input v-model="input" placeholder="请输入申请用户"></el-input>
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
          <el-select v-model="value" clearable placeholder="请选择换课类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4" class="condition">
          <el-select v-model="value" clearable placeholder="请选择差价类型">
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
          <el-table-column prop="username" label="申请用户"></el-table-column>
          <el-table-column prop="phone" width="120" label="联系电话"></el-table-column>
          <el-table-column prop="returnCourseType" label="换课类型"></el-table-column>
          <el-table-column prop="cjia" align="center" label="申请差价"></el-table-column>
          <el-table-column prop="examineStatus" align="center" label="审核状态">
            <template slot-scope="scope">
              <span :style="`color: ${statusColor[scope.row.examineStatus]}`">{{scope.row.examineStatus}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="applyDisparityType"  align="center" label="差价类型"></el-table-column>
          <el-table-column prop="applyer" label="申请人"></el-table-column>
          <el-table-column prop="applyTime" width="140" label="申请时间"></el-table-column>
          <el-table-column fixed="right" align="right" width="150" label="操作">
            <template slot-scope="scope">
              <tool-btn v-if="scope.row.examineStatus === '不通过'" :btns="['删除','修改','详情']" @toolFunc="toolFunc"></tool-btn>
              <tool-btn v-if="scope.row.examineStatus === '已通过'" :btns="['详情']" @toolFunc="toolFunc"></tool-btn>
              <tool-btn v-if="scope.row.examineStatus === '审核中'" :btns="['取消申请','详情']" @toolFunc="toolFunc"></tool-btn>
              <tool-btn v-if="scope.row.examineStatus === '待审核'" :btns="['详情']" @toolFunc="toolFunc"></tool-btn>
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
  </div>
</template>
<script>
import toolBtn from '@/components/common/toolBtn'
import { returnCourse } from '@/api/modules/OrderManage'
export default {
  name: 'changeCourse',
  components: {
    toolBtn
  },
  data () {
    return {
      nav: ['换课列表', '我的申请', '待审核', '已审核'],
      navIdx: 0,
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
      statusColor: {
        待审核: '#FF5555',
        审核中: '#FFAA43',
        已通过: '#19CBA9',
        不通过: '#454E70'
      },
      loading: true,
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    headFunc (index) {
      this.navIdx = index
    },
    toolFunc (data) {
      if (data.btn === '详情') {
        this.$router.push({ name: 'returnCourseDetail' })
      }
    }
  },
  mounted () {
    returnCourse()
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
.returnCourse {
  @include pane_boxShadow;
}
</style>
