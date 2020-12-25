<template>
  <div class="errorClass">
    <el-row class="common-condition">
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
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
     <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="cttpian" label="错题图片">
          <template slot-scope="scope">
            <el-image
              style="width: 100px; margin: 0.04rem 0 0;"
              :src="scope.row.cttpian"
              :preview-src-list="srcList">
            </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="ctyyin" label="错题原因"></el-table-column>
        <el-table-column prop="jduan" label="阶段"></el-table-column>
        <el-table-column prop="xke" label="学科"></el-table-column>
        <el-table-column prop="ctflei" label="错题分类"></el-table-column>
        <el-table-column prop="ctzflei" label="错题子分类"></el-table-column>
        <el-table-column prop="sfbji" align="center" label="是否标记"></el-table-column>
        <el-table-column prop="cjsjian" label="创建时间"></el-table-column>
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
  name: 'errorClass',
  data () {
    return {
      input: '',
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
      ],
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      tableData: [
        {
          cttpian: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          ctyyin: '看错条件,概念不清,没看懂题',
          jduan: '初中',
          xke: '语文',
          ctflei: '语言文字运用',
          ctzflei: '字音',
          sfbji: '是',
          cjsjian: '2019-06-28 19:06:12'
        },
        {
          cttpian: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          ctyyin: '看错条件,概念不清,没看懂题',
          jduan: '初中',
          xke: '语文',
          ctflei: '语言文字运用',
          ctzflei: '字音',
          sfbji: '是',
          cjsjian: '2019-06-28 19:06:12'
        },
        {
          cttpian: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          ctyyin: '看错条件,概念不清,没看懂题',
          jduan: '初中',
          xke: '语文',
          ctflei: '语言文字运用',
          ctzflei: '字音',
          sfbji: '是',
          cjsjian: '2019-06-28 19:06:12'
        }
      ],
      currentPage: 5
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.errorClass {}
</style>
