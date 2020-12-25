<template>
  <div class="departmentList">
    <pane-head :title="'部门列表'" :borderBottom="true"></pane-head>
    <div class="content">
      <div class="content-left">
        <class-tree @editNode="editNode" @delNode="delNode"></class-tree>
      </div>
      <div class="content-right">
        <el-row class="common-condition">
          <el-col :span="4" class="condition">
            <el-input v-model="input" placeholder="请输入部门名称"></el-input>
          </el-col>
          <el-col :span="4" class="condition">
            <el-select v-model="value" clearable placeholder="请输入部门分类">
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
            <el-table-column prop="partment" label="部门名称"></el-table-column>
            <el-table-column prop="postClass" label="部门分类"></el-table-column>
            <el-table-column prop="post" label="主部门"></el-table-column>
            <el-table-column prop="leader" label="负责人"></el-table-column>
            <el-table-column prop="post" label="主部门"></el-table-column>
            <el-table-column prop="creater" label="创建人"></el-table-column>
            <el-table-column prop="createTime" width="150" label="创建时间"></el-table-column>
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
import { departmentList } from '@/api/modules/StaffManage'
import classTree from '@/components/common/classTree'
export default {
  name: 'departmentList',
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
    },
    del (scope) {
      window.console.log(scope)
    }
  },
  mounted () {
    departmentList()
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
.departmentList {
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
