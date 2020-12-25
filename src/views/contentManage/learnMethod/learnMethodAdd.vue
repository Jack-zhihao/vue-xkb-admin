<template>
  <div class="learnMethodAdd">
    <pane-head :title="'添加学习方法'" :borderBottom="true"></pane-head>
    <div class="pane-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="标题" prop="name" class="limit-word" style="width: 40%">
          <el-input v-model="ruleForm.name"></el-input>
          <span>0/30</span>
        </el-form-item>
        <el-form-item label="上级审核人" prop="name">
          <el-select v-model="ruleForm.name" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="推荐课程" prop="name" style="width: 100%;">
          <el-button class="selectCourse" type="default" @click="selectCourse">选择课程</el-button>
          <div class="course-row" v-if="multipleSelection.length">
            <el-image
              style="height: 90px; width: 120px"
              :src="'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'"
            >
              <div slot="placeholder" class="image-slot">加载中
                <span class="dot">...</span>
              </div>
            </el-image>
            <div>
              <p>几何解题技巧</p>
              <p>讲师 马大帅</p>
              <p>¥ 1,644.00</p>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="封面照片" prop="name" style="width: 100%;">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="[]"
            list-type="picture"
          >
            <el-button size="small" plain style="width: 120px;">
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
            </el-button>
            <div slot="tip" class="el-upload__tip">仅支持jpg/png图片,最佳尺寸为1536px*840px</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="内容" style="width: 100%;">
          <el-input type="textarea" style="border-radius: 6px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">保存</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog  :modal-append-to-body="true"
      :append-to-body="true"
      title="提示"
      :visible.sync="courseDialogVisible"
      width="60%"
      :before-close="handleClose"
      class="hideHead"
    >
      <pane-head :nav="['选择课程模块','选择课程']" class="dialog_head">
        <div slot="tool" class="tool-term">
          <i class="close iconfont iconshut_down"></i>
        </div>
      </pane-head>
      <el-row class="common-condition">
        <el-col :span="6" class="condition">
          <el-input v-model="input" placeholder="请输入课程模块标题"></el-input>
        </el-col>
        <el-col :span="6" class="condition">
          <el-select v-model="value" clearable placeholder="请选择课程分类">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="condition">
          <el-select v-model="value" clearable placeholder="请选择审核状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="condition">
          <el-select v-model="value" clearable placeholder="请选择讲师">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="condition">
          <el-select v-model="value" clearable placeholder="请选择上架状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="condition">
          <el-select v-model="value" clearable placeholder="请选择上架状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="condition">
          <el-button>搜索</el-button>
        </el-col>
      </el-row>
      <div class="table-data">
        <el-table
          :data="tableData"
          ref="multipleTable"
          stripe
          width="100%"
          @row-click="handleRowClick"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column prop="kcmcheng" label="课程名称"></el-table-column>
          <el-table-column prop="zjmcheng" label="专辑名称"></el-table-column>
          <el-table-column prop="jji" label="阶段"></el-table-column>
          <el-table-column prop="nji" label="年级"></el-table-column>
          <el-table-column prop="xke" label="学科"></el-table-column>
          <el-table-column prop="kcflei" label="课程分类"></el-table-column>
          <el-table-column prop="xsjge" align="right" label="销售价格"></el-table-column>
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
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="comfrim">确 定</el-button>
        <el-button type="info" @click="courseDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      courseDialogVisible: false,
      input: '',
      value: '',
      value1: '',
      ruleForm: {
        name: '',
        value: '选项3',
        desc: ''
      },
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
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 0, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur' }
        ],
        region: [
          { required: false, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      },
      tableData: [
        {
          kcmcheng: '任何人的错都是我的错',
          zjmcheng: '不要让自己的队友失败',
          jji: '初中',
          nji: '初一',
          xke: '数学',
          kcflei: '专题训练',
          xsjge: '6,729.24'
        },
        {
          kcmcheng: '任何人的错都是我的错2',
          zjmcheng: '不要让自己的队友失败',
          jji: '初中',
          nji: '初一',
          xke: '数学',
          kcflei: '专题训练',
          xsjge: '6,729.24'
        },
        {
          kcmcheng: '任何人的错都是我的错3',
          zjmcheng: '不要让自己的队友失败',
          jji: '初中',
          nji: '初一',
          xke: '数学',
          kcflei: '专题训练',
          xsjge: '6,729.24'
        }
      ],
      multipleSelection: [],
      currentPage: 5
    }
  },
  methods: {
    selectCourse () {
      this.courseDialogVisible = true
    },
    handleClose () {},
    comfrim () {
      this.multipleSelection = [...this.$refs.courseTable.selection]
      this.courseDialogVisible = false
    },
    handleRowClick (row) {
      this.$refs.multipleTable.toggleRowSelection(row)
    },
    handleSelectionChange (val) {
      window.console.log(val)
      this.multipleSelection = [...val]
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.learnMethodAdd {
  @include pane_boxShadow;
  /deep/.selectCourse {
    color: $mainText;
    border-color: $border-color-heavy;
    padding-left: 0.35rem;
    padding-right: 0.35rem;
    &:hover {
      background-color: #fff;
    }
    &:active {
      box-shadow: none;
      transform: scale(0.96);
    }
  }
  .common-condition {
    padding: 0;
  }
  .course-row {
    display: flex;
    justify-content: flex-start;
    border: 1px solid $border-color;
    padding: 0.16rem;
    border-radius: 6px;
    margin-top: 0.08rem;
    .el-image {
      border-radius: 6px;
      margin: 0;
    }
    > div {
      margin-left: 0.16rem;
      p {
        line-height: 1;
        font-size: $fontSize-12;
        padding-top: 0.14rem;
        &:nth-child(1) {
          font-size: $fontSize-16;
          padding: 0;
          line-height: 0.32rem;
        }
      }
    }
  }
  .table-data {
    padding-left: 0;
    padding-right: 0;
  }
  .el-dialog__footer {
    padding: 0.08rem 0.24rem 0.24rem;
  }
}
</style>
