<template>
  <div class="changeCourseAdd">
    <pane-head :title="'申请换课'" :borderBottom="true"></pane-head>
    <div class="pane-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="订单号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="申请用户" prop="name">
          <el-input disabled v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="是否赠送课程" prop="name">
          <el-select v-model="ruleForm.name" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否赠送实物商品 " prop="name">
          <el-select v-model="ruleForm.name" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单金额" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="实际支付" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="申请差价" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="差价类型" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="换课类型 " prop="name">
          <el-select v-model="ruleForm.name" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
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
        <el-form-item label="课程模块详情图APP" prop="name" style="width: 100%">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="[]"
            list-type="picture"
          >
            <el-button size="small" plain>
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
            </el-button>
            <div slot="tip" class="el-upload__tip">仅支持jpg/png图片，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="备注" style="width: 100%">
          <text-area class='el-from-item-textArea'></text-area>
        </el-form-item>
      </el-form>
      <div style="margin-top: 0.32rem;">
        <el-button type="primary">保存</el-button>
        <el-button type="info">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import textArea from '@/components/common/textArea'
export default {
  name: 'changeCourseAdd',
  components: {
    textArea
  },
  data () {
    return {
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
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.changeCourseAdd {
  @include pane_boxShadow;
}
</style>
