<template>
  <div class="recycleBin">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="headFunc"></pane-head>
    <template v-if="nav[navIdx] === '课程模块回收'">
      <el-row class="common-condition">
        <el-col :span="4" class="condition">
          <el-input v-model="input" placeholder="请输入课程模块标题"></el-input>
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
        <el-table :data="courseModulesRecylebin" stripe width="100%" key="tableData">
          <el-table-column prop="courseModulesTitle" width="160px" label="课程模块标题"></el-table-column>
          <el-table-column prop="courseStage" label="阶段"></el-table-column>
          <el-table-column prop="courseGrade" label="年级"></el-table-column>
          <el-table-column prop="courseSubject" label="学科"></el-table-column>
          <el-table-column prop="courseClass" label="课程分类"></el-table-column>
          <el-table-column prop="salesMoney" label="销售价格"></el-table-column>
          <el-table-column prop="teachter" label="讲师"></el-table-column>
          <el-table-column prop="verifyStatus" align="center" label="审核状态">
            <template slot-scope="scope">
              <span :style="`color:${statusColor[statusList[scope.row.verifyStatus]]}`">{{statusList[scope.row.verifyStatus]}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="delUser" label="删除人"></el-table-column>
          <el-table-column prop="delTime" width="140px" label="删除时间"></el-table-column>
          <el-table-column align="right" width="100" fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="recovery(scope.row)">恢复</el-button>
              <el-button type="text" @click="detail(scope.row)">详情</el-button>
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
    </template>
    <template v-else>
      <el-row class="common-condition">
        <el-col :span="4" class="condition">
          <el-input v-model="input" placeholder="请输入课程模块标题"></el-input>
        </el-col>
        <el-col :span="4" class="condition">
          <el-input v-model="input" placeholder="课程标题"></el-input>
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
        <el-table :data="courseRecylebin" stripe width="100%" key="tableData2">
          <el-table-column prop="courseTitle" label="课程标题"></el-table-column>
          <el-table-column prop="courseModulesTitle" width="140" label="课程模块标题"></el-table-column>
          <el-table-column prop="courseStage" width="80" label="阶段"></el-table-column>
          <el-table-column prop="courseGrade" width="80" label="年级"></el-table-column>
          <el-table-column prop="courseSubject" width="80" label="学科"></el-table-column>
          <el-table-column prop="courseClass" label="课程分类"></el-table-column>
          <el-table-column prop="salesMoney" label="销售价格"></el-table-column>
          <el-table-column prop="teachter" label="讲师"></el-table-column>
          <el-table-column prop="verifyStatus" align="center" label="审核状态">
            <template slot-scope="scope">
              <span :style="`color:${statusColor[statusList[scope.row.verifyStatus]]}`">{{statusList[scope.row.verifyStatus]}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="delUser" label="删除人"></el-table-column>
          <el-table-column prop="delTime" width="140" label="删除时间"></el-table-column>
          <el-table-column align="right" fixed="right" width="100" label="操作" key="F">
            <template slot-scope="scope">
              <el-button type="text" @click="recovery2(scope.row)">恢复</el-button>
              <el-button type="text" @click="detail2(scope.row)">详情</el-button>
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
    </template>
  </div>
</template>
<script>
import { recycleBin } from '@/api/modules/CourseManage'
export default {
  name: 'recycleBin',
  data () {
    return {
      nav: ['课程模块回收', '课程回收'],
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
      courseModulesRecylebin: [],
      courseRecylebin: [],
      currentPage: 5,
      statusList: ['待审核', '审核中', '已通过', '不通过', '已取消'],
      statusColor: {
        待审核: '#FF5555',
        审核中: '#FFAA43',
        已通过: '#19CBA9',
        不通过: '#454E70',
        已取消: 'rgba(69, 78, 112, 0.4)'
      }
    }
  },
  methods: {
    headFunc (index) {
      window.console.log(Number(index))
      this.navIdx = Number(index)
    },
    recovery () {},
    detail () {
      this.$router.push({ name: 'recycleBinCourseModul' })
    },
    detail2 () {
      this.$router.push({ name: 'recycleBinCourse' })
    }
  },
  mounted () {
    recycleBin()
      .then(res => {
        window.console.log(res)
        const { courseModulesRecylebin, courseRecylebin } = res.data
        this.courseRecylebin = courseRecylebin
        this.courseModulesRecylebin = courseModulesRecylebin
      })
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.recycleBin {
  @include pane_boxShadow;
}
</style>
