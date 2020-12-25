<template>
  <div class="staffListDetail">
    <pane-head :nav="nav" :borderBottom="true" @pane-head-func="headFunc"></pane-head>
    <template v-if="nav[navIdx] === '基础信息'">
      <div class="pane-content">
        <el-row class="info-row">
          <el-col :span="5">
            <p>员工名</p>
            <p>赖婷婷</p>
          </el-col>
          <el-col :span="5">
            <p>手机号</p>
            <p>18620145248</p>
          </el-col>
          <el-col :span="5">
            <p>邮箱</p>
            <p>345346@qq.com</p>
          </el-col>
          <el-col :span="5">
            <p>密码</p>
            <p>123456</p>
          </el-col>
          <el-col :span="4">
            <p>部门</p>
            <p>销售部</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="5">
            <p>职位</p>
            <p>销售主管</p>
          </el-col>
          <el-col :span="5">
            <p>入职时间</p>
            <p>2019年12月3日</p>
          </el-col>
          <el-col :span="5">
            <p>状态</p>
            <p>在职</p>
          </el-col>
          <el-col :span="5">
            <p>客服编码</p>
            <p>25478</p>
          </el-col>
          <el-col :span="4">
            <p>微信号</p>
            <p>545gs</p>
          </el-col>
        </el-row>
        <el-row class="info-row">
          <el-col :span="24">
            <p>微信二维码</p>
            <p>
               <el-image
                style="width: 100px; height: 100px; border-radius: 0.06rem;"
                :src="url"
                fit="fill"></el-image>
            </p>
          </el-col>
        </el-row>
      </div>
    </template>
    <template v-else>
       <el-row class="common-condition">
        <el-col :span="4" class="condition">
          <el-input v-model="input" placeholder="请输入用户名"></el-input>
        </el-col>
        <el-col :span="4" class="condition">
          <el-input v-model="input" placeholder="请输入用户名称"></el-input>
        </el-col>
        <el-col :span="4" class="condition">
          <el-select v-model="value" clearable placeholder="请选择用户标签">
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
          <el-table-column prop="phone" fixed label="手机号"></el-table-column>
          <el-table-column prop="username" fixed label="用户名"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>
          <el-table-column prop="userTag" align="center" label="用户标签"></el-table-column>
          <el-table-column prop="userLogTime" label="用户注册时间"></el-table-column>
          <el-table-column prop="userLoginTime" label="最后登录时间"></el-table-column>
          <el-table-column prop="isPur" align="center" label="是否购买过课程"></el-table-column>
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
    </template>
  </div>
</template>
<script>
export default {
  name: 'staffListDetail',
  data () {
    return {
      nav: ['基础信息', '绑定的客户'],
      navIdx: 0,
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      input: '',
      value: '',
      value1: '',
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
      tableData: [
        {
          phone: '18930279932',
          username: '张三三',
          sex: '男',
          userTag: '家长',
          userLogTime: '2019-08-15 13:30',
          userLoginTime: '2019-08-15 13:30',
          isPur: '未购买'
        }
      ],
      currentPage: 5
    }
  },
  methods: {
    headFunc (index) {
      this.navIdx = Number(index)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.staffListDetail {
  @include pane_boxShadow;
}
</style>
