<!--
 * @Author: zhihao
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-07-13 16:16:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\views\contentManage\learnMethod\learnMethodDetail.vue
-->
<template>
  <div class="learnMethodDetail">
    <div class="pane">
      <pane-head :title="'基础信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>标题</p>
            <p>几何解题技巧</p>
          </el-col>
          <el-col :span="5">
            <p>推荐课程</p>
            <p>几何解题技巧</p>
          </el-col>
          <el-col :span="5">
            <p>课程类型</p>
            <p>课程模块</p>
          </el-col>
          <el-col :span="5">
            <p>创建人</p>
            <p>杨大力</p>
          </el-col>
          <el-col :span="4">
            <p>创建时间</p>
            <p>2019-11-02 09:32:23</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>封面照片</p>
            <p>
              <img style="width: 150px; height: 112px;" src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" alt="封面">
            </p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pane" style="margin-top: 0.24rem;">
      <pane-head :title="'审核信息'" :borderBottom="true"></pane-head>
      <div class="pane-content" style="padding-bottom: 0;">
        <examine-step></examine-step>
      </div>
    </div>
  </div>
</template>
<script>
import examineStep from '@/components/common/examineStep'
export default {
  name: 'learnMethodDetail',
  components: {
    examineStep
  }
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.learnMethodDetail {
  .pane {
    @include pane_boxShadow;
  }
}
</style>
