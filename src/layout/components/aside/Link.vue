<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-06-30 15:35:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\layout\components\aside\Link.vue
-->
<template>
<!-- eslint-disable -->
  <component v-bind="linkProps(to)">
    <slot></slot>
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps (url) {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    }
  }
}
</script>
