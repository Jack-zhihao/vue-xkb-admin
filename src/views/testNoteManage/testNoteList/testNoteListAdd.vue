<template>
  <div class="testNoteListAdd">
    <pane-head :title="'基础信息'" :borderBottom="true"></pane-head>
    <div class="pane-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="分类" prop="name">
         <el-input disabled v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="序号" prop="name">
         <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学霸笔记附件" prop="name" style="width: 100%;">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="[]"
            list-type="picture"
          >
            <el-button size="small" plain style="width: 120px;">
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传PDF
            </el-button>
            <div slot="tip" class="el-upload__tip">只能上传PDF格式，PDF每页尺寸建议为750px*1334px</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="学科图片" prop="name" style="width: 100%;">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="[]"
            list-type="picture"
          >
            <el-button size="small" plain style="width: 120px;">
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
            </el-button>
            <div slot="tip" class="el-upload__tip">仅支持jpg/png图片,最佳尺寸为1280px*1600px</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="背景图片" prop="name" style="width: 100%;">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="[]"
            list-type="picture"
          >
            <el-button size="small" plain style="width: 120px;">
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
            </el-button>
            <div slot="tip" class="el-upload__tip">仅支持jpg/png图片,最佳尺寸为1536px*1824px</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">保存</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'testNoteListAdd',
  data () {
    return {
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
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.testNoteListAdd {
  @include pane_boxShadow;
}
</style>
