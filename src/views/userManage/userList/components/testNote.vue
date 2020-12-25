<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 14:40:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\views\userManage\userList\components\testNote.vue
-->
<template>
  <div class="testNote">
    <el-row class="common-condition">
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
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="jduan" label="阶段"></el-table-column>
        <el-table-column prop="xke" label="学科"></el-table-column>
        <el-table-column prop="llyshu" align="center" label="浏览页数"></el-table-column>
        <el-table-column prop="cksjian" label="浏览时间"></el-table-column>
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
export default {
  name: 'testNote',
  data () {
    return {
      value: '',
      value1: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '黄金糕'
        },
        {
          value: '选项3',
          label: '黄金糕'
        },
        {
          value: '选项4',
          label: '黄金糕'
        },
        {
          value: '选项5',
          label: '黄金糕'
        }
      ],
      tableData: [],
      currentPage: 5
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
</style>
