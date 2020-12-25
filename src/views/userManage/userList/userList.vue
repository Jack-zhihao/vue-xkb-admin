<template>
  <div class="userList">
    <pane-head :nav="nav" :borderBottom="true"></pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入用户名"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入手机号"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择班级">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="是否购买过课程">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择类型标签">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
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
        <el-select v-model="value" clearable placeholder="请选择来源">
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
        <el-table-column prop="cover" width="120" label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.cover" style="margin-top: 4px;border-radius: 1rem;">
          </template>
        </el-table-column>
        <el-table-column prop="username" width="120" label="用户名"></el-table-column>
        <el-table-column prop="phone" width="120" label="手机号"></el-table-column>
        <el-table-column prop="tabs" label="用户标签"></el-table-column>
        <el-table-column prop="bqlxing" label="标签类型"></el-table-column>
        <el-table-column prop="class" label="班级"></el-table-column>
        <el-table-column prop="recourse" label="来源"></el-table-column>
        <el-table-column prop="service" label="客服"></el-table-column>
        <el-table-column prop="status" label="有效状态"></el-table-column>
        <el-table-column prop="lastLoginTime" width="150" label="最后登录时间"></el-table-column>
        <el-table-column align="right" fixed="right" width="160" label="操作">
          <template slot-scope="scope">
            <tool-btn v-if="scope.row.status === '有效'" :btns="['详情','绑定客服','回访']" @toolFunc="toolFunc"></tool-btn>
            <tool-btn v-if="scope.row.status === '无效'" :btns="['详情','更改客服','回访']"></tool-btn>
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
import { userList } from '@/api/modules/UserManage'
export default {
  name: 'userList',
  components: {
    toolBtn
  },
  data () {
    return {
      nav: ['用户列表', '待回访用户'],
      navIdx: 0,
      input: '',
      options: [],
      value: '',
      value1: '',
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    toolFunc (data) {
      if (data.btn === '详情') {
        this.$router.push({ name: 'userListDetail' })
      }
    }
  },
  mounted () {
    userList()
      .then(res => {
        const { data } = res
        window.console.log(data)
        this.tableData = data
      })
  }
}
</script>

<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.userList {
  @include pane_boxShadow;
}
</style>
