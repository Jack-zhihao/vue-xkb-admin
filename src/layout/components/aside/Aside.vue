<template>
  <el-aside :width=" !getCollapse()? '64px': '2.44rem'" ref="elAside">
    <div class="appLogo">
      <span class="title" v-if="getCollapse()">学魁榜教育</span>
      <i :class="getCollapse()? 'el-icon-s-fold': 'el-icon-s-unfold'" @click="collapse"></i>
    </div>
    <el-menu
      router
      :default-active="$route.path"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="!getCollapse()"
      :background-color="variables.sideBg"
      :text-color="variables.sideText"
      :active-text-color="variables.sideTextActive"
    >
      <template v-for="(route, key) in permission_routes">
        <div
          class="menu-wrapper__title"
          v-if="route.meta && route.meta.type === 'title'"
          :key="key"
        >
          <span>{{route.meta.title}}</span>
        </div>
        <menu-item v-else :item="route" :key="key"></menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
import variables from '@/styles/variables.scss'
import menuItem from './menuItem'
import { mapGetters } from 'vuex'
export default {
  name: 'Aside',
  computed: {
    ...mapGetters(['permission_routes'])
  },
  components: {
    menuItem
  },
  data () {
    return {
      getCollapse () {
        return this.$store.state.setting.isCollapse
      },
      elAsideWidth: '2.44rem',
      variables
    }
  },
  created () {
    this.initMenuActive()
  },
  methods: {
    collapse () {
      this.$store.dispatch(
        'setting/SET_Collapse',
        !this.$store.state.setting.isCollapse
      )
    },
    handleOpen () {
      // console.log(key, keyPath);
    },
    handleClose () {
      // console.log(key, keyPath);
    },
    initMenuActive () {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/variables.scss";

.el-aside {
  height: 100%;
  transition: width 0.6s;
  .appLogo {
    display: flex;
    justify-content: space-between;
    height: 0.88rem /* 88/100 */;
    line-height: 0.88rem /* 88/100 */;
    margin: 0 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    .title {
      font-size: 0.2rem /* 20/100 */;
      color: rgba(0, 0, 0, 0.88);
      font-weight: Medium;
    }
    i {
      font-size:  16px;
      font-weight: 500;
      line-height: 0.88rem /* 88/100 */;
    }
  }
  .menu-title {
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.14rem /* 12/100 */;
    font-weight: bold;
    margin-top: 0.1rem;
    text-align: left;
    padding-left: 0.5rem;
  }
  .el-menu-vertical {
    font-weight: 600;
    font-size: 0.12rem /* 12/100 */;
    text-align: left;
    border: none;
    height: calc(100% - 0.9rem);
    overflow: auto;
    &::-webkit-scrollbar {
      width: 4px;
      height: 10px;
      /**/
    }
    &::-webkit-scrollbar-track {
      background: rgb(239, 239, 239);
      border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background: $bgColor-06;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: $border-color;
    }
    &::-webkit-scrollbar-corner {
      background: $blue;
    }
    .el-menu-item {
      border-left: 4px solid transparent;
      height: 0.48rem;
      line-height: 0.48rem;
      &.is-active {
        border-color: $sideTextActive;
      }
      .iconfont {
        color: $sideText;
        font-weight: 550;
        margin-right: 0.1rem;
      }
    }
    .el-submenu .el-menu-item {
      padding-left: 0.5rem !important;
    }
    .nest-menu {
      .el-menu-item {
        font-size: $fontSize-12;
        font-weight: 550;
      }
    }
    .notice {
      display: inline-block;
      width: 0.14rem;
      height: 0.14rem;
      background-color: #ff5555;
      line-height: 0.14rem;
      text-align: center;
      color: #fff;
      text-decoration: none;
      border-radius: 0.08rem;
      font-size: 0.12rem;
      position: absolute;
      top: 50%;
      margin: -0.07rem;
      right: 0.5rem;
    }
    .el-submenu__icon-arrow {
      transform: rotate(-90deg);
      margin-top: -6px;
    }
    .el-submenu > .el-submenu__title {
      height: 0.48rem;
      line-height: 0.48rem;
      .iconfont {
        color: $sideText;
        font-weight: 550;
        margin-right: 0.1rem;
      }
    }
    .el-submenu.is-opened > .el-submenu__title {
      .el-submenu__icon-arrow {
        transform: rotate(0deg);
      }
    }
  }
  .el-menu {
    .menu-wrapper__title {
      color: $sideText;
      height: 36px;
      font-size: 0.12rem;
      padding: 0 0.24rem;
      > span {
        display: inline-block;
        margin-top: 0.2rem;
      }
    }
  }
  .el-menu--collapse {
    .menu-wrapper {
      .el-menu-item {
        border: none;
      }
    }
    .el-submenu__title > span {
      display: none;
    }

    /deep/ .el-submenu__icon-arrow {
      display: none;
    }
  }
}
</style>
