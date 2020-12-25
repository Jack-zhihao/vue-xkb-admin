<template>
  <div class="assessList">
    <pane-head :nav="nav" @pane-head-func="paneHeadFunc" :borderBottom="true" >
      <div slot="tool" class="tool-term">
        <el-button v-if="['我添加的', '已审核'].includes(nav[navIdx])" type="primary" @click="assessListAdd">添加</el-button>
      </div>
    </pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入评测名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择上架状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择课程阶段">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择学科">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择课程分类">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
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
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" v-loading="loading" stripe width="100%">
        <el-table-column prop="assessName"  width="220" label="测评名称"></el-table-column>
        <el-table-column prop="stage" label="阶段"></el-table-column>
        <el-table-column prop="subject" label="学科"></el-table-column>
        <el-table-column prop="courseClass" label="课程分类"></el-table-column>
        <el-table-column prop="examineStatus" align="center" label="审核状态">
          <template slot-scope="scope">
            <span :style="`color:${statusColor[scope.row.examineStatus]}`">{{scope.row.examineStatus}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="onlineStatus" align="center" label="上架状态">
          <template slot-scope="scope">
            <span>{{scope.row.onlineStatus}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="creater" label="创建人"></el-table-column>
        <el-table-column prop="createTime" width="140" label="创建时间"></el-table-column>
        <el-table-column align="right" fixed="right" width="180" label="操作">
          <template slot-scope="scope">
            <tool-btn v-if="scope.row.examineStatus === '不通过'" :btns="['下架','修改','详情']" :id="scope.row.name" @toolFunc="toolFunc"></tool-btn>
            <tool-btn v-if="scope.row.examineStatus === '已通过'" :btns="['详情']" :id="scope.row.name" @toolFunc="toolFunc"></tool-btn>
            <tool-btn v-if="scope.row.examineStatus === '审核中'" :btns="['取消','详情']" :id="scope.row.name" @toolFunc="toolFunc"></tool-btn>
            <tool-btn v-if="scope.row.examineStatus === '待审核'" :btns="['修改','删除','详情']" :id="scope.row.name" @toolFunc="toolFunc"></tool-btn>
            <tool-btn v-if="scope.row.examineStatus === '已取消'" :btns="['上架','修改','删除','详情']" :id="scope.row.name" @toolFunc="toolFunc"></tool-btn>
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
import toolBtn from '@/components/common/toolBtn'
import { assessList } from '@/api/modules/AssessManage'
export default {
  name: 'assessList',
  components: {
    toolBtn
  },
  data () {
    return {
      nav: ['测评列表', '我添加的', '待审核', '已审核'],
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
        不通过: '#454E70',
        已取消: ''
      },

      loading: true,
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    paneHeadFunc (idx) {
      this.navIdx = Number(idx)
    },
    toolFunc (data) {
      window.console.log(data)
      if (data.btn === '详情') {
        this.$router.push({ name: 'assessListDetail' })
      }
    },
    assessListAdd () {
      this.$router.push({ name: 'assessListAdd' })
    }
  },
  mounted () {
    assessList()
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
.assessList {
  @include pane_boxShadow;
}
</style>
