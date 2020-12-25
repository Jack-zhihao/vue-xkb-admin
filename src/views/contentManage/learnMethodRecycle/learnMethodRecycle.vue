<template>
  <div class="learnMethodRecycle">
    <pane-head :title="'学习方法回收站'" :borderBottom="true"></pane-head>
     <el-row class="common-condition">
      <el-col :span="4" class="condition">
        <el-input v-model="input" placeholder="请输入标题"></el-input>
      </el-col>
      <el-col :span="4" class="condition">
        <el-select v-model="value" clearable placeholder="请选择审核状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class="condition">
        <el-button>搜索</el-button>
      </el-col>
    </el-row>
      <div class="table-data">
      <el-table :data="tableData" stripe width="100%">
        <el-table-column prop="index" width="80" align="center" label="排序">
          <template slot-scope="scope">
            <span class="index">{{scope.row.index}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="cover" width="120"  align="center" label="封面">
          <template slot-scope="scope">
            <img :src="scope.row.cover" alt="封面" style="margin: 6px 0 0;">
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="status" label="审核状态">
          <template slot-scope="scope">
            <span :style="`color:${statusColor[scope.row.status]}`">{{scope.row.status}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="onlineStatus" label="上架状态"></el-table-column>
        <el-table-column prop="creater" label="创建人"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="operator" label="删除人"></el-table-column>
        <el-table-column prop="operatTime" label="删除时间"></el-table-column>
        <el-table-column label="操作" width="250" align="right">
          <template slot-scope="scope">
            <el-button type="text">恢复</el-button>
            <el-button type="text" @click="view(scope.row)">预览</el-button>
            <el-button type="text" @click="detail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="100"
        layout="slot, prev, pager, next, jumper"
        :total="1000"
      >
        <span class="el-pagination-info">1/10页&nbsp;总共100条</span>
      </el-pagination>
    </div>
    <el-dialog  :modal-append-to-body="true" :append-to-body="true" title="提示" :visible.sync="dialogVisibleViews" width="60%" class="hideHead">
      <el-image :src="src"></el-image>
      <div class="coureViews">
        <p>AWSL！这个超火爆的手绘课，Wacom还来送手绘板</p>
        <span>2019-12-02</span>
        <div class="brief">
          <div>前段时间笔者对自己公司的在线教育平台做了一项深度研究，主要方向是探究影响用户购买在线课程有哪些因素，以及这些因素的影响程度如何，希望以此结果指导平台的运营方向。
          </div>
          <div>这篇研究我花了几个月的时间，采用了以统计学为基础的商业研究方法，最后的研究成果也写成了一篇论文。这里简单给大家分享一下核心的内容。</div>
          <div>本次调研分为三步：</div>
          <div>通过问卷调研收集信息；</div>
          <div>通过数据分析出哪些因素会影响用户的购买；</div>
          <div>通过分析结果能给运营策略带来哪些指导和改进。</div>
        </div>
        <img
          style="width: 100%;"
          src="https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
          alt="封面">
        <div class="courseInfo">
          <div class="info">
            <el-image
              style="width: 120px; height: 75px"
              :src="cover"
              fit="cover"></el-image>
            <div>
              <p>几何解题技巧</p>
              <p>讲师  马大帅</p>
              <p>高中 > 高三 > 数学 > 真题演练</p>
            </div>
          </div>
          <el-button type="warning">立即购买</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import cover from '@/assets/images/defaultCover.png'
import { learnMethodRecycle } from '@/api/modules/ContentManage'
export default {
  name: 'learnMethodRecycle',
  data () {
    return {
      cover,
      input: '',
      value: '',
      statusColor: {
        审核中: '#FFAA43',
        已通过: '#19CBA9',
        待审核: '#FF5555'
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      tableData: [],
      currentPage: 5,
      dialogVisibleViews: false,
      src:
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
    }
  },
  methods: {
    view () {
      this.dialogVisibleViews = true
    },
    detail () {
      this.$router.push({ name: 'learnMethodRecycleDetail' })
    }
  },
  mounted () {
    learnMethodRecycle()
      .then(res => {
        window.console.log(res)
        const { data } = res
        this.tableData = data
      })
  }
}
</script>
<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.learnMethodRecycle {
  @include pane_boxShadow;
  .el-dialog {
    overflow: hidden;
    .el-dialog__body {
      padding: 0;
      display: flex;
      flex-direction: column;

      .el-image {
        width: 100%;
      }
      .coureViews {
        border-radius: 6px;
        margin-top: -86px;
        z-index: 1;
        background-color: #fff;
        padding: 0 56px 56px;
        box-sizing: border-box;
        > p {
          font-size: 0.28rem;
          margin-top: 0.48rem;
        }
        > span {
          color: $mainTextGray;
        }
        .brief {
          font-size: $fontSize-14;
          margin-top: 0.32rem;
          margin-bottom: 0.32rem;
          color: $mainText;
          >div:nth-child(2) {
            margin: 0.32rem 0;
          }
        }
        .courseInfo {
          display: flex;
          justify-content: space-between;
          padding: 0.16rem;
          background-color: $bgColor-06;
          border-radius: 8px;
          margin-top: 0.32rem;
          .info {
            display: flex;
            .el-image {
              margin: 0;
            }
            >div {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 100%;
              vertical-align: top;
              margin-left: 0.16rem;
              p {
                &:nth-child(1) {
                  font-size: $fontSize-16;
                }
              }
            }
          }
          .el-button--warning {
            margin-top: 0.2rem;
            background-image: linear-gradient(to bottom, #FFAE50, #FF5843);
            border: none;
            box-shadow: 0 8px 12px rgba(255, 88, 67, 0.32);
          }
        }
      }
    }
  }
}
</style>
