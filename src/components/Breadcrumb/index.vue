<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:27
 * @LastEditTime: 2020-06-30 16:28:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\components\Breadcrumb\index.vue
-->
<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path + index">
        <span v-if="item.redirect==='noRedirect'|| index == levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)" class="no-redirect">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script>
import pathToRegexp from 'path-to-regexp'

export default {
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    $route (route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      // only show routes with meta.title
      window.console.log(this.$route)
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    isDashboard (route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    pathCompile (path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink (item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 0.12rem;
  line-height: 0.24rem;
  color: rgba(69, 78, 112, 1);
  .no-redirect {
    color: rgba(69, 78, 112, 1);
    cursor: text;
  }
}
</style>
