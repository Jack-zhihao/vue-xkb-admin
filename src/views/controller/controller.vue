<!--
 * @Author: your name
 * @Date: 2019-11-28 14:50:49
 * @LastEditTime: 2020-06-30 11:48:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app\src\views\controller\controller.vue
-->
<template>
  <div class="controller">
    <SummaryPane></SummaryPane>
    <SaleOfRankPane></SaleOfRankPane>
    <SaleAnalysisPane></SaleAnalysisPane>
    <BusinessDetailPane></BusinessDetailPane>
  </div>
</template>
<script>
import SummaryPane from './controller/summaryPane'
import SaleOfRankPane from './controller/saleOfRankPane'
import SaleAnalysisPane from './controller/saleAnalysisPane'
import BusinessDetailPane from './controller/businessDetailPane'
export default {
  name: 'controller',
  components: {
    SummaryPane,
    SaleOfRankPane,
    SaleAnalysisPane,
    BusinessDetailPane
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.controller {
  padding-bottom: 0.24rem;
  min-width: 1060px;
 }
</style>
