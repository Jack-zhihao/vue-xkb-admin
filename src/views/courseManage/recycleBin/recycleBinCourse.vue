<template>
  <div class="recycleBinCourse">
    <pane-head :title="'课程回收详情'" :borderBottom="true"></pane-head>
    <div class="pane-content">
      <el-row class="info-row">
        <el-col :span="5">
          <p>课程标题</p>
          <p>勾股定理 使用公式</p>
        </el-col>
        <el-col :span="5">
          <p>课程模块标题</p>
          <p>勾股定理 使用公式</p>
        </el-col>
        <el-col :span="5">
          <p>课程分类</p>
          <p>高中 > 高一 > 数学 > 模拟训练</p>
        </el-col>
        <el-col :span="5">
          <p>课程编码</p>
          <p>57-88-29-2642</p>
        </el-col>
        <el-col :span="4">
          <p>课程排序</p>
          <p>01</p>
        </el-col>
      </el-row>
      <el-row class="info-row">
        <el-col :span="5">
          <p>销售价格</p>
          <p>300.00</p>
        </el-col>
        <el-col :span="5">
          <p>讲师</p>
          <p>马大帅</p>
        </el-col>
        <el-col :span="5">
          <p>课程简介</p>
          <p>这是课程简介内容</p>
        </el-col>
        <el-col :span="5">
          <p>课程封面图(app&官网)</p>
          <p>
            <img style="height: 75px;" :src="cover" alt="课程封面">
          </p>
        </el-col>
      </el-row>
      <el-table :data="tableData" stripe width="100%" style="margin-top: 0.24rem;">
        <el-table-column prop="videoTitle" label="视频标题"></el-table-column>
        <el-table-column prop="videoType" label="视频类型"></el-table-column>
        <el-table-column prop="teachter" label="讲师名称"></el-table-column>
        <el-table-column prop="videoSize" label="视频大小"></el-table-column>
        <el-table-column prop="videoCode" label="视频编码"></el-table-column>
        <el-table-column prop="videoSort" label="视频排序"></el-table-column>
        <el-table-column label="操作" align="right">
          <template slot-scope="scope">
            <el-button type="text" @click="paly(scope.row)">播放</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import cover from '@/assets/images/defaultCover.png'
export default {
  name: 'recycleBinCourse',
  data () {
    return {
      cover,
      tableData: [
        {
          videoTitle: '勾股定理-第一节',
          videoType: '视频',
          teachter: '马大帅',
          videoSize: '6.3MB',
          videoCode: '01',
          videoSort: '1'
        },
        {
          videoTitle: '勾股定理-第一节',
          videoType: '视频',
          teachter: '马大帅',
          videoSize: '6.3MB',
          videoCode: '01',
          videoSort: '1'
        },
        {
          videoTitle: '勾股定理-第一节',
          videoType: '视频',
          teachter: '马大帅',
          videoSize: '6.3MB',
          videoCode: '01',
          videoSort: '1'
        }
      ]
    }
  },
  methods: {
    paly (row) {
      window.console.log(row)
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.recycleBinCourse {
  @include pane_boxShadow;
}
</style>
