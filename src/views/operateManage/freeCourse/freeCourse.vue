<template>
  <div class="freeCourse">
    <pane-head :nav="nav" :borderBottom="true">
      <div slot="tool" class="tool-term">
        <el-button type="primary" @click="add">赠送试听课</el-button>
      </div>
    </pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入用户名"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请输入课程模块名称">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入课程名称"></el-input>
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
        <el-select v-model="value" clearable placeholder="请选择讲师">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择学习状态">
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
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="courseModulesName" label="课程模块名称" width="160"></el-table-column>
        <el-table-column prop="courseClass" label="课程名称" width="160"></el-table-column>
        <el-table-column prop="stage" label="阶段"></el-table-column>
        <el-table-column prop="subject" label="学科"></el-table-column>
        <el-table-column prop="courseClass" label="课程分类"></el-table-column>
        <el-table-column prop="studyStatus" label="学习状态">
          <template slot-scope="scope">
            <span style="color:#FFAA43" v-if="scope.row.studyStatus === '学习中'">{{scope.row.studyStatus}}</span>
            <span v-else>{{scope.row.studyStatus}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="service" label="赠送客服"></el-table-column>
        <el-table-column prop="createTime" width="160" label="赠送时间"></el-table-column>
        <el-table-column fixed="right" align="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" :id="scope.row.studyStatus" @click="detail">详情</el-button>
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
import { freeCourse } from '@/api/modules/OperateManage'
export default {
  name: 'freeCourse',
  data () {
    return {
      input: '',
      nav: ['已注册用户', '未注册用户'],
      navIdx: 0,
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
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    add () {
      this.$router.push({ name: 'freeCourseAdd' })
    },
    detail () {
      this.$router.push({ name: 'freeCourseDetail' })
    }
  },
  mounted () {
    freeCourse()
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
.freeCourse {
  @include pane_boxShadow;
}
</style>
