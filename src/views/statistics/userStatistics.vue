
<template>
  <div class="userStatistics">
    <pane-head :nav="nav" :borderBottom="true"></pane-head>
  </div>
</template>
<script>
export default {
  name: 'userStatistics',
  data () {
    return {
      nav: ['用户统计', '用户分析'],
      data () {
        return {}
      }
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.userStatistics {
  @include pane_boxShadow;
}
</style>
