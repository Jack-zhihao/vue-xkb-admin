<template>
  <div class="consultManage">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="headFunc">
      <div slot="tool" class="tool-term">
        <el-button v-if="nav[navIdx] === '我添加的'" type="primary" @click="add">添加</el-button>
      </div>
    </pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入标题"></el-input>
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
        <el-select v-model="value" clearable placeholder="请选择上架状态">
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
        <el-table-column prop="index" width="80" align="center" label="排序">
          <template slot-scope="scope">
            <span class="index">{{scope.row.index}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="cover" align="center" label="封面">
          <template slot-scope="scope">
            <img
              :src="scope.row.cover"
              style="margin: 6px 0 0; border-radius: 4px;"
            >
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="consultType" label="资讯类型"></el-table-column>
        <el-table-column prop="recom" align="center" label="是否推荐">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.recom" active-color="#0F6FFF" inactive-color="#5C668C"></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="status" align="center" label="审核状态">
          <template slot-scope="scope">
            <span :style="`color:${statusColor[scope.row.status]}`">{{scope.row.status}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="views" label="浏览次数"></el-table-column>
        <el-table-column prop="creater" label="创建人"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column label="操作" width="250" align="right">
          <template slot-scope="scope">
            <tool-btn :btns="['预览','修改','上架','详情','删除']" :Id="scope.row.index" @toolFunc="toolFunc"></tool-btn>
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
import { consultManage } from '@/api/modules/ContentManage'
export default {
  name: 'consultManage',
  components: {
    toolBtn
  },
  data () {
    return {
      nav: ['资讯列表', '我添加的', '待审核', '已审核'],
      statusColor: {
        审核中: '#FFAA43',
        已通过: '#19CBA9',
        待审核: '#FF5555'
      },
      navIdx: 0,
      input: '',
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
      value: '',
      value1: '',
      tableData: [],
      currentPage: 5
    }
  },
  methods: {
    headFunc (data) {
      this.navIdx = Number(data)
    },
    toolFunc (data) {
      if (data.btn === '预览') {
        this.dialogVisibleViews = true
      }
      if (data.btn === '详情') {
        this.$router.push({ name: 'learnMethodDetail' })
      }
    },
    add () {
      this.$router.push({ name: 'consultManageAdd' })
    }
  },
  mounted () {
    consultManage()
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
.consultManage {
  @include pane_boxShadow;
}
</style>
