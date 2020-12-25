<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:35:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\layout\components\aside\Item.vue
-->
<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    notice: {
      type: String,
      default: ''
    }
  },
  render (h, context) {
    const { icon, title, notice } = context.props
    const vnodes = []

    if (icon) {
      vnodes.push(<i class={'iconfont ' + icon}></i>)
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }

    if (notice) {
      vnodes.push(<span class="notice">{(notice)}</span>)
    }

    return vnodes
  }
}
</script>
