<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 14:17:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\views\overyearsSubjectManage\overyearSubjectList\overyearSubjectListDetail.vue
-->
<template>
  <div class="overyearSubjectListAdd">
    <div class="pane">
      <pane-head :title="'基础信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>分类</p>
            <p>高中阶段 / 生物 / 30天冲刺卷</p>
          </el-col>
          <el-col :span="5">
            <p>创建人</p>
            <p>果冻</p>
          </el-col>
          <el-col :span="5">
            <p>创建时间</p>
            <p>2019-10-12 12:23:44</p>
          </el-col>
          <el-col :span="5">
            <p>命题猜想试题</p>
            <p>
              <el-button style="font-size: 0.14rem" type="text">这是一个课件.pdf</el-button>
            </p>
          </el-col>
          <el-col :span="4">
            <p>命题猜想答案</p>
            <p>
              <el-button style="font-size: 0.14rem" type="text">这是一个课件.pdf</el-button>
            </p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pane">
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
  name: 'overyearSubjectListAdd',
  components: {
    examineStep
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.overyearSubjectListAdd {
  .pane {
    @include pane_boxShadow;
    &:first-child {
      margin-bottom: 0.24rem;
    }
  }
}
</style>
