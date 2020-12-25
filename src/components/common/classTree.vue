<template>
  <div class="classTree">
    <el-tree :data="classTree" :props="defaultProps" :default-expanded-keys="defaultExpanded" accordion @node-click="handleNodeClick">
      <span class="custom-tree-node" slot-scope="{ node , data}">
        <span>{{ node.label }}</span>
        <span v-if="data.id == '0'? false: true">
          <el-button type="text" class="iconfont icontool"></el-button>
          <!-- 新增按钮  -->
          <el-button type="text" class="iconfont iconid" v-if="data.id == 1"></el-button>
          <!-- 刷新按钮  -->
          <el-button
            type="text"
            class="iconfont iconpen"
            v-if="data.id != 1"
            @click.stop="editNode(node)"
          ></el-button>
          <!-- 编辑按钮  -->
          <el-button
            type="text"
            class="iconfont iconremove"
            v-if="data.id != 1"
            @click.stop="delNode(node,data)"
          ></el-button>
          <!-- 删除按钮  -->
        </span>
      </span>
    </el-tree>
    <el-dialog  :modal-append-to-body="true" :append-to-body="true" title="提示" :visible.sync="delDialogVisible" width="30%">
      <span>您确定要删除当前节点吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confrimDel">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog  :modal-append-to-body="true" :append-to-body="true" class="hideHead" title="提示" :visible.sync="editDialogVisible" width="380px">
      <pane-head :title="'修改分类'" class="dialog_head">
        <div slot="tool" class="tool-term">
          <i class="iconfont iconshut_down" @click="close"></i>
        </div>
      </pane-head>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="阶段" style="width: 100%;">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学科" style="width: 100%;">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="分类名称" prop="name" style="width: 100%;">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" style="width: 100%;">
          <text-area></text-area>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary">保 存</el-button>
        <el-button type="info" @click="editDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import textArea from '@/components/common/textArea'
export default {
  name: 'classTree',
  components: {
    textArea
  },
  props: {
    classTree: {
      type: [Object, Array],
      default: function () {
        return [
          {
            label: '命题猜想分类',
            id: 1,
            children: [
              {
                label: '初中阶段',
                id: 2,
                children: [
                  {
                    label: '语文',
                    id: '1-1-1',
                    children: [
                      {
                        label: '30天冲刺卷',
                        id: '1-1-1-1'
                      },
                      {
                        label: '40天冲刺卷',
                        id: '1-1-1-2'
                      }
                    ]
                  },
                  {
                    label: '数学',
                    children: [
                      {
                        label: '30天冲刺卷',
                        id: '1-1-1-3'
                      },
                      {
                        label: '40天冲刺卷',
                        id: '1-1-1-4'
                      }
                    ]
                  },
                  {
                    label: '英语',
                    id: '1-1-2',
                    children: [
                      {
                        label: '30天冲刺卷',
                        id: '1-1-2-5'
                      },
                      {
                        label: '40天冲刺卷',
                        id: '1-1-2-6'
                      }
                    ]
                  }
                ]
              },
              {
                label: '高中阶段',
                id: '1-2',
                children: [
                  {
                    label: '语文',
                    id: '1-2-1',
                    children: [
                      {
                        label: '30天冲刺卷',
                        id: '1-2-1-1'
                      },
                      {
                        label: '40天冲刺卷',
                        id: '1-2-1-1'
                      }
                    ]
                  },
                  {
                    label: '数学',
                    id: '1-2-2',
                    children: [
                      {
                        label: '30天冲刺卷',
                        id: '1-2-2-1'
                      },
                      {
                        label: '40天冲刺卷',
                        id: '1-2-2-2'
                      }
                    ]
                  },
                  {
                    label: '英语',
                    id: '1-2-3',
                    children: [
                      {
                        label: '30天冲刺卷',
                        id: '1-2-3-1'
                      },
                      {
                        label: '40天冲刺卷',
                        id: '1-2-3-2'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  data () {
    return {
      delDialogVisible: false,
      editDialogVisible: false,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      defaultExpanded: [],
      tempNode: {},
      tempData: {},
      ruleForm: {
        name: '',
        value: '选项3',
        desc: ''
      },

      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 0, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur' }
        ],
        region: [
          { required: false, message: '请选择活动区域', trigger: 'change' }
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
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      window.console.log(data)
    },
    delNode (node, data) {
      this.tempNode = node
      this.tempData = data
      this.delDialogVisible = true
    },
    confrimDel () {
      this.$emit('delNode', this.tempNode, this.tempData)
      this.delDialogVisible = false
    },
    editNode (data) {
      this.editDialogVisible = true
    },
    close () {
      this.editDialogVisible = false
    }
  },
  mounted () {
    this.defaultExpanded = ['1', '2']
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.classTree {
  width: 100%;
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    font-size: 0.12rem;
    color: $mainText;
  }
  .el-tree-node {
    .el-tree-node__content {
      height: 40px;
      &:before {
        content: '';
        display: inline-block;
        width: 0.16rem;
        height: 0.16rem;
      }
      .custom-tree-node {
        margin-left: 0.06rem;
      }
      .el-button--text {
        color: $mainText;
      }
    }
    .el-tree-node__expand-icon {
      padding: 0;
      &::before {
        content: "";
        display: inline-block;
        width: 0.18rem;
        height: 0.18rem;
        background-image: url("../../assets/images/arrow-bottom.png");
        background-size: cover;
        vertical-align: -webkit-baseline-middle;
      }
      &.is-leaf {
        margin-right: 14px;
        &::before {
          content: "";
          display: inline;
        }
      }
    }
  }
  .el-form {
    .el-form-item {
      padding: 0;
    }
  }
}
</style>
