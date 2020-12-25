<template>
  <div class="assessListDetail">
    <div class="pane">
      <pane-head :title="'基础信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>测评标题</p>
            <p>第二章节练习题</p>
          </el-col>
          <el-col :span="5">
            <p>讲解老师</p>
            <p>邱崇</p>
          </el-col>
          <el-col :span="5">
            <p>课程阶段</p>
            <p>高中</p>
          </el-col>
          <el-col :span="5">
            <p>学科</p>
            <p>生物</p>
          </el-col>
          <el-col :span="4">
            <p>分类</p>
            <p>知识体系测试</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="24">
            <p>课程规则</p>
            <div class="content">
              <div class="lattice-table">
                <div class="rule-row">
                  <el-input v-model="input"></el-input>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
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
                <div class="lattice">
                  <div class="title">推荐课程编号</div>
                  <div class="title">体验类型</div>
                  <div class="cell">
                    <el-input v-model="courseNumber.input1"></el-input>
                    <span>-</span>
                    <el-input v-model="courseNumber.input2"></el-input>
                    <span>-</span>
                    <el-input v-model="courseNumber.input3"></el-input>
                    <span>-</span>
                    <el-input v-model="courseNumber.input4"></el-input>
                    <span>-</span>
                    <el-input v-model="courseNumber.input5"></el-input>
                    <span>-</span>
                    <el-input v-model="courseNumber.text" placeholder="片段"></el-input>
                  </div>
                  <div class="cell">
                    <el-radio v-model="radio" label="1">需要购买</el-radio>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pane">
      <pane-head :title="'练习题信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-collapse v-model="collapseName" accordion>
          <el-collapse-item title="勾股定理  使用公式" name="1">
            <el-row class="info-row">
              <el-col :span="5">
                <p>题目类型</p>
                <p>应用技巧</p>
              </el-col>
              <el-col :span="5">
                <p>模块标题</p>
                <p>三角函数</p>
              </el-col>
            </el-row>
            <el-row class="info-row">
              <el-col :span="24">
                <p>模块推荐课程编号</p>
                <div class="content">
                  <div class="lattice-table">
                    <div class="lattice">
                      <div class="title">推荐课程编号</div>
                      <div class="title">体验类型</div>
                      <div class="cell">
                        <el-input v-model="courseNumber.input1"></el-input>
                        <span>-</span>
                        <el-input v-model="courseNumber.input2"></el-input>
                        <span>-</span>
                        <el-input v-model="courseNumber.input3"></el-input>
                        <span>-</span>
                        <el-input v-model="courseNumber.input4"></el-input>
                        <span>-</span>
                        <el-input v-model="courseNumber.input5"></el-input>
                        <span>-</span>
                        <el-input v-model="courseNumber.text" placeholder="片段"></el-input>
                      </div>
                      <div class="cell">
                        <el-radio v-model="radio" label="1">需要购买</el-radio>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="info-row">
              <el-col :span="24">
                <p>模块对应评语</p>
                <el-input v-model="input" style="margin-top: 0.08rem"></el-input>
              </el-col>
            </el-row>
            <el-row class="info-row">
              <el-col :span="12">
                <p>第 1 题</p>
                <div class="subject">
                  <el-image :src="cover" fit="contain">
                    <div slot="placeholder" class="image-slot">加载中
                      <span class="dot">...</span>
                    </div>
                  </el-image>
                  <div>
                    <div class="selection">
                      <span>题目选项</span>
                      <span>A/B/C/D</span>
                    </div>
                    <div class="answer">
                      <span>正确答案</span>
                      <span>A — 1 分</span>
                      <span>B — 1 分</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <p>第 2 题</p>
                <div class="subject">
                  <el-image :src="cover" fit="contain">
                    <div slot="placeholder" class="image-slot">加载中
                      <span class="dot">...</span>
                    </div>
                  </el-image>
                  <div>
                    <div class="selection">
                      <span>题目选项</span>
                      <span>A/B/C/D</span>
                    </div>
                    <div class="answer">
                      <span>正确答案</span>
                      <span>A — 1 分</span>
                      <span>B — 1 分</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="勾股定理  实战技巧" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

    <div class="pane" style="padding-bottom: 0;margin-bottom: 0.24rem;">
      <pane-head :title="'审核信息'" :borderBottom="true"></pane-head>
      <div class="pane-content" style="padding-bottom: 0">
        <examine-step></examine-step>
      </div>
    </div>
  </div>
</template>
<script>
import cover from '@/assets/images/defaultCover.png'
import examineStep from '@/components/common/examineStep'
export default {
  name: 'assessListDetail',
  components: {
    examineStep
  },
  data () {
    return {
      cover,
      input: '0',
      input2: '100%',
      value: '<=',
      options: [
        {
          value: '<=',
          label: '<='
        },
        {
          value: '<',
          label: '<'
        },
        {
          value: '>',
          label: '>'
        }
      ],
      courseNumber: {
        input1: '0',
        input2: '0',
        input3: '0',
        input4: '0',
        input5: '0',
        text: ''
      },
      radio: '1',
      collapseName: '1'
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.assessListDetail {
  .pane {
    @include pane_boxShadow;
    padding-bottom: 0.24rem;
    margin-bottom: 0.24rem;
    &:last-child {
      margin: 0;
    }
    .pane-content {
      .info-row {
        margin-top: 0.24rem;
        &.info-row-last {
          padding-bottom: 0.24rem;
          border-bottom: 1px solid $border-color;
        }
        p {
          text-align: left;
          line-height: 1.2;
          &:first-child {
            color: $mainTextGray2;
          }
          &:nth-child(2) {
            font-size: $fontSize-14;
            margin-top: 0.08rem;
            padding-right: 0.16rem;
          }
        }

        img {
          width: 1.5rem;
          border-radius: 6px;
        }
      }
      .content {
        margin-top: 0.08rem;
        .lattice-table {
          border: 1px solid $border-color;
          border-radius: 6px;
          .rule-row {
            padding: 0.12rem;
            border-bottom: 1px solid $border-color;
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
          .lattice {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            > div {
              width: 50%;
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
      .subject {
        display: flex;
        font-size: $fontSize-12;
        margin-top: 0.08rem;
        margin-bottom: 0.24rem;
        img {
          width: 1rem;
        }
        > div:last-child {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin-left: 0.24rem;
          span {
            margin-right: 0.24rem;
            &:nth-child(1) {
              margin-right: 0.32rem;
            }
          }
        }
      }
    }
  }
}
</style>
