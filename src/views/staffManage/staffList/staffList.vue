<template>
  <div class="staffList">
    <pane-head :title="'员工列表'" :borderBottom="true">
      <div slot="tool" class="tool-term">
        <el-button type="primary" @click="add">添加</el-button>
      </div>
    </pane-head>
    <div class="content">
      <div class="content-left">
        <class-tree @editNode="editNode" @delNode="delNode"></class-tree>
      </div>
      <div class="content-right">
        <el-row class="common-condition">
          <el-col :span="4" class="condition">
            <el-input v-model="input" placeholder="请输入员工名"></el-input>
          </el-col>
          <el-col :span="4" class="condition">
            <el-input v-model="input" placeholder="请输入手机号"></el-input>
          </el-col>
          <el-col :span="4" class="condition">
            <el-select v-model="value" clearable placeholder="请选择职位">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="4" class="condition">
            <el-select v-model="value" clearable placeholder="请选择状态">
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
            <el-table-column prop="name" label="员工名"></el-table-column>
            <el-table-column prop="phone" width="120" label="手机号"></el-table-column>
            <el-table-column prop="partment" label="部门"></el-table-column>
            <el-table-column prop="post" label="职位"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column prop="lastLoginTime" width="150" label="最后登录时间"></el-table-column>
            <el-table-column align="right" fixed="right" label="操作" width="160">
              <template slot-scope="scope">
                <el-button v-if="scope.row.status === '离职' ?false: true" type="text" @click="leave(scope)">离职处理</el-button>
                <el-button v-if="scope.row.status === '离职' ?false: true" type="text" @click="edit(scope)">修改</el-button>
                <el-button type="text" @click="del(scope)">删除</el-button>
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
  </div>
</template>
<script>
import { staffList } from '@/api/modules/StaffManage'
import classTree from '@/components/common/classTree'
export default {
  name: 'staffList',
  components: {
    classTree
  },
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
    editNode (node) {
      window.console.log(node)
    },
    delNode (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    edit (scope) {
      window.console.log(scope)
      this.$router.push({ name: 'staffListDetail' })
    },
    leave (scope) {
      window.console.log(scope)
      this.$router.push({ name: 'staffListLeave' })
    },

    add () {
      this.$router.push({ name: 'staffListAdd' })
    }
  },
  mounted () {
    staffList()
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
.staffList {
  @include pane_boxShadow;
  .content {
    display: flex;
    justify-content: space-between;
    min-height: 2rem;
    .content-left {
      width: 35%;
      border-right: 1px solid $border-color;
      min-width: 2rem;
      box-sizing: border-box;
    }
    .content-right {
      width: 65%;
      height: 100%;
      min-width: calc(100% - 3rem);
    }
  }
}
</style>
