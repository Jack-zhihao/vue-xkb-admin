<template>
  <div class="courseScore">
    <pane-head :title="'课程评分'" :borderBottom="true"></pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入课程名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入课程模块名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入课程分类"></el-input>
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
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="courseTitle" label="课程标题"></el-table-column>
        <el-table-column prop="courseModulesTitle" width="110" label="课程模块标题"></el-table-column>
        <el-table-column prop="courseStage" label="阶段"></el-table-column>
        <el-table-column prop="courseGrade" label="年级"></el-table-column>
        <el-table-column prop="courseSubject" label="学科"></el-table-column>
        <el-table-column prop="courseClass" label="课程分类"></el-table-column>
        <el-table-column prop="teachter" label="讲师"></el-table-column>
        <el-table-column prop="userScorePerent"  align="center" label="评分用户数"></el-table-column>
        <el-table-column prop="goodScorePerent" align="center" label="好评率"></el-table-column>
        <el-table-column prop="updateTime" width="140" label="更新时间"></el-table-column>
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
import { courseScore } from '@/api/modules/CourseManage'
export default {
  name: 'courseScore',
  data () {
    return {
      input: '',
      currentPage: 5,
      tableData: [
        {
          kcbti: '几何三角函数',
          kcmkbti: '几何三角函数',
          jduan: '初中',
          nji: '初一',
          xke: '数学',
          xcflei: '专题训练',
          jshi: '张悦',
          hpyhshu: '43',
          hplv: '100%',
          gxsjian: '2019-06-28 19:06:12'
        }
      ],
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
      value: ''
    }
  },
  mounted () {
    courseScore()
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
.courseScore {
  @include pane_boxShadow;
}
</style>
