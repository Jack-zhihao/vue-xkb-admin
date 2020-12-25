<template>
  <div class="courseListDetail">
    <div class="detail">
      <pane-head :title="'基础信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>课程模块标题</p>
            <p>代数专章试听课</p>
          </el-col>
          <el-col :span="5">
            <p>课程分类</p>
            <p>高中 / 高三 / 数学 / 试听课程</p>
          </el-col>
          <el-col :span="5">
            <p>讲师</p>
            <p>百贵乐</p>
          </el-col>
          <el-col :span="5">
            <p>课程模块编码</p>
            <p>57-88-29-2642</p>
          </el-col>
          <el-col :span="4">
            <p>序号</p>
            <p>56</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>课件资料</p>
            <el-button type="text">这是一个课件.pdf</el-button>
          </el-col>
        </el-row>
        <div class="content">
          <p>配套习题</p>
          <div class="table-mock">
            <el-row>
              <el-col :span="12">习题</el-col>
              <el-col :span="12">答案</el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-button type="text">三角函数习题全.pdf</el-button>
              </el-col>
              <el-col :span="12">
                <el-button type="text">三角函数习题答案全.pdf</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="content">
          <p>配套习题</p>
          <div
            class="text"
          >极单问省把今务车积影问论争有取位则展义济门志了党社例二造及名为安深成圆出手划平需南本每军认级写张线即类华问较织。叫层果被千走们消经生于火复法打派受到正参走常然须任就质标长容因再这反器下政门情各即活很克对口。</div>
        </div>
        <el-row class="info-row">
          <el-col :span="5">
            <p>创建人</p>
            <p>从翔</p>
          </el-col>
          <el-col :span="5">
            <p>创建时间</p>
            <p>2019-11-14 20:12:32</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>课程模块封面图APP&官网</p>
            <p>
              <img :src="cover" alt="封面">
            </p>
          </el-col>
          <el-col :span="5">
            <p>课程模块详情图APP</p>
            <p><img :src="cover" alt="详情"></p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="detail">
      <pane-head :title="'课程信息'" :borderBottom="true"></pane-head>
      <div class="pane-content">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="勾股定理  使用公式" name="1">
            <el-row class="info-row">
              <el-col :span="5">
                <p>课程名称</p>
                <p>勾股定理 使用公式</p>
              </el-col>
              <el-col :span="5">
                <p>课程编码</p>
                <p>01</p>
              </el-col>
              <el-col :span="5">
                <p>课程排序</p>
                <p>1</p>
              </el-col>
              <el-col :span="5">
                <p>销售价格</p>
                <p>300.00</p>
              </el-col>
              <el-col :span="4">
                <p>讲师</p>
                <p>隗信之</p>
              </el-col>
            </el-row>
            <div class="content">
              <p>简介</p>
              <div class="text">一个方案是一流的 idea 加三流的实施；另外一个方案，一流的实施，三流的 idea，哪个好？我选一流的实施，三流的 idea</div>
            </div>
            <el-row class="info-row">
              <el-col :span="5">
                <p>课程模块封面图APP&官网</p>
                <p>
                  <img :src="cover" alt="封面">
                </p>
              </el-col>
              <div class="content">
                <el-table :data="tableData" stripe width="100%">
                  <el-table-column prop="name" label="视频标题"></el-table-column>
                  <el-table-column prop="name" label="视频类型"></el-table-column>
                  <el-table-column prop="name" label="讲师名称"></el-table-column>
                  <el-table-column prop="name" label="视频大小"></el-table-column>
                  <el-table-column prop="name" label="视频排序"></el-table-column>
                  <el-table-column prop="name" align="right" flexd="right" label="操作">
                    <template slot-scope="scope">
                      <tool-btn :btns="['播放']" :id="String(scope.row.index)" @toolFunc="play"></tool-btn>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="勾股定理  使用公式2" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="detail" style="padding-bottom: 0">
      <pane-head :title="'审核信息'" :borderBottom="true"></pane-head>
      <div class="pane-content" style="padding-bottom: 0">
      <examine-step></examine-step>
      </div>
    </div>
    <el-dialog  :modal-append-to-body="true"
      :append-to-body="true"
      title="提示"
      :visible.sync="videoDialog"
      width="60%">
      <player></player>
      <span slot="footer" class="dialog-footer">
        <el-button @click="videoDialog = false">取 消</el-button>
        <el-button type="primary" @click="videoDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import cover from '@/assets/images/defaultCover.png'
import toolBtn from '@/components/common/toolBtn'
import examineStep from '@/components/common/examineStep'
import player from '@/components/common/com-player/player.vue'
export default {
  name: 'courseListDetail',
  components: {
    toolBtn,
    examineStep,
    player
  },
  data () {
    return {
      cover,
      activeName: '1',
      tableData: [
        {
          index: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          number: 1,
          examine: '不通过'
        },
        {
          index: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          number: 2,
          examine: '已通过'
        },
        {
          index: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          number: 3,
          examine: '待审核'
        },
        {
          index: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          number: 4,
          examine: '审核中'
        },
        {
          index: 5,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          number: 4,
          examine: '已取消'
        }
      ],
      videoDialog: false
    }
  },
  methods: {
    play (data) {
      window.console.log(data)
      this.videoDialog = true
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.courseListDetail {
  .detail {
    margin-bottom: 0.24rem;

    @include pane_boxShadow;
  }
  .pane-content {
    box-sizing: border-box;
    .info-row {
      margin-top: 0.24rem;
      p {
        text-align: left;
        line-height: 1.2;
        &:first-child {
          color: $mainTextGray2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &:nth-child(2) {
          font-size: $fontSize-14;
          margin-top: 0.08rem;
          padding-right: 0.16rem;
        }
      }
      .el-button {
        margin-top: 0.08rem;
        font-size: $fontSize-14;
        &.el-button--text {
          font-size: $fontSize-12;
        }
      }
      img {
        width: 1.5rem;
        border-radius: 6px;
      }
    }
    .content {
      margin-top: 0.24rem;
      > p {
        color: $mainTextGray2;
        margin-bottom: 6px;
      }
      .table-mock {
        text-align: center;
        border: 1px solid $border-color;
        border-radius: 6px;
        .el-row {
          .el-col {
            height: 0.4rem;
            line-height: 3.4;
            border: 1px solid $border-color;
            &:first-child {
              border-right: none;
              border-left: none;
            }
            &:last-child {
              border-right: none;
            }
          }
          &:nth-child(n + 1) .el-col {
            border-top: none;
          }
          &:last-child .el-col {
            border-bottom: none;
          }
        }
      }
      .text {
        font-size: $fontSize-14;
        color: $mainText;
      }
      .el-table {
        padding: 0.24rem 0;
      }
    }
  }
}
</style>
