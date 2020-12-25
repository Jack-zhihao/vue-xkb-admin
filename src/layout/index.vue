<!--
 * @Author: your name
 * @Date: 2020-03-31 11:14:53
 * @LastEditTime: 2020-06-30 15:29:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin\src\layout\index.vue
-->
<template>
  <div class="layout" ref="layout">
    <div class="sidebar" ref="sidebar">
      <Aside></Aside>
    </div>
    <div class="container" ref="container">
      <div class="header">
        <Header></Header>
      </div>
      <elMain></elMain>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Aside from './components/aside/Aside'
import Header from './components/Header'
import elMain from './components/appMain'
import ResizeMixin from './mixin/ResizeHandler'
import Footer from './components/Footer'
export default {
  name: 'layout',
  components: {
    Aside,
    Header,
    elMain,
    Footer
  },
  mixins: [ResizeMixin],
  mounted () {
    const { isCollapse } = this.$store.state.setting
    this.$refs.container.style.width = !isCollapse ? 'calc(100% - 64px)' : 'calc(100% - 2.44rem)'
  },
  watch: {
    '$store.state.setting.isCollapse' (newVal) {
      this.$refs.container.style.width = !newVal ? 'calc(100% - 64px)' : 'calc(100% - 2.44rem)'
    }
  }
}
</script>
<style lang="scss">
@import '~@/styles/variables.scss';
.layout {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: $containBg;
  .sidebar {
    background-color: $sideBg;
    overflow: auto;
  }
  .container {
    width: calc(100% - 2.44rem);
  }
}
</style>
