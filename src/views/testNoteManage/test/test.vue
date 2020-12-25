<!--
 * @Author: your name
 * @Date: 2020-06-30 10:12:28
 * @LastEditTime: 2020-07-01 14:33:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkb-admin-H\app\src\views\testNoteManage\test\test.vue
-->
<template>
  <div class='test'>
    <el-input type='textarea' v-model='input' style='height: 120px'></el-input>
    <div style="text-align: center">
      <p>{{text}}</p>
    </div>
    <div class=""></div>
  </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      modelText:
        '北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高；须晴日，看红装素裹，分外妖娆。江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。一代天骄，成吉思汗，只识弯弓射大雕。俱往矣，数风流人物，还看今朝；',
      input: '',
      text: ''
    }
  },
  methods: {
    replace () {
      let index = 0
      const timer = setInterval(() => {
        if (index === this.modelText.length) {
          clearInterval(timer)
        } else {
          let tempText = this.modelText[index]
          this.input += tempText === '；' ? tempText + '\n' : tempText
          tempText = null
        }
        index = index + 1
      }, 10)
    },
    nestFunc () {
      // const Nest = (items, id = null, link = 'parent_id') => items.filter(item => id === item[link]).map(item => ({ ...item, children: Nest(items, item.id) }))
      const Nest = (items, id = null, link = 'parent_id') => items.filter(item => id === item[link]).map(item => ({ ...item, children: Nest(items, item.id) }))

      const arr = [
        { id: 1, parent_id: null },
        { id: 2, parent_id: 1 },
        { id: 3, parent_id: 2 },
        { id: 4, parent_id: 3 },
        { id: 5, parent_id: 4 }
      ]
      console.log(Nest(arr))
    }
  },
  mounted () {
    this.replace()
    this.nestFunc()
  }
}
</script>
<style lang="scss">
.test {
  .el-textarea__inner {
    height: 120px;
  }
}
</style>
