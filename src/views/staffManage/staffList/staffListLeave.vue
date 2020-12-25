<template>
  <div class="staffListLeave">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="headFunc">
      <div slot="tool" class="tool-term">
        <el-button v-if="nav[navIdx] === '客户信息'" type="primary">批量更换客服</el-button>
      </div>
    </pane-head>
    <div class="pane-content" v-if="nav[navIdx] === '员工信息'">
      <el-row class="info-row">
        <el-col :span="5">
          <p>员工姓名</p>
          <p>从翔</p>
        </el-col>
        <el-col :span="5">
          <p>部门</p>
          <p>北京区 > 销售部</p>
        </el-col>
        <el-col :span="5">
          <p>职位</p>
          <p>教研总监</p>
        </el-col>
        <el-col :span="5">
          <p>入职时间</p>
          <p>2019-08-15 11:50</p>
        </el-col>
      </el-row>
      <el-row class="info-row">
        <el-col :span="5">
          <p>离职时间</p>
          <p>2019-08-15 11:50</p>
        </el-col>
      </el-row>
      <el-row class="info-row">
        <el-col :span="24">
          <p>备注</p>
          <p>
            <text-area></text-area>
          </p>
        </el-col>
      </el-row>
    </div>
    <template v-else>
      <el-row class="common-condition">
        <el-col :span="4" class="condition">
          <el-input v-model="input" placeholder="请输入用户名"></el-input>
        </el-col>
        <el-col :span="4" class="condition">
          <el-input v-model="input" placeholder="请输入用户名称"></el-input>
        </el-col>
        <el-col :span="4" class="condition">
          <el-select v-model="value" clearable placeholder="请选择用户标签">
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
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="phone" fixed label="手机号"></el-table-column>
          <el-table-column prop="username" fixed label="用户名"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>
          <el-table-column prop="userTag" align="center" label="用户标签"></el-table-column>
          <el-table-column prop="userLogTime" label="用户注册时间"></el-table-column>
          <el-table-column prop="userLoginTime" label="最后登录时间"></el-table-column>
          <el-table-column prop="isPur" align="center" label="是否购买过课程"></el-table-column>
          <el-table-column align="right" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="changeServe(scope.row)">更换客服</el-button>
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
import textArea from '@/components/common/textArea'
export default {
  name: 'staffListLeave',
  components: {
    textArea
  },
  data () {
    return {
      nav: ['员工信息', '客户信息'],
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
      tableData: [
        {
          phone: '18930279932',
          username: '张三三',
          sex: '男',
          userTag: '家长',
          userLogTime: '2019-08-15 13:30',
          userLoginTime: '2019-08-15 13:30',
          isPur: '未购买'
        }
      ],
      currentPage: 5
    }
  },
  methods: {
    headFunc (index) {
      window.console.log(index)
      this.navIdx = Number(index)
    },
    changeServe (row) {
      window.console.log(row)
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.staffListLeave {
  @include pane_boxShadow;
}
</style>
