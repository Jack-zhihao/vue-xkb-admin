<template>
  <div class="logo">
    <div class="login-form" :style="`width:${!mobile() ? '100%': '47.2%'};`">
      <div class="form">
        <h2>Hello!</h2>
        <p>欢迎使用学魁榜后台管理系统</p>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="common-form"
        >
          <el-form-item label="账号" prop="value">
            <el-input type="text" v-model="ruleForm.value" autocomplete="on"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" class="checkPass-item" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="on"></el-input>
            <a href="javascript:;">忘记密码</a>
          </el-form-item>
          <el-form-item label="验证码" prop="code" class="validate-code">
            <el-input v-model.number="ruleForm.code"></el-input>
            <span class="code-img"></span>
          </el-form-item>
          <el-form-item style="margin-top: 0.08rem">
            <el-checkbox v-model="autoLogin">自动登录</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-btn" @click="submitForm('ruleForm')">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <p>内容版权所有 北京学魁榜教育有限公司京ICP备16004738号</p>
    </div>
    <div class="login-banner" v-if="mobile()">
      <div class="banner"></div>
    </div>
  </div>
</template>
<script>
import ResizeMixin from '@/layout/mixin/ResizeHandler'
import { Login } from '@/api/modules/Login'
import { setAuthRouter, setToken } from '@/utils/auth'
export default {
  name: 'logo',
  mixins: [ResizeMixin],
  data () {
    var checkCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (String(value).length < 4) {
            callback(new Error('验证码长度位4位'))
          } else {
            callback()
          }
        }
      }, 1000)
    }

    var validateValue = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else if (String(value).length < 6) {
        callback(new Error('账号长度不能小于6位'))
      } else {
        callback()
      }
    }

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }

    return {
      mobile: () => this.$store.state.setting.isCollapse,
      autoLogin: false,
      ruleForm: {
        value: '',
        password: '',
        code: ''
      },
      rules: {
        value: [{ validator: validateValue, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        code: [{ validator: checkCode, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Login().then(res => {
            setToken('admin-token')
            setAuthRouter(res.data)
            this.initPath()
          })
        } else return false
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    initPath () {
      const { visitedViews } = this.$store.state.tagsView
      const visitedView = visitedViews.slice(-1)[0]
      if (visitedView) {
        this.$router.push(visitedView.path || '/controller')
      } else this.$router.push('/controller')
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/variables.scss";
.logo {
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  .login-form {
    width: 47.2%;
    height: 100%;
    padding-bottom: 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    .form{
      width: 3.4rem;
      margin: 0 auto;
      >h2 {
        font-size: 0.32rem;
        color: #000000;
      }
      >p {
        font-size: $fontSize-14;
        color: $mainTextGray2;
        padding-bottom: 0.24rem;
      }
    }
    .el-form-item {
      width: 100%;
      .el-form-item__label{
          font-size: $fontSize-14;
          color: $mainText;
        }
      .el-input {
        .el-input__inner {
          height: 0.4rem;
          line-height: 0.4rem;
        }
      }
      .login-btn {
        height: 0.4rem;
        line-height: 2;
        font-size: $fontSize-14;
        padding: 0 0.47rem;
      }
      &.checkPass-item {
        position: relative;
        a {
          position: absolute;
          top: -0.32rem;
          right: 0;
          font-size: $fontSize-12;
          color: $mainText;
          &:hover {
            color: $mainTextGray2;
          }
        }
      }
      .el-checkbox {
        .el-checkbox__input {
          line-height: 0;
          vertical-align: middle;
          .el-checkbox__inner {
            height: 0.14rem;
            width: 0.14rem;
            &:after {
              height: 0.06rem;
              left: 0.04rem;
            }
          }
        }
        .el-checkbox__label {
          font-size: $fontSize-12;
          vertical-align: middle;
          padding-left: 0.04rem;
        }
      }
    }
    >p {
      text-align: center;
      color: $mainTextGray;
      position: absolute;
      bottom: 0.32rem;
      width: 100%;
    }
    .validate-code {
      position: relative;
      /deep/.el-input__inner {
        padding-right: 2rem;
        box-sizing: border-box;
      }
      .code-img {
        display: inline-block;
        width: 0.7rem;
        height: 0.24rem;
        background-color: #ccc;
        position: absolute;
        right: 0.10rem;
        top: 0.08rem;
      }
    }
  }
  .login-banner {
    width: 52.8%;
    height: 100%;
    background-color: #0870fe;
    .banner {
      height: 100%;
      background-image: url("../../assets/images/login-banner.png");
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: left;
    }
  }
}
</style>
