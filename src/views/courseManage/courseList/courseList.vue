<template>
  <div class="courseList">
    <pane-head :nav="['课程模块列表','我添加的','待审核','已审核']" :borderBottom="true" @pane-head-func="paneHeadFunc">
      <div class="tool-term" slot="tool">
        <el-button v-show="transition[transition_idx] === '我添加的'" @click="addCourse" type="primary">添加</el-button>
      </div>
    </pane-head>

      <div v-show="transition[transition_idx] === '课程模块列表'">
        <el-row class="common-condition">
          <el-col :span="4" class="condition">
            <el-input v-model="input" placeholder="请输入课程模块标题"></el-input>
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
            <el-button>搜索</el-button>
          </el-col>
        </el-row>
        <div class="table-data">
          <el-table :data="tableData" stripe width="100%" v-loading='loading'>
            <el-table-column prop="date" fixed align="center" label="序号">
              <template slot-scope="scope">
                <span class="index">{{scope.row.index}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="title" width="100" label="课程模块标题"></el-table-column>
            <el-table-column prop="stage" label="阶段"></el-table-column>
            <el-table-column prop="grade" label="年级"></el-table-column>
            <el-table-column prop="subject" label="学科"></el-table-column>
            <el-table-column prop="courseClass" label="课程分类"></el-table-column>
            <el-table-column prop="courseModulesCode" width="100px" label="课程模块编码"></el-table-column>
            <el-table-column prop="salesMoney" align="right" label="销售价格"></el-table-column>
            <el-table-column prop="teachter" label="讲师"></el-table-column>
            <el-table-column prop="onlineState" label="上架状态">
              <template slot-scope="scope">
                <span>{{statusText[scope.row.auditState]}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="auditState" label="审核状态">
              <template slot-scope="scope">
                <span :style="'color:'+ statusColor[scope.row.auditState]">{{statusText[scope.row.auditState]}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="creater" label="创建人"></el-table-column>
            <el-table-column prop="creatTime" width="140" label="创建时间"></el-table-column>
            <el-table-column align="right" fixed="right" width="168px" label="操作">
              <template slot-scope="{row}">
                <div v-if="row.auditState === 0">
                  <tool-btn :btns="['修改','删除','详情']" :id="String(row.auditState)" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="row.auditState === 1">
                  <tool-btn :btns="['修改','下架','详情']" :id="String(row.auditState)" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="row.auditState === 3">
                  <tool-btn
                    :btns="['修改','下架','删除','详情']"
                    :id="String(row.auditState)"
                    @toolFunc="toolFunc"
                  ></tool-btn>
                </div>
                <div v-if="row.auditState === 2">
                  <tool-btn :btns="['详情']" :id="String(row.auditState)" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="row.auditState === 4">
                  <tool-btn :btns="['取消审核','详情']" :id="String(row.auditState)" @toolFunc="toolFunc"></tool-btn>
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
      </div>
      <div v-show="transition[transition_idx] === '我添加的'">
        <el-row class="common-condition">
          <el-col :span="4" class="condition">
            <el-input v-model="input" placeholder="请输入课程模块标题"></el-input>
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
            <el-button>搜索</el-button>
          </el-col>
        </el-row>
        <div class="table-data">
          <el-table :data="tableData" stripe width="100%">
            <el-table-column prop="date" fixed align="center" label="序号">
              <template slot-scope="scope">
                <span class="index">{{scope.row.index}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" width="100px" label="课程模块标题"></el-table-column>
            <el-table-column prop="name" label="阶段"></el-table-column>
            <el-table-column prop="name" label="年级"></el-table-column>
            <el-table-column prop="name" label="学科"></el-table-column>
            <el-table-column prop="name" label="课程分类"></el-table-column>
            <el-table-column prop="name" width="100px" label="课程模块编码"></el-table-column>
            <el-table-column prop="name" label="销售价格"></el-table-column>
            <el-table-column prop="name" label="讲师"></el-table-column>
            <el-table-column prop="name" label="上架状态"></el-table-column>
            <el-table-column prop="examine" label="审核状态">
              <template slot-scope="scope">
                <span :style="'color:'+ statusColor[scope.row.examine]">{{scope.row.examine}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="创建人"></el-table-column>
            <el-table-column prop="name" label="创建时间"></el-table-column>
            <el-table-column align="right" fixed="right" width="160px" label="操作">
              <template slot-scope="scope">
                <div v-if="scope.row.examine === '不通过'">
                  <tool-btn :btns="['修改','删除','详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="scope.row.examine === '已通过'">
                  <tool-btn :btns="['修改','下架','详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="scope.row.examine === '审核中'">
                  <tool-btn
                    :btns="['修改','下架','删除','详情']"
                    :id="scope.row.examine"
                    @toolFunc="toolFunc"
                  ></tool-btn>
                </div>
                <div v-if="scope.row.examine === '待审核'">
                  <tool-btn :btns="['详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="scope.row.examine === '已取消'">
                  <tool-btn :btns="['取消审核','详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
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
      </div>
      <div v-show="transition[transition_idx] === '待审核'">
        <el-row class="common-condition">
          <el-col :span="4" class="condition">
            <el-input v-model="input" placeholder="请输入课程模块标题"></el-input>
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
            <el-button>搜索</el-button>
          </el-col>
        </el-row>
        <div class="table-data">
          <el-table :data="tableData" stripe width="100%">
            <el-table-column prop="date" fixed align="center" label="序号">
              <template slot-scope="scope">
                <span class="index">{{scope.row.index}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" width="100px" label="课程模块标题"></el-table-column>
            <el-table-column prop="name" label="阶段"></el-table-column>
            <el-table-column prop="name" label="年级"></el-table-column>
            <el-table-column prop="name" label="学科"></el-table-column>
            <el-table-column prop="name" label="课程分类"></el-table-column>
            <el-table-column prop="name" width="100px" label="课程模块编码"></el-table-column>
            <el-table-column prop="name" label="销售价格"></el-table-column>
            <el-table-column prop="name" label="讲师"></el-table-column>
            <el-table-column prop="name" label="上架状态"></el-table-column>
            <el-table-column prop="examine" label="审核状态">
              <template slot-scope="scope">
                <span :style="'color:'+ statusColor[scope.row.examine]">{{scope.row.examine}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="创建人"></el-table-column>
            <el-table-column prop="name" label="创建时间"></el-table-column>
            <el-table-column align="right" fixed="right" width="160px" label="操作">
              <template slot-scope="scope">
                <div v-if="scope.row.examine === '不通过'">
                  <tool-btn :btns="['修改','删除','详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="scope.row.examine === '已通过'">
                  <tool-btn :btns="['修改','下架','详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="scope.row.examine === '审核中'">
                  <tool-btn
                    :btns="['修改','下架','删除','详情']"
                    :id="scope.row.examine"
                    @toolFunc="toolFunc"
                  ></tool-btn>
                </div>
                <div v-if="scope.row.examine === '待审核'">
                  <tool-btn :btns="['详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="scope.row.examine === '已取消'">
                  <tool-btn :btns="['取消审核','详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
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
      </div>
      <div v-show="transition[transition_idx] === '已审核'">
        <el-row class="common-condition">
          <el-col :span="4" class="condition">
            <el-input v-model="input" placeholder="请输入课程模块标题"></el-input>
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
            <el-button>搜索</el-button>
          </el-col>
        </el-row>
        <div class="table-data">
          <el-table :data="tableData" stripe width="100%">
            <el-table-column prop="date" fixed align="center" label="序号">
              <template slot-scope="scope">
                <span class="index">{{scope.row.index}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" width="100px" label="课程模块标题"></el-table-column>
            <el-table-column prop="name" label="阶段"></el-table-column>
            <el-table-column prop="name" label="年级"></el-table-column>
            <el-table-column prop="name" label="学科"></el-table-column>
            <el-table-column prop="name" label="课程分类"></el-table-column>
            <el-table-column prop="name" width="100px" label="课程模块编码"></el-table-column>
            <el-table-column prop="name" label="销售价格"></el-table-column>
            <el-table-column prop="name" label="讲师"></el-table-column>
            <el-table-column prop="name" label="上架状态"></el-table-column>
            <el-table-column prop="examine" label="审核状态">
              <template slot-scope="scope">
                <span :style="'color:'+ statusColor[scope.row.examine]">{{scope.row.examine}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="创建人"></el-table-column>
            <el-table-column prop="name" label="创建时间"></el-table-column>
            <el-table-column align="right" fixed="right" width="160px" label="操作">
              <template slot-scope="scope">
                <div v-if="scope.row.examine === '不通过'">
                  <tool-btn :btns="['修改','删除','详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="scope.row.examine === '已通过'">
                  <tool-btn :btns="['修改','下架','详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="scope.row.examine === '审核中'">
                  <tool-btn
                    :btns="['修改','下架','删除','详情']"
                    :id="scope.row.examine"
                    @toolFunc="toolFunc"
                  ></tool-btn>
                </div>
                <div v-if="scope.row.examine === '待审核'">
                  <tool-btn :btns="['详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
                </div>
                <div v-if="scope.row.examine === '已取消'">
                  <tool-btn :btns="['取消审核','详情']" :id="scope.row.examine" @toolFunc="toolFunc"></tool-btn>
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
      </div>
  </div>
</template>
<script>
import toolBtn from '@/components/common/toolBtn'
import { courseList } from '@/api/modules/CourseManage'
export default {
  name: 'courseList',
  components: {
    toolBtn
  },
  data () {
    return {
      transition: ['课程模块列表', '我添加的', '待审核', '已审核'],
      transition_idx: 0,

      // '不通过': '#454E70','已通过': '#19CBA9','待审核': '#FF5555','审核中': '#FFAA43','已取消': 'rgba(69, 78, 112, 0.4)'
      statusText: ['不通过', '已通过', '待审核', '审核中', '已取消'],
      statusColor: ['#454E70', '#19CBA9', '#FF5555', '#FFAA43', 'rgba(69, 78, 112, 0.4)'],
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
      // 表格数据
      loading: true,
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    toolFunc (data) {
      if (data.btn === '详情') {
        this.$router.push({ name: 'courseListDetail' })
      }
    },
    addCourse () {
      this.$router.push({ name: 'courseListAdd' })
    },
    paneHeadFunc (idx) {
      this.transition_idx = idx
    }
  },
  mounted () {
    courseList()
      .then(res => {
        window.console.log(res)
        const { data } = res
        this.tableData = data
        this.loading = false
      })
  }
}
</script>
<style lang='scss'>
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.courseList {
  @include pane_boxShadow;
}
</style>
