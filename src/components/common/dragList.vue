<template>
  <div class="dragList">
    <ul @dragstart="onDragStart" @dragover="onDragOver" @dragend="onDragEnd" ref="parentNode">
      <li v-for="(item,index) in listData" :key="index" :data-index="index" class="drag--item" draggable="true">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="right-edit-pane">
          <div class="title-item">
            <label>图片标题</label>
            <div class="item-content limit-word">
              <div class="el-form-item__content" style="width: 100%">
                <el-input placeholder="请输入内容" maxLength="20" v-model="item.title"></el-input>
                <span>{{item.title.length}}/20</span>
              </div>
            </div>
          </div>
          <div class="setting-item">
            <label>链接设置</label>
            <div class="item-content">
              <el-select v-model="item.type" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-input placeholder="https://www.########.com" v-model="item.address"></el-input>
            </div>
          </div>
        </div>
        <el-button type="text" class="del--icon" @click="del(index)"><i class="iconfont iconremove"></i></el-button>
      </li>
    </ul>
    <div class="tool">
      <el-button type="primary" @click="add">添加</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dragList',
  props: {
    listData: {
      type: [Object, Array],
      default: function () {
        return [
          {
            title: '世界因你美好',
            type: '轮播图',
            address: 'http://baidu.com'
          },
          {
            title: '世界因你美丽',
            type: '轮播图',
            address: 'http://baidu.com'
          },
          {
            title: '世界因你温柔',
            type: '轮播图',
            address: 'http://baidu.com'
          }
        ]
      }
    }
  },
  data () {
    return {
      listData_: [],
      draging: null,
      target: null,
      imageUrl: '',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      input: '',
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
      value: ''
    }
  },
  mounted () {
    this.listData_ = [...this.listData]
  },
  methods: {
    onDragStart (event) {
      this.draging = event.target
    },
    onDragOver (event) {
      this.target = event.target
      if (this.target.nodeName === 'LI' && this.target !== this.draging) {
        if (this._index(this.draging) < this._index(this.target)) {
          this.target.parentNode.insertBefore(
            this.draging,
            this.target.nextSibling
          )
        } else {
          this.target.parentNode.insertBefore(this.draging, this.target)
        }
      }
    },
    onDragEnd () {
      const currentNodes = Array.from(this.$refs.parentNode.childNodes)
      currentNodes.map(i => {
        const item = this.listData.find(c => c === i.innerText)
        return item
      })
      this.sortIndex()
    },
    _index (el) {
      const domData = Array.from(this.$refs.parentNode.childNodes)
      return domData.findIndex(i => i.innerText === el.innerText)
    },
    sortIndex () {
      this.listData_ = []
      const nodeLi = this.$refs.parentNode.children
      for (let i = 0; i < nodeLi.length; i++) {
        const nodeIndex = nodeLi[i].getAttribute('data-index')
        this.listData_.push(this.listData[Number(nodeIndex)])
      }

      window.console.log(this.listData_) // 传递数组到父组件
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    del (index) {
      this.listData.splice(index, 1)
    },
    add () {
      const tempItem = {
        title: '',
        type: '',
        address: ''
      }
      this.listData.push(tempItem)
      this.sortIndex()
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.dragList {
  .drag--item {
    display: flex;
    justify-content: flex-start;
    padding: 0.08rem 0.16rem;
    background-color: $bgColor-06;
    border-radius: 0.06rem;
    margin-bottom: 0.12rem;
    position: relative;
    .avatar-uploader {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 1.5rem;
      height: 0.75rem;
      line-height: 0.75rem;
      text-align: center;
    }
    .avatar {
      width: 1.5rem;
      height: 0.75rem;
      display: block;
    }
    .right-edit-pane {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 0.24rem;
      .title-item,
      .setting-item {
        display: flex;
        justify-content: flex-start;
        label {
          vertical-align: middle;
          line-height: 0.34rem;
          margin-right: 0.12rem;
          font-size: $fontSize-12;
        }
        .item-content {
          width: calc(100% - 1rem);
          display: flex;
          justify-content: flex-start;
          .el-select {
            margin-right: 0.12rem;
          }
        }
      }
    }
    .del--icon {
      position: absolute;
      right: 0.16rem;
      top: 50%;
      margin-top: -0.08rem;
      color: $mainTextGray;
    }
  }
}
</style>
