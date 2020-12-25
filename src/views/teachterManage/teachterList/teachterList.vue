<template>
  <div class="teachterList">
    <pane-head :title="'讲师列表'" :borderBottom="true">
      <div slot="tool" class="tool-term">
        <el-button type="primary" @click="add">添加</el-button>
      </div>
    </pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入用户名"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="cover" width="100" label="讲师照片">
          <template slot-scope="scope">
            <el-image
              style="margin-top: 4px;border-radius: 1rem;"
              :src="scope.row.cover"
              scroll-container
              :preview-src-list="[scope.row.cover]"
            @click="previewCover(scope.row.cover)"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="teachterName" label="讲师名称"></el-table-column>
        <el-table-column prop="teachAge" label="教龄"></el-table-column>
        <el-table-column prop="teachType" label="授课方式"></el-table-column>
        <el-table-column prop="courseNumber" label="课程总数"></el-table-column>
        <el-table-column prop="flowNumber" label="流量数量"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="creater" label="创建人"></el-table-column>
        <el-table-column prop="createTime" width="160" label="创建时间"></el-table-column>
        <el-table-column align="right" width="160" label="操作">
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
import { teachterList } from '@/api/modules/TeachterManage'
import Mixins from '@/utils/mixins'
export default {
  name: 'teachterList',
  data () {
    return {
      input: '',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      tableData: [],
      currentPage: 5
    }
  },
  mixins: [Mixins],
  methods: {
    edit () {
      this.$router.push({
        name: 'teachterListEdit',
        query: {
          edit: true
        }
      })
    },
    del () {},
    add () {
      this.$router.push({
        name: 'teachterListEdit',
        query: {
          add: true
        }
      })
    }
  },
  mounted () {
    teachterList()
      .then(res => {
        const { data } = res
        this.tableData = data
      })
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.teachterList {
  @include pane_boxShadow;
}
</style>
