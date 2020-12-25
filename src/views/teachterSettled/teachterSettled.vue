<template>
  <div class="teachterSettled">
    <pane-head :title="'教师入驻'" :borderBottom="true"></pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入讲师名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请输入状态">
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
        <el-table-column prop="teachterName" fixed label="讲师名称"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column prop="idCard" label="身份证号码"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="dealTime" label="处理时间"></el-table-column>
        <el-table-column label="操作" align="right">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)" v-if="scope.row.status === '未处理'">处理</el-button>
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
  </div>
</template>
<script>
import { teachterSettledList } from '@/api/modules/TeachterSettled'
export default {
  name: 'teachterSettled',
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
    detail () {
      this.$router.push({ name: 'teachterSettledDetail' })
    }
  },
  mounted () {
    teachterSettledList()
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
.teachterSettled {
  @include pane_boxShadow;
}
</style>
