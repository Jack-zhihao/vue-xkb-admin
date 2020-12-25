<template>
  <div class="step">
    <div class="step-head">
      <div class="step-row">
        <span>审核明细</span>
        <span>操作用户</span>
        <span>时间</span>
        <span>备注</span>
      </div>
    </div>
    <div class="step-content">
      <template>
        <div
          v-for="(step, i) in stepData"
          :key="i"
          class="step-row"
          :class="step.active? 'active': ''"
        >
          <span>{{step.detail}}</span>
          <span>{{step.opareNmae}}</span>
          <span>{{step.date}}</span>
          <span>{{step.note}}</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'step',
  props: {
    stepData: {
      type: [Object, Array],
      default: function () {
        return [
          {
            detail: '提交申请',
            opareNmae: '马可',
            date: '2019-11-08 09:24:56',
            note: ''
          },
          {
            detail: '审核不通过',
            opareNmae: '波罗',
            date: '2019-11-08 09:24:56',
            note: '有功无过是短暂的，无功有过是行不通的，有功有过是最好的'
          },
          {
            detail: '重新提交申请',
            opareNmae: '马可',
            date: '2019-11-08 09:24:56',
            note: '',
            active: true
          }
        ]
      }
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss">
@import "@/styles/variables.scss";
.step {
  border-left: 1px solid $border-color;
  box-sizing: border-box;
  padding: 0.24rem 0 0.24rem 0.15rem;
  .step-head {
    color: $mainTextGray2;
  }
  .step-row {
    span {
      display: inline-block;
      line-height: 1;
      &:nth-child(1) {
        width: 15%;
      }
      &:nth-child(2) {
        width: 15%;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 50%;
      }
    }
  }
  .step-content {
    .step-row {
      padding-top: 0.24rem;
      span:nth-child(1) {
        position: relative;
        &:before {
          content: "";
          display: inline-block;
          width: 0.07rem;
          height: 0.07rem;
          border-radius: 0.07rem;
          background-color: rgba(185, 189, 205, 1);
          position: absolute;
          top: 50%;
          margin-top: -0.035rem;
          left: -0.19rem;
        }
      }
      &.active {
        span:nth-child(1) {
          color: $blue;
          &::before {
            background-color: $blue;
          }
        }
      }
    }
  }
}
</style>
