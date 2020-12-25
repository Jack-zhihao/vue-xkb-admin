<template>
  <div class="errorSubjectReason">
    <pane-head :title="'错题原因'" :borderBottom="true">
      <div slot="tool" class="tool-term">
        <el-button type="primary" @click="add">添加</el-button>
      </div>
    </pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择错题原因">
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
        <el-table-column prop="errorSeason" label="错题原因"></el-table-column>
        <el-table-column prop="errorDetail" label="描述"></el-table-column>
        <el-table-column prop="viewStatus" align="center" label="显示状态"></el-table-column>
        <el-table-column prop="isUsed" align="center" label="是否已被使用">
          <template slot-scope="scope">
            <span>{{scope.row.isUsed? '是': '否'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="creater" label="创建人"></el-table-column>
        <el-table-column prop="createTime" width="150" label="创建时间"></el-table-column>
        <el-table-column align="right" fixed="right" width="120" label="操作">
          <template slot-scope="scope">
            <span v-if="scope.row.isUsed">
              <el-button type="text" @click="hide(scope)">隐藏</el-button>
            </span>
            <span v-else>
              <el-button type="text" @click="view(scope)">显示</el-button>
              <el-button type="text" @click="del(scope)">删除</el-button>
            </span>
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
import { errorSubjectReason } from '@/api/modules/ErrorSubjectManage'
export default {
  name: 'errorSubjectReason',
  data () {
    return {
      input: '',
      value: '',
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
          reason: '看错条件',
          msu: '看错条件，误解题目意思',
          xsztai: '显示',
          sfybsyong: false,
          cjren: '羊红群',
          cjsjian: '2019-04-12 16:44:36'
        },
        {
          reason: '看错条件',
          msu: '看错条件，误解题目意思',
          xsztai: '显示',
          sfybsyong: true,
          cjren: '羊红群',
          cjsjian: '2019-04-12 16:44:36'
        },
        {
          reason: '看错条件',
          msu: '看错条件，误解题目意思',
          xsztai: '显示',
          sfybsyong: true,
          cjren: '羊红群',
          cjsjian: '2019-04-12 16:44:36'
        }
      ],
      currentPage: 5
    }
  },
  methods: {
    hide (scope) {
      window.console.log(scope)
    },
    view (scope) {
      window.console.log(scope)
    },
    del (scope) {
      window.console.log(scope)
    },
    add () {
      this.$router.push({ name: 'errorSubjectReasonAdd' })
    }
  },
  mounted () {
    errorSubjectReason()
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
.errorSubjectReason {
  @include pane_boxShadow;
}
</style>
