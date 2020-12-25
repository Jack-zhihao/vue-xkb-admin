<!--
 * @Author: zhihao
 * @Date: 2020-06-18 15:01:12
 * @LastEditTime: 2020-06-30 11:47:40
 * @LastEditors: Please set LastEditors
 * @Description: 控制台 -> 用户量 - 总销售额 - 总订单量 - 复购订单
 * @FilePath: \app\src\views\controller\controller\result-pane.vue
-->
<template>
  <div class="summary">
    <div class="sumUp">
      <div class="sum-data">
        <div>
          <p class="title">用户量</p>
          <p class="data">{{user['number']}}</p>
        </div>
        <span class="icon iconfont iconuser"></span>
      </div>
      <div class="sum-detail">
        <div>
          <p>今日</p>
          <p>{{user['number2-1']}}</p>
        </div>
        <div>
          <p>昨日</p>
          <p>{{user['number2-2']}}</p>
        </div>
        <div>
          <p>日均</p>
          <p>{{user['number2-3']}}</p>
        </div>
      </div>
    </div>
    <div class="sumUp">
      <div class="sum-data">
        <div>
          <p class="title">总销售额</p>
          <p class="data _icon">
            {{sales['number']}}
            <span class="average">每单均价 ¥{{sales['average']}}</span>
          </p>
          <span class="float down">{{Number(sales['percent']) / 100}}%</span>
        </div>
        <span class="icon iconfont iconwallet"></span>
      </div>
      <div class="sum-detail">
        <div>
          <p>今日</p>
          <p class="_icon2">{{sales['number2-1']}}</p>
        </div>
        <div>
          <p>昨日</p>
          <p class="_icon2">{{sales['number2-2']}}</p>
        </div>
        <div>
          <p>日均</p>
          <p class="_icon2">{{sales['number2-3']}}</p>
        </div>
      </div>
    </div>
    <div class="sumUp">
      <div class="sum-data">
        <div>
          <p class="title">总订单量</p>
          <p class="data">
            {{orders['number']}}
            <span class="average">每单均价 ¥{{orders['average']}}</span>
          </p>
          <span class="float up">{{Number(orders['percent']) / 100}}%</span>
        </div>
        <span class="icon iconfont iconorder"></span>
      </div>
      <div class="sum-detail">
        <div>
          <p>今日</p>
          <p>{{orders['number2-1']}}</p>
        </div>
        <div>
          <p>昨日</p>
          <p>{{orders['number2-2']}}</p>
        </div>
        <div>
          <p>日均</p>
          <p>{{orders['number2-3']}}</p>
        </div>
      </div>
    </div>
    <div class="sumUp">
      <div class="sum-data">
        <div>
          <p class="title">复购订单</p>
          <p class="data">
            {{reOrders['number']}}
            <span class="average">每单均价 ¥{{reOrders['average']}}</span>
          </p>
          <span class="float up">{{Number(reOrders['percent']) / 100}}%</span>
        </div>
        <span class="icon iconfont iconorder"></span>
      </div>
      <div class="sum-detail">
        <div>
          <p>今日</p>
          <p>{{reOrders['number2-1']}}</p>
        </div>
        <div>
          <p>昨日</p>
          <p>{{reOrders['number2-2']}}</p>
        </div>
        <div>
          <p>日均</p>
          <p>{{reOrders['number2-3']}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { summary } from '@/api/modules/Controller'
export default {
  name: 'summaryPane',
  data () {
    return {
      user: {},
      sales: {},
      orders: {},
      reOrders: {}
    }
  },
  mounted () {
    summary()
      .then(res => {
        this.user = res.data[0]
        this.sales = res.data[1]
        this.orders = res.data[2]
        this.reOrders = res.data[3]
      })
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixin.scss";
 .summary {
    display: flex;
    justify-content: space-evenly;
    /deep/ ._icon {
      &:before {
        content: "￥";
        font-size: $fontSize-16;
      }
    }
    /deep/ ._icon2 {
      &:before {
        content: "￥";
        font-size: $fontSize-12;
      }
    }
    .sumUp {
      width: 25%;
      height: 1.88rem;
      background-color: $white;
      border-radius: 0.1rem;
      @include pane_boxShadow;
      margin: 0 0.1rem;
      @include clearDistance;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .sum-data {
        height: 2.2rem;
        display: flex;
        justify-content: space-between;
        text-align: left;
        padding: 0.16rem;
        border-bottom: 1px solid $border-color;
        > div {
          width: calc(100% - 0.56rem);
          position: relative;
          .float {
            position: absolute;
            bottom: -0.05rem;
            left: 0;
            font-family: $fontFamiy-Ios-Light;
            &.up {
              color: $color-red-up;
              &:before {
                content: "";
                display: inline-block;
                width: 0.16rem;
                height: 0.16rem;
                background-image: url("../../../assets/images/Triangle-up.png");
                background-size: cover;
                vertical-align: bottom;
              }
            }
            &.down {
              color: $color-red-down;
              &:before {
                content: "";
                display: inline-block;
                width: 0.16rem;
                height: 0.16rem;
                background-image: url("../../../assets/images/Triangle-down.png");
                background-size: cover;
                vertical-align: bottom;
              }
            }
          }
        }
        .title {
          font-size: 0.14rem;
          color: $mainTextGray;
        }
        .data {
          font-size: 0.28rem;
          color: $mainText;
          padding-top: 0.16rem;
          font-family: $fontFamiy-Ios-Light;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .average {
            color: $mainTextGray;
            font-size: $fontSize-12;
          }
        }
        .icon {
          width: 0.56rem;
          height: 0.56rem;
          border-radius: 0.56rem;
          line-height: 0.56rem;
          text-align: center;
          font-size: $fontSize-20;
          background-color: $icon-blue-bg;
          color: $icon-blue;
        }
      }
      .sum-detail {
        height: 100%;
        display: flex;
        justify-content: space-around;
        text-align: center;
        p {
          &:first-child {
            color: $mainTextGray;
            line-height: 0.4rem;
          }
          &:last-child {
            font-size: $fontSize-16;
            font-family: $fontFamiy-Ios-Light;
          }
        }
      }
      &:nth-child(2) .icon {
        background-color: $icon-yellow-bg;
        color: $icon-yellow;
      }
      &:nth-child(3) .icon {
        background-color: $icon-green-bg;
        color: $icon-green;
      }
      &:nth-child(4) .icon {
        background-color: $icon-red-bg;
        color: $icon-red;
      }
    }
  }
</style>
