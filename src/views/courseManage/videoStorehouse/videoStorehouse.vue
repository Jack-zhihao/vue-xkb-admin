<template>
  <div class="videoStorehouse">
    <pane-head :title="'视频库'" :borderBottom="true">
      <div slot="tool" class="tool-term">
        <el-button type="primary" @click="add">添加</el-button>
      </div>
    </pane-head>
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入视频名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择讲师">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择已被课程使用">
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
        <el-table-column prop="courseCover" align="center" label="视频封面">
          <template slot-scope="scope">
            <img :src="scope.row.courseCover" alt="视频封面" style="width: 100px; height: auto; padding: 4px 0">
          </template>
        </el-table-column>
        <el-table-column prop="videoName" label="视频名称"></el-table-column>
        <el-table-column prop="teachter" width="100" label="讲师"></el-table-column>
        <el-table-column prop="videoSize" width="100" label="视频大小"></el-table-column>
        <el-table-column prop="status" width="100" align="center" label="同步状态">
          <template slot-scope="scope">
            <span :style="`color:${statusColor[statusList[scope.row.status]]}`">{{statusList[scope.row.status]}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="isView" width="120" align="center" label="已被课程使用">
          <template slot-scope="{row}">
            <span v-text="row.isView? '是': '否'"></span>
          </template>
        </el-table-column>
        <el-table-column prop="updater" width="80" align="center" label="上传人"></el-table-column>
        <el-table-column prop="updateTime" width="160" label="上传时间"></el-table-column>
        <el-table-column align="right" width="100" label="操作">
          <template slot-scope="scope">
            <tool-btn v-if="scope.row.status === '未同步'" :btns="['修改','播放']"></tool-btn>
            <tool-btn v-else :btns="['播放']"></tool-btn>
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
import { videoStorehouse } from '@/api/modules/CourseManage'
export default {
  name: 'videoStorehouse',
  components: {
    toolBtn
  },
  data () {
    return {
      statusColor: {
        已同步: '#19CBA9',
        未同步: '#FF5555',
        同步中: '#FFAA43'
      },
      statusList: ['已同步', '未同步', '同步中'],
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
      currentPage: 5,
      tableData: []
    }
  },
  methods: {
    add () {
      this.$router.push({ name: 'videoStorehouseAdd' })
    }
  },
  mounted () {
    videoStorehouse()
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
.videoStorehouse {
  @include pane_boxShadow;
}
</style>
