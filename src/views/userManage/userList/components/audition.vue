<template>
  <div class="audition">
    <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入课程模块名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入课程名称"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
    <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="sfhswzping" label="课程模块名称"></el-table-column>
        <el-table-column prop="sfzskcheng" label="课程名称"></el-table-column>
        <el-table-column prop="ddze" label="阶段"></el-table-column>
        <el-table-column prop="xgje" label="学科"></el-table-column>
        <el-table-column prop="sjsfu" label="课程分类"></el-table-column>
        <el-table-column prop="ddlyuan" label="价格"></el-table-column>
        <el-table-column prop="ddztai" label="学习状态"></el-table-column>
        <el-table-column prop="zffshi" label="赠送时间"></el-table-column>
        <el-table-column label="操作" align="right">
          <template slot-scope="scope">
            <el-button type="text" @click="view(scope)">查看视频</el-button>
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
    <el-dialog  :modal-append-to-body="true" :append-to-body="true" class="hideHead" title="提示" :visible.sync="dialogVisible" width="50%">
      <pane-head :title="'查看视频'" class="dialog_head">
         <div slot="tool" class="tool-term">
            <i class="close iconfont iconshut_down" @click="dialogVisible= false"></i>
          </div>
      </pane-head>
      <el-table :data="tableData_dialog" key="tableData_dialog" stripe width="100%">
        <el-table-column prop="spmcheng" label="视频名称"></el-table-column>
        <el-table-column prop="gkjdu" align="center" label="观看进度"></el-table-column>
        <el-table-column prop="gkcshu" align="center" label="观看次数"></el-table-column>
        <el-table-column prop="sfgqi" align="center" label="是否过期"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        <el-button type="info" @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'audition',
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
      dialogVisible: false,
      tableData: [
        {
          ddhao: '569849532158941',
          sfhswzping: '代数专章试听课',
          sfzskcheng: '代数专章试听课',
          ddze: '高中',
          xgje: '数学',
          sjsfu: '专题训练',
          ddlyuan: '190.00',
          ddztai: '学习中',
          zffshi: '微信支付',
          xdsjian: '2019-06-22 18:53:27',
          zfsjian: '2019-06-22 18:53:27'
        },
        {
          ddhao: '569849532158941',
          sfhswzping: '代数专章试听课',
          sfzskcheng: '代数专章试听课',
          ddze: '高中',
          xgje: '数学',
          sjsfu: '专题训练',
          ddlyuan: '190.00',
          ddztai: '学习中',
          zffshi: '微信支付',
          xdsjian: '2019-06-22 18:53:27',
          zfsjian: '2019-06-22 18:53:27'
        },
        {
          ddhao: '569849532158941',
          sfhswzping: '代数专章试听课',
          sfzskcheng: '代数专章试听课',
          ddze: '高中',
          xgje: '数学',
          sjsfu: '专题训练',
          ddlyuan: '190.00',
          ddztai: '学习中',
          zffshi: '微信支付',
          xdsjian: '2019-06-22 18:53:27',
          zfsjian: '2019-06-22 18:53:27'
        }
      ],
      tableData_dialog: [
        {
          spmcheng: '代数专章试听课-第一节',
          gkjdu: '15%',
          gkcshu: '1',
          sfgqi: '否'
        },
        {
          spmcheng: '代数专章试听课-第一节',
          gkjdu: '15%',
          gkcshu: '1',
          sfgqi: '否'
        },
        {
          spmcheng: '代数专章试听课-第一节',
          gkjdu: '15%',
          gkcshu: '1',
          sfgqi: '否'
        }
      ],
      currentPage: 5
    }
  },
  methods: {
    view (scope) {
      window.console.log(scope)
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.audition {
}
</style>
