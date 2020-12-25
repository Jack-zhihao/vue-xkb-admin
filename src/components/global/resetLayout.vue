<!--
 * @Author: zhihao
 * @Date: 2020-06-18 18:16:40
 * @LastEditTime: 2020-07-02 14:21:07
 * @LastEditors: Please set LastEditors
 * @Description: 调整屏幕的，侧边栏 顶部 内容 底部 的大小比例
 * @FilePath: \app\src\components\global\resetLayout.vue
-->
<template>
    <el-dialog  :modal-append-to-body="true"
      :append-to-body="true"
      title="调整布局比例"
      :visible.sync="layoutVisible"
      @close="layoutVisibleClose"
      width="46%">
      <div class="dialog-content">
        <el-button :type="scale === 0.6? 'primary': ''" @click="resetLayout(0.6)">调整 0.6 比例</el-button>
        <el-button :type="scale === 0.8? 'primary': ''" @click="resetLayout(0.8)">调整 0.8 比例</el-button>
        <el-button :type="scale === 1? 'primary': ''" @click="resetLayout(1)">调整 默认 比例</el-button>
        <el-button :type="scale === 1.2? 'primary': ''" @click="resetLayout(1.2)">调整 1.2 比例</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelScale">取 消</el-button>
        <el-button type="primary" @click="comfrimScale">确 定</el-button>
      </span>
    </el-dialog>
</template>
<script>
import { getLocalScale, setLocalScale } from '@/utils/localHandle'
export default {
  name: 'layoutVisible',
  props: ['layoutVisibleP'], // 父组件传下来的值
  data () {
    return {
      layoutVisible: false,
      scale: Number(getLocalScale()) || 1
    }
  },
  methods: {
    /**
     * @description:
     * @param {
     *  scale： 0.8 / 1 / 1.2 缩放比例
     * }
     */
    resetLayout (scale) {
      this.scale = scale
    },

    /**
     * @description: 取消布局调整
     */
    cancelScale () {
      this.layoutVisible = false
    },

    /**
     * @description: 提交布局调整
     * @param {type}
     * @return:
     */
    comfrimScale () {
      setLocalScale(this.scale)

      document.getElementsByTagName('html')[0].style.fontSize = 100 * Number(getLocalScale()) + 'px'

      this.layoutVisible = false
    },

    /**
     * @description: 触发父组件emitLayoutVisible方法
     * @param {type}
     */
    layoutVisibleClose () {
      this.scale = Number(getLocalScale())
      this.$emit('emitLayoutVisible', false)
    }
  },
  watch: {
    // 父组件的值定义到当前组件
    'layoutVisibleP' (value) {
      this.layoutVisible = value
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog-content {
  .el-button {
    margin: 0.05rem 0.05rem 0;
  }
}
</style>
