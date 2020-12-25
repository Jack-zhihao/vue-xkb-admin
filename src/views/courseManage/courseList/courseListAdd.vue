<template>
  <div class="courseListAdd">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="paneHeadFunc">
      <div class="tool-term" slot="tool" v-show="nav[navIdx] === '添加课程'">
        <el-button type="primary">添加课程</el-button>
      </div>
    </pane-head>
    <div class="pane-content" v-show="nav[navIdx] === '基础信息'">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="活动名称" prop="name" class="limit-word">
          <el-input v-model="ruleForm.name" maxlength="50"></el-input>
          <span>0/50</span>
        </el-form-item>
        <el-form-item label="课程分类" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="课程模块编码" prop="name">
          <cell-input></cell-input>
        </el-form-item>
        <el-form-item label="序号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="讲师" prop="name">
          <el-select v-model="ruleForm.value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="价格" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="上级核审人" prop="name">
          <el-select v-model="ruleForm.value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="简介" prop="name" style="width: 100%" class="clearPadding">
          <el-input type="textarea" v-model="ruleForm.desc" maxlength="200"></el-input>
        </el-form-item>
        <el-form-item label="课程模块封面图APP&官网" prop="name" style="width: 100%">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="[]"
            list-type="picture"
          >
            <el-button size="small" plain>
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
            </el-button>
            <div slot="tip" class="el-upload__tip">仅支持jpg/png图片,最佳尺寸为646px*360px</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="课程模块封面图APP&官网" prop="name" style="width: 100%">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="[]"
            list-type="picture"
          >
            <el-button size="small" plain>
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
            </el-button>
            <div slot="tip" class="el-upload__tip">仅支持jpg/png图片,最佳尺寸为646px*360px</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')" type="info">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="pane-content" v-show="nav[navIdx] === '添加课程'">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template slot="title">
            <span>勾股定理 使用公式</span>
            <div class="">
              <el-button type="text" @click="delPane">
                <i class="iconfont iconremove"></i>
              </el-button>
            </div>
          </template>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="auto"
            class="common-form"
          >
            <el-form-item label="课程标题" prop="name" class="limit-word">
              <el-input v-model="ruleForm.name" maxlength="50"></el-input>
              <span>0/50</span>
            </el-form-item>
            <el-form-item label="课程编码" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="课程排序" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="销售价格" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="课程资料" prop="name" style="width: 100%;">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :file-list="[]"
              >
                <el-button size="small" plain>
                  <i class="iconfont iconupload" style="margin-right: 6px"></i>上传课件
                </el-button>
                <div slot="tip" class="el-upload__tip">上传的课件必须为PDF格式，大小不超过2G</div>
              </el-upload>
            </el-form-item>
            <div class="content" style="width:100%;">
              <p>配套习题
                <el-button type="text" @click="addVideosDialog = !addVideosDialog">添加习题</el-button>
              </p>
              <div class="table-mock">
                <el-row>
                  <el-col :span="12">习题</el-col>
                  <el-col :span="12">答案</el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-button type="text">三角函数习题全.pdf</el-button>
                  </el-col>
                  <el-col :span="12">
                    <el-button type="text">三角函数习题答案全.pdf</el-button>
                  </el-col>
                </el-row>
              </div>
            </div>
            <el-form-item label="简介" prop="name" style="width: 100%" class="clearPadding">
              <el-input type="textarea" v-model="ruleForm.desc" maxlength="200"></el-input>
            </el-form-item>
            <el-form-item label="课程模块封面图APP&官网" prop="name" style="width: 100%">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="[]"
                list-type="picture"
              >
                <el-button size="small" plain>
                  <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
                </el-button>
                <div slot="tip" class="el-upload__tip">仅支持jpg/png图片,最佳尺寸为1536px*860px</div>
              </el-upload>
            </el-form-item>
            <div class="content" style="width:100%;">
              <p>选择视频
                <el-button type="text">添加视频</el-button>
              </p>
              <el-table class="timeline clearPadding" :data="activities" width="100%">
                <el-table-column prop="detail" label="视频标题"></el-table-column>
                <el-table-column prop="opareUser" label="视频类型"></el-table-column>
                <el-table-column prop="timestamp" label="讲师名称"></el-table-column>
                <el-table-column prop="detail" label="视频大小"></el-table-column>
                <el-table-column prop="index" align="center" label="视频编码">
                  <template slot-scope="scope">
                    <span class="index">{{scope.row.index}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="index" align="center" label="视频排序">
                  <template slot-scope="scope">
                    <span class="index">{{scope.row.index}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="right" label="操作">
                  <template slot-scope="scope">
                    <tool-btn :btns="['播放', '删除']" :id="scope.row.detail"></tool-btn>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <el-form-item style="padding-bottom: 0.24rem">
              <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
              <el-button @click="resetForm('ruleForm')" type="info">取消</el-button>
            </el-form-item>
          </el-form>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <span>勾股定理 使用公式2</span>
            <div>
              <el-button type="text" @click="delPane">
                <i class="iconfont iconremove"></i>
              </el-button>
            </div>
          </template>
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <el-dialog  :modal-append-to-body="true" :append-to-body="true" title="添加视频" :visible.sync="addVideosDialog" width="60%">
      <el-input v-model="videoName" style="width: 2.06rem" placeholder="请输入视频名称"></el-input>
      <div class="table-data" style="padding: .16rem 0rem .24rem">
        <el-table :data="activities" stripe>
          <el-table-column property="detail" label="视频标题"></el-table-column>
          <el-table-column property="opareUser" label="讲师名称"></el-table-column>
          <el-table-column property="timestamp" label="视频时长(单位:s)"></el-table-column>
          <el-table-column align="right" label="操作">
            <template slot-scope="scope">
              <tool-btn :btns="['添加', '播放']" :id="scope.row.detail"></tool-btn>
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
      <p class="title">已添加的视频 </p>
      <div class="table-data" style="padding: .16rem 0 0">
        <el-table :data="activities" stripe>
          <el-table-column property="detail" label="视频标题"></el-table-column>
          <el-table-column property="opareUser" label="讲师名称"></el-table-column>
          <el-table-column property="timestamp" label="视频时长(单位:s)"></el-table-column>
          <el-table-column align="right" label="操作">
            <template slot-scope="scope">
              <tool-btn :btns="['添加', '播放']" :id="scope.row.detail"></tool-btn>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <pane-head>
        <div slot="tool" class="tool-term">
          <el-button type="primary">保存</el-button>
          <el-button type="info">取消</el-button>
        </div>
      </pane-head>
    </el-dialog>
  </div>
</template>
<script>
import cellInput from '@/components/common/cellInput'
import toolBtn from '@/components/common/toolBtn'
export default {
  name: 'courseListAdd',
  components: {
    cellInput,
    toolBtn
  },
  data () {
    return {
      activeName: '1',
      nav: ['基础信息', '添加课程'],
      navIdx: '0',
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
          { required: true, message: '请选择活动区域', trigger: 'change' }
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
      activities: [
        {
          index: 1,
          detail: '提交申请',
          opareUser: '教研员 马爽',
          timestamp: '2019-11-07 21:02:35',
          remarks: ''
        },
        {
          index: 2,
          detail: '审核不通过',
          opareUser: '教研主管 赖婷婷',
          timestamp: '2019-11-08 09:24:56',
          remarks: '有功无过是短暂的，无功有过是行不通的，有功有过是最好的'
        },
        {
          index: 3,
          detail: '重新提交申请',
          opareUser: '教研员 马爽',
          timestamp: '2019-11-08 09:28:14',
          remarks: ''
        }
      ],
      addVideosDialog: false,
      videoName: '',
      currentPage: 5
    }
  },
  methods: {
    paneHeadFunc (index) {
      this.navIdx = index
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          window.console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleRemove (file, fileList) {
      window.console.log(file, fileList)
    },
    handlePreview (file) {
      window.console.log(file)
    },
    delPane (e) {
      const className = e.target.className.split(' ')
      if (className.includes('iconfont')) {
        window.console.log(e.target.className)
        e.stopPropagation()
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.courseListAdd {
  @include pane_boxShadow;
  .pane-content {
    .title {
      color: $mainText;
      font-size: $fontSize-14;
    }
    .content {
      margin-top: 0.24rem;
      > p {
        color: $mainTextGray2;
        margin-bottom: 6px;
        display: flex;
        justify-content: space-between;
      }
      .table-mock {
        text-align: center;
        border: 1px solid $border-color;
        border-radius: 6px;
        .el-row {
          .el-col {
            height: 0.4rem;
            line-height: 3.4;
            border: 1px solid $border-color;
            &:first-child {
              border-right: none;
              border-left: none;
            }
            &:last-child {
              border-right: none;
            }
          }
          &:nth-child(n + 1) .el-col {
            border-top: none;
          }
          &:last-child .el-col {
            border-bottom: none;
          }
        }
      }
      .text {
        font-size: $fontSize-14;
        color: $mainText;
      }
      .el-table {
        padding: 0.24rem 0;
      }
    }
  }
}
</style>
