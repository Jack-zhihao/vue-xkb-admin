<template>
  <div class="freeCourseDetail">
    <pane-head :borderBottom="true" :title="'赠送试听课详情'"></pane-head>
    <div class="detail-gather">
      <el-row>
        <el-col :span="6" class="gather-content">
          <div class="content">
            <p>赠送课程数</p>
            <p>264</p>
          </div>
          <span class="icon iconfont iconvideo"></span>
        </el-col>
        <el-col :span="6" class="gather-content">
          <div class="content">
            <p>已观看</p>
            <p>200</p>
          </div>
          <span class="icon iconfont icontick"></span>
        </el-col>
        <el-col :span="6" class="gather-content">
          <div class="content">
            <p>未观看</p>
            <p>64</p>
          </div>
          <span class="icon iconfont iconerror"></span>
        </el-col>
      </el-row>
    </div>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入用户名"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入课程模块标题"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入课程标题"></el-input>
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
        <el-select v-model="value" clearable placeholder="请选择所属部门">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition condition--date">
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
      <el-col :span="4" class="condition">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="date" label="课程标题"></el-table-column>
        <el-table-column prop="name" label="课程模块标题"></el-table-column>
        <el-table-column prop="name" label="课程阶段"></el-table-column>
        <el-table-column prop="name" label="学科分类"></el-table-column>
        <el-table-column prop="name" label="课程分类"></el-table-column>
        <el-table-column prop="number" label="赠送次数" sortable align="center"></el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
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
export default {
  name: 'freeCourseDetail',
  data () {
    return {
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
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          number: 1
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          number: 2
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          number: 3
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          number: 4
        }
      ],
      currentPage: 5
    }
  },
  methods: {
    handleSizeChange (val) {
      window.console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      window.console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.freeCourseDetail {
  @include pane_boxShadow;
  .detail-gather {
    & > div {
      display: flex;
      margin: 0.24rem 0.16rem 0;
      justify-content: flex-start;
    }
  }
  .gather-content {
    display: flex;
    justify-content: space-between;
    padding: 0.16rem;
    border-radius: 0.1rem;
    border: 1px solid $border-color;
    margin-right: 0.16rem;
    height: 1rem;
    &:last-child {
      margin: 0;
    }
    .content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      p {
        &:first-child {
          font-size: $fontSize_14;
          color: $mainTextGray;
        }
        &:last-child {
          font-size: 0.28rem;
        }
      }
    }
    .icon {
      display: inline-block;
      width: 0.56rem;
      height: 0.56rem;
      border-radius: 0.56rem;
      text-align: center;
      line-height: 0.56rem;
      font-size: 0.2rem;
    }
    &:nth-child(1) > span {
      background-color: $icon-blue-bg;
      color: $icon-blue;
    }
    &:nth-child(2) > span {
      background-color: $icon-yellow-bg;
      color: $icon-yellow;
    }
    &:nth-child(3) > span {
      background-color: $icon-green-bg;
      color: $icon-green;
    }
  }
  .common-condition {
    .condition--date {
      display: flex;
      .el-select {
        width: 40%;
        margin-right: 0.08rem;
      }
      .el-date-editor {
        width: 60%;
      }
    }
  }
  .table-data {
    padding: 0.24rem 0.16rem;
  }
}
</style>
