<template>
  <div class="userInfo">
    <div class="pane-content">
      <div class="baseInfo">
        <div class="baseInfo--item">
          <el-image
            style="width: 75px; height: 75px; border-radius: 75px; margin-top: 0.15rem;"
            :src="cover"
            :preview-src-list="srcList"
          ></el-image>
          <div>
            <p>用户名：13143333823</p>
            <p>来源：今日头像</p>
          </div>
        </div>
        <div class="baseInfo--item">
          <p>账号：13143333823</p>
          <p>手机号：13143333823 已领取</p>
          <p>性别：男</p>
          <p>注册时间：2019-07-28</p>
        </div>
        <div class="baseInfo--item">
          <p>学校：实验中学</p>
          <p>年纪：初中三年级</p>
          <p>最后登录时间：2019-06-28 19:06:12</p>
          <p>最后登录IP：59.42.237.189</p>
        </div>
        <div class="baseInfo--item">
          <p>资讯推送：不接受推送</p>
          <p>新课程推送：接受推送</p>
          <p>经常内容推送：接受推送</p>
          <p>经常内容推送：接受推送</p>
        </div>
      </div>
    </div>
    <pane-head :title="'用户设置'" :borderBottom="true"></pane-head>
    <div class="pane-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="选择身份标签" prop="name">
          <el-select v-model="ruleForm.value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择类型标签" prop="name">
          <el-select v-model="ruleForm.value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否可查看命题猜想答案" prop="name">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否可查看学霸笔记" prop="name">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否可查看历年真题答案" prop="name">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
         <el-form-item label="有效状态" prop="name">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" style="width: 100%;">
          <text-area></text-area>
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
import textArea from '@/components/common/textArea'
import cover from '@/assets/images/defaultCover.png'
export default {
  name: 'userInfo',
  components: {
    textArea
  },
  data () {
    return {
      cover,
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      ruleForm: {
        name: '',
        value: '选项3',
        desc: '',
        resource: '是'
      },
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
.userInfo {
  .baseInfo {
    display: flex;
    justify-content: space-evenly;
    .baseInfo--item {
      border-right: 1px solid $border-color;
      margin: 0.2rem 0;
      width: 25%;
      box-sizing: border-box;
      padding: 0 0.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      > p {
        padding: 0.08rem 0;
        line-height: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &:last-child {
        border: none;
      }
      &:first-child {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        > div {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          width: calc(100% - 75px);
          text-align: center;
          > p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
