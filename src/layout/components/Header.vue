<template>
  <el-header height="0.88rem">
    <div class="crumbs">
      <Breadcrumb/>
      <tags-view v-show="isShowTagsView"></tags-view>
    </div>
    <div class="user-pane">
      <div class="information">
         <i class="el-icon-message-solid"></i>
        <span class="tips-number">8</span>
      </div>
      <el-image
        style="width: 32px; height: 32px;border-radius: 32px; margin-right: 16px; top: 10px;"
        :src="userImage"
        fit="cover"
        :preview-src-list="srcList"
      ></el-image>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Fiona·H
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><span @click="showTagsView">{{isShowTagsView?'关闭':'开启'}}导航标签栏</span></el-dropdown-item>
          <el-dropdown-item><span @click="layoutVisibleFunc">调整屏幕比例</span></el-dropdown-item>
          <el-dropdown-item><span @click="logoutVisible = true">退出</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 调整布局比例提示框 -->
    <reset-layout :layoutVisibleP="layoutVisible" @emitLayoutVisible="emitLayoutVisible"></reset-layout>

    <!-- 退出登录提示框 -->
    <el-dialog :modal-append-to-body="true"
      :append-to-body="true"
      title="提示"
      :visible.sync="logoutVisible"
      width="380px">
      <span>亲，您确定需要退出登录吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="logout">确 定</el-button>
        <el-button type="info" @click="logoutVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </el-header>
</template>
<script>
import userImage from '@/assets/images/user.jpg'
import Breadcrumb from '@/components/Breadcrumb'
import TagsView from './TagsView'
import resetLayout from '@/components/global/resetLayout'
export default {
  name: 'Header',
  components: {
    Breadcrumb,
    TagsView,
    resetLayout
  },
  data () {
    return {
      logoutVisible: false,

      userImage,

      isShowTagsView: true,

      srcList: [userImage],

      layoutVisible: false
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'login' })
    },
    showTagsView () {
      this.isShowTagsView = !this.isShowTagsView
    },
    layoutVisibleFunc () {
      this.layoutVisible = true
    },
    emitLayoutVisible () {
      this.layoutVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  padding: 0 0.32rem /* 32/100 */;
  .crumbs {
    width: calc(100% - 2.50rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
  }
  .user-pane {
    line-height: 0.88rem;
    > .information {
      display: inline-block;
      line-height: 1;
      font-size: 0.20rem;
      margin-right: 0.32rem /* 40/100 */;
      color: rgba(78, 89, 131, 0.6);
      font-weight: 600;
      position: relative;
      color: rgba(205, 208, 221, 1);
      vertical-align: middle;
      .tips-number {
        position: absolute;
        background: rgba(255, 85, 85, 1);
        border-radius: 0.14rem;
        top: -0.07rem;
        left: 0.1rem;
        padding: 1px 4px;
        font-size: 0.1rem;
        color: #fff;
        font-style: none;
        text-align: center;
        border: 1px solid #f5f6fa;
      }
    }
    .el-dropdown {
      color: rgba(69, 78, 112, 1);
      cursor: default;
      line-height: 1.5;
    }
    .el-image {
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.14);
    }
  }
}
.el-dropdown-menu {
  padding: 0;
}
</style>
