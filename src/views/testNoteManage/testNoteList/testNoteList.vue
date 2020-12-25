<template>
  <div class="testNoteList">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="headFunc">
      <div slot="tool" class="tool-term">
        <el-button v-if="nav[navIdx] === '我添加的'" type="primary" @click="add">添加</el-button>
      </div>
    </pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入分类"></el-input>
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
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="index" align="center" label="排序">
          <template slot-scope="scope">
            <span class="index">{{scope.row.index}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="subjectCover" align="center" width="140" label="学科图片">
          <template slot-scope="scope">
            <img :src="scope.row.subjectCover" style="margin: 0.04rem 0 0;border-radius:6px;">
          </template>
        </el-table-column>
        <el-table-column prop="backgroundCover" align="center" width="140" label="背景图片">
          <template slot-scope="scope">
            <img :src="scope.row.backgroundCover" style=" margin: 0.04rem 0 0;border-radius:6px;">
          </template>
        </el-table-column>
        <el-table-column prop="stage" label="阶段"></el-table-column>
        <el-table-column prop="subject" label="学科"></el-table-column>
        <el-table-column prop="onlineStatus" align="center" label="上架状态"></el-table-column>
        <el-table-column prop="status" align="center" label="审核状态">
          <template slot-scope="scope">
            <span :style="`color:${statusColor[scope.row.status]}`">{{scope.row.status}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="creater" label="创建人"></el-table-column>
        <el-table-column prop="createTime" width="140" label="上传时间"></el-table-column>
        <el-table-column align="right" width="140" label="操作">
          <template slot-scope="scope">
            <tool-btn v-if="scope.row.status === '审核中'" :btns="['下架','详情']" @toolFunc="toolFunc"></tool-btn>
            <tool-btn v-if="scope.row.status === '已通过'" :btns="['修改','删除','详情']" @toolFunc="toolFunc"></tool-btn>
            <tool-btn v-if="scope.row.status === '待审核'" :btns="['修改','上架','详情']" @toolFunc="toolFunc"></tool-btn>
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
import { testNoteList } from '@/api/modules/TestNoteManage'
export default {
  name: 'testNoteList',
  components: {
    toolBtn
  },
  data () {
    return {
      nav: ['学霸笔记列表', '我添加的', '待审核', '已审核'],
      navIdx: 0,
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
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    headFunc (idx) {
      this.navIdx = idx
    },

    toolFunc (data) {
      window.console.log(data)
      if (data.btn === '详情') {
        this.$router.push({ name: 'testNoteListDetail' })
      }
    },

    add () {
      this.$router.push({ name: 'testNoteListAdd' })
    }
  },
  mounted () {
    testNoteList()
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
.testNoteList {
  @include pane_boxShadow;
}
</style>
