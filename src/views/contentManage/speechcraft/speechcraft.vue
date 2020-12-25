<template>
  <div class="speechcraft">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="headFunc">
      <div slot="tool" class="tool-term">
        <el-button v-if="nav[navIdx] === '我添加的'" type="primary" @click="add">添加</el-button>
      </div>
    </pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入话术语"></el-input>
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
        <el-select v-model="value" clearable placeholder="请选择年级">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入关键词"></el-input>
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
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="speechcraft" width="300" label="话术语"></el-table-column>
        <el-table-column prop="stage" label="阶段"></el-table-column>
        <el-table-column prop="grade" label="年级"></el-table-column>
        <el-table-column prop="subject" label="学科"></el-table-column>
        <el-table-column prop="courseClass" label="课程分类"></el-table-column>
        <el-table-column prop="status" label="审核状态">
          <template slot-scope="scope">
            <span :style="`color:${statusColor[scope.row.status]}`">{{scope.row.status}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="creater" label="创建人"></el-table-column>
        <el-table-column prop="createTime" width="180" label="创建时间"></el-table-column>
        <el-table-column width="140" align="right" fixed="right" label="操作">
          <template slot-scope="scope">
            <tool-btn v-if="scope.row.status === '不通过'" :btns="['取消', '详情']" @toolFunc="toolFunc"></tool-btn>
            <tool-btn v-if="scope.row.status === '已通过'" :btns="['修改','删除', '详情']"  @toolFunc="toolFunc"></tool-btn>
            <tool-btn v-if="scope.row.status === '审核中'" :btns="['修改','删除', '详情']"  @toolFunc="toolFunc"></tool-btn>
            <tool-btn v-if="scope.row.status === '待审核'" :btns="['修改', '详情']"  @toolFunc="toolFunc"></tool-btn>
            <tool-btn v-if="scope.row.status === '已取消'" :btns="['详情']"  @toolFunc="toolFunc"></tool-btn>
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
import { speechcraft } from '@/api/modules/ContentManage'
export default {
  name: 'speechcraft',
  components: {
    toolBtn
  },
  data () {
    return {
      statusColor: {
        不通过: '#454E70',
        已通过: '#19CBA9',
        审核中: '#FFAA43',
        待审核: '#FF5555',
        已取消: 'rgba(69, 78, 112 0.4)'

      },
      nav: ['话术列表', '我添加的', '待审核', '已审核'],
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
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    headFunc (index) {
      this.navIdx = Number(index)
    },
    add () {
      this.$router.push({ name: 'speechcraftAdd' })
    },
    toolFunc (data) {
      window.console.log(data)
      if (data.btn === '详情') {
        this.$router.push({ name: 'speechcraftDetail' })
      }
    }
  },
  mounted () {
    speechcraft()
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
.speechcraft {
  @include pane_boxShadow;
}
</style>
