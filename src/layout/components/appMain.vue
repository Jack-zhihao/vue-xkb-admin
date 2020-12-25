<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:27
 * @LastEditTime: 2020-07-09 15:53:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\layout\components\appMain.vue
-->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
    <div class="BG-text">学魁榜</div>
  </section>
</template>
<script>
export default {
  name: 'appMain',
  data () {
    return {
    }
  },
  computed: {
    cachedViews () {
      return this.$store.state.tagsView.cachedViews
    },
    key () {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.app-main {
  height: calc(100% - 1.28rem);
  padding: 0 0.32rem 0.2rem;
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;
  >div:first-child {
    position: absolute;
    width: calc(100% - 0.64rem);
    z-index: 2;
  }
  .BG-text {
    position: absolute;
    width: calc(100% - 0.64rem);
    font-size: 1rem;
    font-weight: 600;
    color: $bgColor-06;
    text-align: center;
    top: 1rem;
    z-index: 1;
  }
}
</style>
