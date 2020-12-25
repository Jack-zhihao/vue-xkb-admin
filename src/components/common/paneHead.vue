<!--
  @borderBottom: 组件是否添加下边框;
  @nav: 导航名称列表;
  @title: 页面标题
-->
<template>
  <div class="paneHead" :class="borderBottom?'borderBottom':null" ref='paneHead'>
    <div class="nav" ref="nav">
      <slot :name="nav? 'nav': 'title'">
        <el-menu
          v-if="nav"
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item v-for="(item, i) in nav" :key="i" :index="String(i)">{{item}}</el-menu-item>
        </el-menu>
        <span class="title" v-else>{{title}} <span class="title2">{{title2}}</span></span>
      </slot>
    </div>
    <div class="tool" ref="tool">
      <slot name="tool"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'paneHead',
  props: {
    nav: {
      type: Array,
      required: false
    },
    borderBottom: {
      type: Boolean
    },
    title: {
      type: String
    },
    title2: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activeIndex: '0'
    }
  },
  methods: {
    handleSelect (data) {
      this.$emit('pane-head-func', data)
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
@import "@/styles/variables.scss";
.paneHead {
  height: 0.64rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.16rem;
  background: #fff;
  &.borderBottom {
    position: relative;
    &::after {
      content: '';
      display: inline-block;
      width: 100%;
      bottom: 0;
      left: 0;
      position: absolute;
      border-bottom: 1px solid $border-color;
    }
  }
  .nav {
    border-top-left-radius: 0.1rem;
    // overflow: hidden;
    .el-menu--horizontal {
      border: none;
      .el-menu-item {
        height: 0.64rem;
        line-height: 0.64rem;
        padding: 0;
        border: none !important;
        color: $mainTextGray;
        @include nav_boxShadow;
        @include clearDistance;
        font-size: $fontSize-16;
        margin-right: 0.32rem;
        &.is-active {
          position: relative;
          color: $mainText;
          &::after {
            content: "";
            display: inline-block;
            width: 0.24rem;
            height: 0.03rem;
            border-radius: 0.03rem;
            background-color: $textActive;
            position: absolute;
            left: 50%;
            bottom: 0px;
            margin-left: -0.12rem;
          }
        }
      }
    }
    .title {
      font-size: $fontSize-16;
      height: 0.64rem;
      line-height: 0.64rem;
      .title2 {
        color: $mainTextGray2;
      }
    }
  }
  &.content-head {
    padding: 0;
    .title {
      font-size: $fontSize-14;
    }
  }
  .tool {
    .tool-term {
      padding: 0.16rem 0;
      text-align: right;
      i {
        color: $mainTextGray2
      }
    }
  }
  &.dialog_head {
    height: 0.7rem;
    padding: 0;
    /deep/ .el-menu-item , /deep/ .title{
      height: 0.7rem;
      line-height: 0.7rem;
    }
    .tool-term {
      position: relative;
      >.iconfont{
        position: absolute;
        margin-top: 0.1rem;
        right: -0.1rem
      }
    }
  }
  &.pane_head_info {
    padding: 0;
    .nav {
      .title {
        font-size: $fontSize-14;
      }
    }
  }
}
</style>
