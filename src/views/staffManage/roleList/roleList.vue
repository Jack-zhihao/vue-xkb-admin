<template>
  <div class="roleList">
    <pane-head :title="'角色列表'" :borderBottom="true">
      <div slot="tool" class="tool-term">
        <el-button type="primary">添加</el-button>
      </div>
    </pane-head>
     <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入角色名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">>
        <el-table-column prop="rolesName" fixed label="角色名称"></el-table-column>
        <el-table-column prop="creater" label="创建人"></el-table-column>
        <el-table-column prop="createTime" align="center" label="创建时间"></el-table-column>
        <el-table-column label="操作" align="right">
          <template slot-scope="scope">
            <el-button type="text" @click="role(scope.row)">角色授权</el-button>
            <el-button type="text" @click="edit(scope.row)">修改</el-button>
            <el-button type="text" @click="del(scope.row)">删除</el-button>
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
import { rolesList } from '@/api/modules/StaffManage'
export default {
  name: 'roleList',
  data () {
    return {
      input: '',
      value: '',
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    role (row) {
      window.console.log(row)
    },
    edit (row) {
      window.console.log(row)
    },
    del (row) {
      window.console.log(row)
    }
  },
  mounted () {
    rolesList()
      .then(res => {
        window.console.log(res)
        const { data } = res
        this.tableData = data
      })
  }
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.roleList {
  @include pane_boxShadow;
}
</style>
