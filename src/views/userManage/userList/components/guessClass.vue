<template>
  <div class="guessClass">
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入试卷名称"></el-input>
      </el-col>
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
        <el-table-column prop="sjmcheng" label="试卷名称"></el-table-column>
        <el-table-column prop="jduan" label="阶段"></el-table-column>
        <el-table-column prop="xke" label="学科"></el-table-column>
        <el-table-column prop="xlei" label="类型"></el-table-column>
        <el-table-column prop="llyshu" label="浏览页数"></el-table-column>
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
  name: 'guessClass',
  data () {
    return {
      input: '',
      tableData: [
        {
          sjmcheng: '四十天冲刺押题卷',
          jduan: '高中',
          xke: '数学',
          xlei: '答案',
          llyshu: '2',
          cksjian: '2019-04-28 13:09'
        },
        {
          sjmcheng: '四十天冲刺押题卷',
          jduan: '高中',
          xke: '数学',
          xlei: '答案',
          llyshu: '2',
          cksjian: '2019-04-28 13:09'
        },
        {
          sjmcheng: '四十天冲刺押题卷',
          jduan: '高中',
          xke: '数学',
          xlei: '答案',
          llyshu: '2',
          cksjian: '2019-04-28 13:09'
        },
        {
          sjmcheng: '四十天冲刺押题卷',
          jduan: '高中',
          xke: '数学',
          xlei: '答案',
          llyshu: '2',
          cksjian: '2019-04-28 13:09'
        }
      ],
      currentPage: 5,
      value: '',
      value1: '',
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
      ]
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.guessClass {
}
</style>
