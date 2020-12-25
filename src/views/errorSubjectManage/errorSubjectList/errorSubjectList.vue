<template>
  <div class="errorSubjectList">
    <pane-head :title="'错题列表'" :borderBottom="true"></pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入用户名"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入手机号"></el-input>
      </el-col>
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
        <el-input v-model="input" placeholder="请输入分类"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="cover" width="160" label="学科图片">
          <template slot-scope="scope">
            <img :src="scope.row.cover" style="margin: .04rem 0 0;border-radius:6px;">
          </template>
        </el-table-column>
        <el-table-column prop="errorSeason" align="center" label="错题原因">
          <template slot-scope="scope">
            <div class="tagBox">
              <span class="tag" v-for="(errorSeason ,i) in scope.row.errorSeason.split(',')" :key="i">{{errorSeason}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="stage" width="80" label="阶段"></el-table-column>
        <el-table-column prop="subject" width="80" label="学科"></el-table-column>
        <el-table-column prop="errorClass" width="100" label="错题子分类"></el-table-column>
        <el-table-column prop="username" width="120" label="用户名"></el-table-column>
        <el-table-column prop="phone" width="120" label="手机号"></el-table-column>
        <el-table-column prop="isTip" width="80" align="center" label="是否标记">
          <template slot-scope="scope">
            <span>{{scope.row.isTip? '是': '否'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" width="140" align="center" label="上传时间"></el-table-column>
      </el-table>
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="100"
        layout="slot, prev, pager, next, jumper"
        :total="1000">
        <span class="el-pagination-info">1/10页&nbsp;总共100条</span>
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { errorSubjectList } from '@/api/modules/ErrorSubjectManage'
export default {
  name: 'errorSubjectList',
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
      tableData: [],
      currentPage: 5
    }
  },
  mounted () {
    errorSubjectList()
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
.errorSubjectList {
  @include pane_boxShadow;
}
</style>
