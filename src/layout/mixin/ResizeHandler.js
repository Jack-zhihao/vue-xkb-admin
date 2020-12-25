/*
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:28:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\layout\mixin\ResizeHandler.js
 */
const { body } = document
const WIDTH = 992
export default {
  beforeMount () {
    window.addEventListener('resize', this.$_resizeHandler)
    this.$_resizeHandler()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  methods: {
    $_isMobile () {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler () {
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        if (isMobile) {
          this.$store.dispatch('setting/SET_Collapse', false)
        } else {
          this.$store.dispatch('setting/SET_Collapse', true)
        }
      }
    }
  }
}
