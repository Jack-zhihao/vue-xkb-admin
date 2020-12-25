<!--
 * @Author: zhihao
 * @Date: 2020-06-08 14:32:24
 * @LastEditTime: 2020-06-30 16:26:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin\src\components\common\com-player\player.vue
-->
<template>
  <div id="video-container"></div>
</template>
<script>
import ComPlayer from './player.js'
export default {
  name: 'player',
  /**
   * @description: 公共播放器。播放格式分 mp4, m3u8, flv
   * @param
   * {
   *    scrollValue: 滚动文字
   *    playUrl：播放链接
   * }
   * @return:
   */
  props: {
    scrollValue: {
      type: String,
      default: 'hello world'
    },
    playUrl: {
      type: String,
      // default: 'http://pp3zvsk2n.bkt.clouddn.com/promotionalvideo/202061/159098524481664a4/97b6013f82344c648c.m3u8'
      default: 'http://pp3zvsk2n.bkt.clouddn.com/video/sys_8a9f8680-9113-4ef9-ab2c-59255216c104.FLV'
    }
  },
  mounted () {
    const player = new ComPlayer('#video-container', this.playUrl, this.scrollValue)
    player.init()
  }
}
</script>
<style lang="scss">
@import "./player.scss";
#video-container {
  width: 100%;
}
</style>
