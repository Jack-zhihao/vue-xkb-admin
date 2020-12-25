<template>
  <div class="positionList">
    <pane-head :title="'职位列表'" :borderBottom="true">
      <div slot="tool" class="tool-term">
        <el-button type="primary" @click="add">添加</el-button>
      </div>
    </pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入职位名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入部门名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入角色名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">>
        <el-table-column prop="postName" fixed label="职位名称"></el-table-column>
        <el-table-column prop="partment" label="部门"></el-table-column>
        <el-table-column prop="class" align="center" label="角色"></el-table-column>
        <el-table-column prop="remack" align="left" label="备注"></el-table-column>
        <el-table-column prop="creater" align="center" label="创建人"></el-table-column>
        <el-table-column prop="createTime" align="center" label="创建时间"></el-table-column>
        <el-table-column label="操作" align="right" fixed="right">
          <template slot-scope="scope">
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
import { postList } from '@/api/modules/StaffManage'
export default {
  name: 'positionList',
  data () {
    return {
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
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    edit (row) {
      window.console.log(row)
    },
    del (row) {
      window.console.log(row)
    },
    add () {
      this.$router.push({ name: 'positionListAdd' })
    }
  },
  mounted () {
    postList()
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
.positionList {
  @include pane_boxShadow;
}
</style>
