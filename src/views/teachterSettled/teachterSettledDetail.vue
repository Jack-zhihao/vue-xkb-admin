<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 14:30:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\views\teachterSettled\teachterSettledDetail.vue
-->
<template>
  <div class="teachterSettledDetail">
    <pane-head :title="'教师入驻-详情'" :borderBottom="true"></pane-head>
    <div class="pane-content">
      <el-row class="info-row">
          <el-col :span="5">
            <p>讲师名称</p>
            <p>周黑鸭</p>
          </el-col>
          <el-col :span="5">
            <p>手机号码</p>
            <p>18632147596</p>
          </el-col>
          <el-col :span="5">
            <p>身份证号码</p>
            <p>445321199402362147</p>
          </el-col>
          <el-col :span="5">
            <p>状态</p>
            <p>已处理</p>
          </el-col>
          <el-col :span="4">
            <p>简历附件</p>
            <p>
              <el-button style="font-size: 0.14rem" type="text">这是一个课件.pdf</el-button>
            </p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>讲师资格证</p>
            <p>周黑鸭</p>
          </el-col>
          <el-col :span="5">
            <p>备注</p>
            <p>
            <el-image
            style="height: 100px"
            :src="url"
            fit="fill"></el-image>
            </p>
          </el-col>
        </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'teachterSettledDetail',
  data () {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.teachterSettledDetail {
  @include pane_boxShadow;
}
</style>
