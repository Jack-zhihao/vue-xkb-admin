<template>
  <div class="teachterListEdit">
    <pane-head :title="pane_title"></pane-head>
    <div class="pane-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="讲师名称" prop="name" class="limit-word">
          <el-input v-model="ruleForm.name"></el-input>
          <span>0/8</span>
        </el-form-item>
        <el-form-item label="教龄" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="最高学历" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="毕业院校" prop="area">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="教师资格证信息" prop="area">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="name">
          <el-radio v-model="ruleForm.radio" label="1">男</el-radio>&nbsp;&nbsp;
          <el-radio v-model="ruleForm.radio" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="授课特点" prop="area">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="授课方式" prop="area" style="width: 100%">
          <el-radio v-model="ruleForm.radio" label="1">网上视频授课</el-radio>&nbsp;&nbsp;
          <el-radio v-model="ruleForm.radio" label="2">线下授课</el-radio>
        </el-form-item>
        <el-form-item label="阶段" prop="area" style="width: 100%">
           <el-cascader
            :options="jduan_options"
            :props="{ checkStrictly: false   }"
            clearable></el-cascader>
        </el-form-item>
        <el-form-item label="讲师简介" prop="area" style="width: 100%">
          <text-area></text-area>
        </el-form-item>
        <el-form-item label="讲师照片" prop="area" style="width: 100%">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="[]"
            list-type="picture">
            <el-button size="small" plain>
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
            </el-button>
            <div slot="tip" class="el-upload__tip">仅支持jpg/png图片,最佳尺寸为360px*260px</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="讲师小图片(app)" prop="area" style="width: 100%">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="[]"
            list-type="picture">
            <el-button size="small" plain>
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
            </el-button>
            <div slot="tip" class="el-upload__tip">仅支持jpg/png图片,最佳尺寸为230px*230px</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="学校照片" prop="area" style="width: 100%">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="[]"
            list-type="picture">
            <el-button size="small" plain>
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
            </el-button>
            <div slot="tip" class="el-upload__tip">仅支持jpg/png图片,最佳尺寸为1530px*490px</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="教师资格证" prop="area" style="width: 100%">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="[]"
            list-type="picture">
            <el-button size="small" plain>
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
            </el-button>
            <div slot="tip" class="el-upload__tip">仅支持jpg/png图片,最佳尺寸为440px*310px</div>
          </el-upload>
        </el-form-item>
        <el-form-item style="width: 100%;margin-top: 0.32rem">
          <el-button type="primary">保存</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import textArea from '@/components/common/textArea'
export default {
  name: 'teachterListEdit',
  components: {
    textArea
  },
  data () {
    return {
      pane_title: '讲师列表-修改',
      ruleForm: {
        name: '',
        value: '选项3',
        desc: '',
        radio: '1',
        area: {
          province: {
            code: '150000',
            value: '内蒙古自治区'
          },
          city: {
            code: '150500',
            value: '通辽市'
          },
          area: {
            code: '150526',
            value: '扎鲁特旗'
          }
        }
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
      jduan_options: [
        {
          label: '初中阶段',
          value: '初中阶段',
          children: [
            {
              label: '初一',
              value: '初一',
              children: [
                {
                  label: '语文',
                  value: '语文'
                },
                {
                  label: '数学',
                  value: '数学'
                },
                {
                  label: '英语',
                  value: '英语'
                }
              ]
            },
            {
              label: '初二',
              value: '初二',
              children: [
                {
                  label: '语文',
                  value: '语文'
                },
                {
                  label: '数学',
                  value: '数学'
                },
                {
                  label: '英语',
                  value: '英语'
                }
              ]
            },
            {
              label: '初三',
              value: '初三',
              children: [
                {
                  label: '语文',
                  value: '语文'
                },
                {
                  label: '数学',
                  value: '数学'
                },
                {
                  label: '英语',
                  value: '英语'
                }
              ]
            }
          ]
        },
        {
          label: '高中阶段',
          value: '高中阶段',
          children: [
            {
              label: '高一',
              value: '高一',
              children: [
                {
                  label: '语文',
                  value: '语文'
                },
                {
                  label: '数学',
                  value: '数学'
                },
                {
                  label: '英语',
                  value: '英语'
                }
              ]
            },
            {
              label: '高二',
              value: '高二',
              children: [
                {
                  label: '语文',
                  value: '语文'
                },
                {
                  label: '数学',
                  value: '数学'
                },
                {
                  label: '英语',
                  value: '英语'
                }
              ]
            },
            {
              label: '高三',
              value: '高三',
              children: [
                {
                  label: '语文',
                  value: '语文'
                },
                {
                  label: '数学',
                  value: '数学'
                },
                {
                  label: '英语',
                  value: '英语'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.pane_title = `讲师列表-${this.$route.query.add ? '添加' : '修改'}`
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.teachterListEdit {
  @include pane_boxShadow;
}
</style>
