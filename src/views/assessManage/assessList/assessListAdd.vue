<template>
  <div class="assessListAdd">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="toolFunc">
      <div slot="tool" class="tool-term">
        <el-button type="primary" v-if="nav[navIdx] === '练习题'">添加模块</el-button>
      </div>
    </pane-head>
    <div class="pane" v-if="nav[navIdx] === '基础信息'">
      <div class="pane-content">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="auto"
          class="common-form">
          <el-form-item label="练习卷标题" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="讲解老师" prop="name">
            <el-select v-model="ruleForm.name" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="课程阶段" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="学科" prop="name">
            <el-select v-model="ruleForm.name" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分类" prop="name">
            <el-select v-model="ruleForm.name" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="练习卷标题" style="width: 100%;">
            <div class="form-content">
              <div class="lattice-table">
                <div class="rule-row">
                  <div>
                    <el-input v-model="input"></el-input>
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in latticeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                    <span>得分率</span>
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                    <el-input v-model="input2"></el-input>
                  </div>
                  <div>
                    <i>+</i>
                    <i>-</i>
                  </div>
                </div>
                <div class="lattice">
                  <div class="title">推荐课程编号</div>
                  <div class="title">体验类型</div>
                  <div class="title">操作</div>
                  <div class="cell">
                    <el-input v-model="courseNumber.input1" placeholder="年级"></el-input>
                    <span>-</span>
                    <el-input v-model="courseNumber.input2" placeholder="科目"></el-input>
                    <span>-</span>
                    <el-input v-model="courseNumber.input3" placeholder="课程类型"></el-input>
                    <span>-</span>
                    <el-input v-model="courseNumber.input4" placeholder="专辑：多个用，拼接"></el-input>
                    <span>-</span>
                    <el-input v-model="courseNumber.input5" placeholder="专辑：多个用，拼接"></el-input>
                    <span>-</span>
                    <el-input v-model="courseNumber.text" placeholder="片段"></el-input>
                  </div>
                  <div class="cell">
                    <el-radio-group v-model="radio">
                      <el-radio :label="3">需要购买</el-radio>
                      <el-radio :label="6">试听</el-radio>
                      <el-radio :label="9">免费</el-radio>
                    </el-radio-group>
                  </div>
                  <div class="cell">
                    <i>+</i>
                    <i>-</i>
                  </div>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
            <el-button type="info">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="pane" v-else>
      <div class="pane-content">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item name="1">
            <template slot="title">
              <span>勾股定理 使用公式2</span>
              <div>
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
              <el-form-item label="题目类型" prop="name">
                <el-select v-model="ruleForm.region" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="模块标题" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="模块推荐课程编号" style="width: 100%;">
                <div class="content">
                  <div class="lattice-table">
                    <div class="lattice">
                      <div class="title">推荐课程编号</div>
                      <div class="title">体验类型</div>
                      <div class="cell">
                        <el-input v-model="courseNumber.input1" placeholder="年级"></el-input>
                        <span>-</span>
                        <el-input v-model="courseNumber.input2" placeholder="科目"></el-input>
                        <span>-</span>
                        <el-input v-model="courseNumber.input3" placeholder="课程类型"></el-input>
                        <span>-</span>
                        <el-input v-model="courseNumber.input4" placeholder="专辑：多个用，拼接"></el-input>
                        <span>-</span>
                        <el-input v-model="courseNumber.input5" placeholder="专辑：多个用，拼接"></el-input>
                        <span>-</span>
                        <el-input v-model="courseNumber.text" placeholder="片段"></el-input>
                      </div>
                      <div class="cell">
                        <el-radio-group v-model="radio">
                          <el-radio :label="3">需要购买</el-radio>
                          <el-radio :label="6">试听</el-radio>
                          <el-radio :label="9">免费</el-radio>
                        </el-radio-group>
                      </div>
                    </div>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="模块对应评语" style="width: 100%;">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-form>
            <el-collapse accordion v-model="activeNames2">
              <el-collapse-item name="1">
                <template slot="title">
                  <span>第 1 题</span>
                  <div>
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
                  style="padding-bottom: 0.24rem;"
                >
                  <el-form-item label="题目图片" prop="name" style="width: 100%;">
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :file-list="[]"
                    >
                      <el-button size="small" plain>
                        <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
                      </el-button>
                      <div slot="tip" class="el-upload__tip">仅支持上传.jpg/.png文件，图片宽度750，高度不限</div>
                    </el-upload>
                  </el-form-item>
                  <el-form-item label="选项设置" prop="name" style="width: 100%;">
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="A">A</el-checkbox>
                      <el-checkbox label="B"></el-checkbox>
                      <el-checkbox label="C"></el-checkbox>
                      <el-checkbox label="D"></el-checkbox>
                      <el-checkbox label="E"></el-checkbox>
                      <el-checkbox label="F"></el-checkbox>
                      <el-checkbox label="G"></el-checkbox>
                      <el-checkbox label="H"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="答案及分数" style="width: 100%; padding: 0; position: relative;">
                    <div class="an-num-tool">
                      <i class="el-icon-plus"></i>
                      <i class="el-icon-minus"></i>
                    </div>
                    <span class="an-num">
                      <el-input></el-input>
                      <el-input></el-input>
                    </span>
                  </el-form-item>
                </el-form>
              </el-collapse-item>
              <el-collapse-item name="2" style="margin-bottom: 0.24rem;">
                <template slot="title">
                  <span>第 2 题</span>
                  <div>
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
                  style="padding-bottom: 0.24rem;"
                >
                  <el-form-item label="题目图片" prop="name" style="width: 100%;">
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :file-list="[]">
                      <el-button size="small" plain>
                        <i class="iconfont iconupload" style="margin-right: 6px"></i>上传图片
                      </el-button>
                      <div slot="tip" class="el-upload__tip">仅支持上传.jpg/.png文件，图片宽度750，高度不限</div>
                    </el-upload>
                  </el-form-item>
                  <el-form-item label="选项设置" prop="name" style="width: 100%;">
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="A">A</el-checkbox>
                      <el-checkbox label="B"></el-checkbox>
                      <el-checkbox label="C"></el-checkbox>
                      <el-checkbox label="D"></el-checkbox>
                      <el-checkbox label="E"></el-checkbox>
                      <el-checkbox label="F"></el-checkbox>
                      <el-checkbox label="G"></el-checkbox>
                      <el-checkbox label="H"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="答案及分数" style="width: 100%; padding: 0; position: relative;">
                    <div class="an-num-tool">
                      <i class="el-icon-plus"></i>
                      <i class="el-icon-minus"></i>
                    </div>
                    <span class="an-num">
                      <el-input></el-input>
                      <el-input></el-input>
                    </span>
                  </el-form-item>
                </el-form>
              </el-collapse-item>
            </el-collapse>
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
        <div class="pane-tool">
          <el-button type="primary">保存</el-button>
          <el-button type="info">取消</el-button>
          <el-button type="info">预览</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'assessListAdd',
  data () {
    return {
      nav: ['基础信息', '练习题'],
      navIdx: 0,
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
      input: '',
      value: '<',
      input2: '',
      latticeOptions: [
        {
          label: '<=',
          value: '<='
        },
        {
          label: '<',
          value: '<'
        }
      ],
      courseNumber: {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        text: ''
      },
      radio: 3,
      activeNames: '1',
      activeNames2: [],
      checkList: []
    }
  },
  methods: {
    toolFunc (index) {
      this.navIdx = Number(index)
    },
    handleChange () {},
    delPane () {}
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.assessListAdd {
  @include pane_boxShadow;
  .form-content {
    .lattice-table {
      border: 1px solid $border-color;
      border-radius: 6px;
      .rule-row {
        padding: 0.12rem;
        border-bottom: 1px solid $border-color;
        display: flex;
        justify-content: space-between;
        > div {
          &:first-child {
            > .el-input {
              &:first-child {
                width: 0.32rem;
              }
              &:last-child {
                width: 0.56rem;
              }
              .el-input__inner {
                padding: 0;
                text-align: center;
              }
            }
            > span {
              color: $mainTextGray2;
              margin: 0 0.08rem;
            }
            > .el-select {
              width: 0.72rem;
              margin: 0 0.08rem;
            }
          }
        }
      }
      .lattice {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        > div {
          &:nth-child(1),
          &:nth-child(4) {
            width: 60%;
          }
          &:nth-child(2),
          &:nth-child(5) {
            width: 30%;
          }
          &:nth-child(3),
          &:nth-child(6) {
            width: 10%;
          }
          &.title {
            text-align: center;
            height: 0.4rem;
            line-height: 0.4rem;
            border-right: 1px solid $border-color;
            box-sizing: border-box;
            &:last-child {
              border-right: none;
            }
          }
          &.cell {
            height: 0.56rem;
            line-height: 0.56rem;
            border-top: 1px solid $border-color;
            border-right: 1px solid $border-color;
            box-sizing: border-box;
            display: flex;
            justify-content: space-around;
            &:nth-last-child(2) {
              display: block;
              text-align: center;
              .el-radio {
                vertical-align: middle;
                .el-radio__label {
                  color: $mainText;
                  font-size: $fontSize-12;
                }
              }
              > span {
                vertical-align: middle;
                margin-left: 0.02rem;
              }
            }
            &:nth-last-child(1) {
              border-right: none;
            }
            > .el-input {
              margin: 0 0.08rem;
              .el-input__inner {
                padding: 0 0.1rem;
              }
            }
          }
        }
      }
    }
  }
  .content {
    margin-top: 0.08rem;
    .lattice-table {
      border: 1px solid $border-color;
      border-radius: 6px;
      .lattice {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        > div {
          &:nth-child(1),
          &:nth-child(3) {
            width: 60%;
          }
          &:nth-child(2),
          &:nth-child(4) {
            width: 40%;
          }
          &.title {
            text-align: center;
            height: 0.4rem;
            line-height: 0.4rem;
            &:first-child {
              border-right: 1px solid $border-color;
              box-sizing: border-box;
            }
          }
          &.cell {
            height: 0.56rem;
            line-height: 0.56rem;
            border-top: 1px solid $border-color;
            border-right: 1px solid $border-color;
            box-sizing: border-box;
            display: flex;
            justify-content: space-around;
            &:last-child {
              border-right: none;
              display: block;
              text-align: center;
              .el-radio {
                vertical-align: middle;
                .el-radio__label {
                  color: $mainText;
                  font-size: $fontSize-12;
                }
              }
              > span {
                vertical-align: middle;
                margin-left: 0.02rem;
              }
            }
            > .el-input {
              margin: 0 0.08rem;
              .el-input__inner {
                padding: 0 0.1rem;
              }
            }
          }
        }
      }
    }
  }
  .an-num-tool {
    position: absolute;
    top: -90%;
    right: 0;
    i {
      font-weight: bold;
      margin-left: 0.08rem;
    }
  }
  .an-num {
      .el-input {
        width: 0.72rem;
        text-align: center;
        margin-right: 0.08rem
      }
    }
  .pane-tool {
    margin-top: 0.32rem
  }
}
</style>
