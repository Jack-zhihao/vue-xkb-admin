<template>
  <div class="changeCourseEdit">
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
            style="width: 100%;"
          >
            <el-button size="small" plain>
              <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
            </el-button>
            <div slot="tip" class="el-upload__tip">仅支持jpg/png图片，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="备注" style="width: 100%; padding: 0;">
          <text-area class="el-from-item-textArea"></text-area>
        </el-form-item>
      </el-form>
      <pane-head :title="'需要更换的已购课程'" class="pane_head_info">
        <div slot="tool" class="tool-term">
          <el-button @click="dialogVisible = true">选择需要更换的已购课程</el-button>
        </div>
      </pane-head>
      <el-table :data="tableData" stripe width="100%" class="elTable1">
        <el-table-column prop="kcmcheng" fixed label="课程名称"></el-table-column>
        <el-table-column prop="zjmcheng" label="专辑名称"></el-table-column>
        <el-table-column prop="jduan" label="阶段"></el-table-column>
        <el-table-column prop="nji" label="年级"></el-table-column>
        <el-table-column prop="xke" label="学科"></el-table-column>
        <el-table-column prop="xcflei" label="课程分类"></el-table-column>
        <el-table-column prop="xsjge" label="销售价格"></el-table-column>
        <el-table-column align="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" :id="scope.row.xsjge">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pane-head :title="'需要更换的课程'" class="pane_head_info">
        <div slot="tool" class="tool-term">
          <el-button @click="dialogVisible = true">选择需要更换的已购课程</el-button>
        </div>
      </pane-head>
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="kcmcheng" fixed label="课程名称"></el-table-column>
        <el-table-column prop="zjmcheng" label="专辑名称"></el-table-column>
        <el-table-column prop="jduan" label="阶段"></el-table-column>
        <el-table-column prop="nji" label="年级"></el-table-column>
        <el-table-column prop="xke" label="学科"></el-table-column>
        <el-table-column prop="xcflei" label="课程分类"></el-table-column>
        <el-table-column prop="xsjge" label="销售价格"></el-table-column>
        <el-table-column align="right" width="120" label="操作">
          <template slot-scope="scope">
            <el-button type="text" :id="scope.row.xsjge">查看片段</el-button>
            <el-button type="text" :id="scope.row.xsjge">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 0.32rem;">
        <el-button type="primary">保存</el-button>
        <el-button type="info">取消</el-button>
      </div>
    </div>
    <el-dialog  :modal-append-to-body="true" :append-to-body="true" title="提示" :visible.sync="dialogVisible" width="60%" class="hideHead">
      <pane-head :title="'已购课程'" class="dialog_head">
        <div slot="tool" class="tool-term">
          <i class="close iconfont iconshut_down" @click="dialogVisible= false"></i>
        </div>
      </pane-head>
      <el-table :data="tableData" stripe width="100%" height="300px">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="kcmcheng" fixed label="课程名称"></el-table-column>
        <el-table-column prop="zjmcheng" label="专辑名称"></el-table-column>
        <el-table-column prop="jduan" label="阶段"></el-table-column>
        <el-table-column prop="nji" label="年级"></el-table-column>
        <el-table-column prop="xke" label="学科"></el-table-column>
        <el-table-column prop="xcflei" label="课程分类"></el-table-column>
        <el-table-column prop="xsjge" label="销售价格"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        <el-button type="info" @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import textArea from '@/components/common/textArea'
export default {
  name: 'changeCourseEdit',
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
      },
      tableData: [
        {
          kcmcheng: '没有坑，就先让自己成为萝卜',
          zjmcheng: '今日因，明日果',
          jduan: '初中',
          nji: '初一',
          xke: '生物',
          xcflei: '专题训练',
          xsjge: '4,166.15'
        }
      ],
      dialogVisible: false
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.changeCourseEdit {
  @include pane_boxShadow;
  .common-form {
    padding-bottom: 0.32rem;
    border-bottom: 1px solid $border-color;
  }
  .upload-demo {
    .el-upload-list {
      display: flex;
      .el-upload-list__item {
        width: 30%;
        margin-right: 0.16rem;
      }
    }
  }
  .elTable1 {
    padding-bottom: 0.24rem;
    border-bottom: 1px solid $border-color;
  }
}
</style>
