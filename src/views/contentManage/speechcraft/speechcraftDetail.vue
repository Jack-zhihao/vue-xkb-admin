<template>
  <div class="speechcraftDetail">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="headFunc"></pane-head>
    <template v-if="nav[navIdx] === '基础信息'">
      <div class="pane">
        <div class="pane-content">
          <el-row class="info-row">
            <el-col :span="24">
              <p>话术标题</p>
              <p>孩子成绩中等，有偏科的现象？</p>
            </el-col>
          </el-row>
          <el-row class="info-row">
            <el-col :span="5">
              <p>阶段</p>
              <p>高中</p>
            </el-col>
            <el-col :span="5">
              <p>年级</p>
              <p>高三</p>
            </el-col>
            <el-col :span="5">
              <p>学科</p>
              <p>生物</p>
            </el-col>
            <el-col :span="5">
              <p>课程分类</p>
              <p>同步培优</p>
            </el-col>
          </el-row>
          <el-row class="info-row">
            <el-col :span="24">
              <p>关键词</p>
              <div class="keyWord">
                <span>集合</span>
                <span>集合</span>
                <span>集合</span>
                <span>集合</span>
              </div>
            </el-col>
          </el-row>
          <el-row class="info-row">
            <el-col :span="24">
              <p>答案讲解</p>
              <p>设计工作上最重要的是针对人们习以为常，认为理所当然的事物来做一些思考</p>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="pane">
        <pane-head :title="'审核信息'" :borderBottom="true"></pane-head>
        <div class="pane-content">
          <examine-step></examine-step>
        </div>
      </div>
    </template>
    <template v-if="nav[navIdx] === '课程信息'">
      <div class="pane">
        <el-row class="common-condition">
          <el-col :span="4" class="condition">
            <el-input v-model="input" placeholder="请输入课程模块标题"></el-input>
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
            <el-table-column prop="pcmcheng" align="center" label="序号">
              <template slot-scope="scope">
                <span class="index">{{scope.row.index}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="jduan" label="课程模块标题"></el-table-column>
            <el-table-column prop="xke" label="阶段"></el-table-column>
            <el-table-column prop="kcflei" label="年级"></el-table-column>
            <el-table-column prop="skztai" label="学科"></el-table-column>
            <el-table-column prop="sjztai" label="课程分类"></el-table-column>
            <el-table-column prop="kcflei" label="课程模块编码"></el-table-column>
            <el-table-column prop="skztai" label="销售价格"></el-table-column>
            <el-table-column prop="sjztai" label="讲师"></el-table-column>
            <el-table-column label="操作" align="right">
              <template slot-scope="scope">
                <el-button type="text" :id="scope.row.sjztai">详情</el-button>
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
  </div>
</template>
<script>
import examineStep from '@/components/common/examineStep'
export default {
  name: 'speechcraftDetail',
  components: {
    examineStep
  },
  data () {
    return {
      nav: ['基础信息', '课程信息'],
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
      tableData: [
        {
          index: 0
        },
        {
          index: 1
        },
        {
          index: 2
        },
        {
          index: 3
        }
      ],
      currentPage: 5
    }
  },
  methods: {
    headFunc (index) {
      this.navIdx = Number(index)
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.speechcraftDetail {
  .paneHead {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .pane {
    @include pane_boxShadow;
    &:nth-child(2){
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    &:nth-child(3){
      margin-top: 0.24rem;
    }
  }
  .info-row {
    .keyWord {
      display: flex;
      justify-content: flex-start;
      margin-top: 0.12rem;
      &::after {
        content: '';
      }
      span {
        display: inline-block;
        padding: 0 0.08rem;
        height: 0.2rem;
        line-height: 1.6;
        background-color: rgba(92, 102, 140, 0.7);
        border-radius: 3px;
        color: #fff;
        margin-right: 0.08rem;
      }
    }
  }
}
</style>
