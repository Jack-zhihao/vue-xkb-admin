<template>
  <div class="orderListAdd">
    <pane-head :borderBottom="true" :title="'添加订单'"></pane-head>
    <div class="pane-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="下单用户" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="收货地址" prop="area" style="width: 60%">
          <v-distpicker></v-distpicker>
          <el-input v-model="ruleForm.name" style="width: calc(100% - 325px); min-width: 1rem"></el-input>
        </el-form-item>
        <el-form-item label="支付方式" prop="name" style="width: 100%">
          <el-radio v-model="ruleForm.radio" label="1">支付宝支付</el-radio>
          <el-radio v-model="ruleForm.radio" label="2">微信支付</el-radio>
        </el-form-item>
      </el-form>
      <div class="content">
        <pane-head :title="'已选专辑'" class="content-head">
          <div slot="tool" class="tool-term">
            <el-button>继续选择</el-button>
            <el-button type="info">清空</el-button>
          </div>
        </pane-head>
        <el-table :data="tableData" stripe width="100%">
          <el-table-column prop="name" fixed  label="专辑名称"></el-table-column>
          <el-table-column prop="jduan" width="80" label="阶段"></el-table-column>
          <el-table-column prop="nji" width="80" label="年级"></el-table-column>
          <el-table-column prop="xke" width="80" label="学科"></el-table-column>
          <el-table-column prop="kcflei"  width="100" label="课程分类"></el-table-column>
          <el-table-column prop="xsjge" width="100" label="销售价格"></el-table-column>
          <el-table-column prop="kcshu" align="center" width="60" label="课程数"></el-table-column>
          <el-table-column align="right" width="140" label="操作">
            <template slot-scope="scope">
              <tool-btn :btns="['查看课程','删除']" :id="scope.row.name"></tool-btn>
            </template>
          </el-table-column>
        </el-table>
        <pane-head :title="'已选课程'" class="content-head"></pane-head>
        <el-table :data="tableData" stripe width="100%">
          <el-table-column prop="name" fixed width="240" label="课程名称"></el-table-column>
          <el-table-column prop="name2" fixed  label="专辑名称"></el-table-column>
          <el-table-column prop="jduan"  label="阶段"></el-table-column>
          <el-table-column prop="nji"  label="年级"></el-table-column>
          <el-table-column prop="xke"  label="学科"></el-table-column>
          <el-table-column prop="kcflei"   label="课程分类"></el-table-column>
          <el-table-column prop="xsjge"  label="销售价格"></el-table-column>
          <el-table-column align="right" width="120" label="操作">
            <template slot-scope="scope">
              <tool-btn :btns="['查看视频','删除']" :id="scope.row.name"></tool-btn>
            </template>
          </el-table-column>
        </el-table>
        <div class="summry">
          <div>共选择了 <span>1</span> 个课程</div>
          <div>
            <p><span>订单折扣：</span><span>-100.00(8 折)</span></p>
            <p><span style="line-height: 2.4">订单总价：</span><span> 5179.00</span></p>
          </div>
        </div>
      </div>
      <div class="content no-border">
        <pane-head :title="'赠送课程'" :title2="'（购买课程满3个送3个）'" class="content-head"></pane-head>
        <el-table :data="tableData" stripe width="100%">
          <el-table-column prop="name" fixed  label="课程名称"></el-table-column>
          <el-table-column prop="name2" fixed  label="专辑名称"></el-table-column>
          <el-table-column prop="jduan" width="80" label="阶段"></el-table-column>
          <el-table-column prop="nji" width="80" label="年级"></el-table-column>
          <el-table-column prop="xke" width="80" label="学科"></el-table-column>
          <el-table-column prop="kcflei"  width="100" label="课程分类"></el-table-column>
          <el-table-column prop="xsjge" width="100" label="销售价格"></el-table-column>
          <el-table-column align="right" width="100" label="操作">
            <template slot-scope="scope">
              <tool-btn :btns="['查看视频']" :id="scope.row.name"></tool-btn>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="content">
        <pane-head :title="'赠送实物'" :title2="'（订单总价满3000，送iPad一部）'" class="content-head"></pane-head>
        <div class="gift-cover">
          <img :src="defaultCover" alt="礼品">
          <p>iPad  10.2英寸</p>
        </div>
        <div class="save-tool">
          <el-button type="primary">保存</el-button>
          <el-button type="info">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import defaultCover from '@/assets/images/defaultCover.png'
import VDistpicker from 'v-distpicker'
import toolBtn from '@/components/common/toolBtn'
export default {
  name: 'orderListAdd',
  components: {
    VDistpicker,
    toolBtn
  },
  data () {
    return {
      ruleForm: {
        name: '',
        value: '选项3',
        desc: '',
        radio: '1',
        area: {
          province: {
            code: '150000',
            value: '内蒙古自治区'
          },
          city: {
            code: '150500',
            value: '通辽市'
          },
          area: {
            code: '150526',
            value: '扎鲁特旗'
          }
        }
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
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 0, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      },
      tableData: [
        {
          name: '当你只是需要一根针时，千万不要去磨铁棒',
          name2: '团队的成长是管理者最大的成功',
          jduan: '初中',
          nji: '初一',
          xke: '数学',
          kcflei: '专题训练',
          xsjge: '6,729.24',
          kcshu: 2
        },
        {
          name: '当你只是需要一根针时，千万不要去磨铁棒',
          jduan: '初中',
          nji: '初一',
          xke: '数学',
          kcflei: '专题训练',
          xsjge: '6,729.24',
          kcshu: 2
        },
        {
          name: '当你只是需要一根针时，千万不要去磨铁棒',
          jduan: '初中',
          nji: '初一',
          xke: '数学',
          kcflei: '专题训练',
          xsjge: '6,729.24',
          kcshu: 2
        },
        {
          name: '当你只是需要一根针时，千万不要去磨铁棒',
          jduan: '初中',
          nji: '初一',
          xke: '数学',
          kcflei: '专题训练',
          xsjge: '6,729.24',
          kcshu: 2
        },
        {
          name: '当你只是需要一根针时，千万不要去磨铁棒',
          jduan: '初中',
          nji: '初一',
          xke: '数学',
          kcflei: '专题训练',
          xsjge: '6,729.24',
          kcshu: 2
        }
      ],
      defaultCover
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.orderListAdd {
  @include pane_boxShadow;
  .pane-content {
    padding-bottom: 0;
    .el-form {
      padding-bottom: 0.24rem;
      border-bottom: 1px solid $border-color;
    }
    .content {
      border-bottom: 1px solid $border-color;
      &.no-border {
        border-bottom: none;
      }
      .gift-cover {
        width: 1.5rem;
        img {
          width: 100%;
        }
        p {
          text-align: center;
          padding-top: 0.08rem;
          line-height: 1;
        }
      }
      .save-tool {
        padding: 0.32rem 0 0.24rem;
      }
    }
    .summry {
      display: flex;
      justify-content: space-between;
      padding: 0.16rem 0 0.24rem;
      >div {
        color: $mainTextGray2;
        &:first-child {
          span {
            color: $mainText;
          }
        }
        &:last-child {
          >p {
            text-align: right;
            display: flex;
            justify-content: space-between;
            span:last-child {
              display: inline-block;
              color: $mainText;
            }
            &:last-child {
              padding-top: 0.06rem;
              span:last-child {
                font-size: $fontSize-20;
                color: $red;
                &:before {
                  content: '￥';
                  font-size: $fontSize-14;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
