<template>
  <div class="learningPlanEdit">
    <pane-head :title="'编辑学习计划'" :borderBottom="true"></pane-head>
    <div class="pane-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="common-form"
      >
        <el-form-item label="活动名称" prop="name" class="limit-word">
          <el-input v-model="ruleForm.name" maxlength="8"></el-input>
          <span>{{ruleForm.name.length}}/8</span>
        </el-form-item>
        <el-form-item label="课程分类" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div class="table-data">
        <el-table :data="tableData" stripe width="100%">
          <el-table-column prop="title" width="110px" label="课程模块标题"></el-table-column>
          <el-table-column prop="title2" width="110px" label="课程标题"></el-table-column>
          <el-table-column prop="xke" width="60px" label="学科"></el-table-column>
          <el-table-column prop="jhxxsjian" width="280px" label="计划学习时间">
            <template slot-scope="scope">
              <el-date-picker
                v-model="scope.row.jhxxsjian"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </template>
          </el-table-column>
          <el-table-column prop="xxjdu" width="80px" align="center" label="学习进度"></el-table-column>
          <el-table-column prop="xxztai" width="80px" align="center" label="学习状态"></el-table-column>
          <el-table-column prop="sfylxi" width="100px" label="是否已练习">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.sfylxi"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="bzhu" label="备注">
            <template slot-scope="scope">
              <div class="limit-word">
                <el-input v-model="scope.row.bzhu" maxlength="50"></el-input>
                <span>{{scope.row.bzhu.length}}/50</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-row class="common-condition clearPadding">
          <el-col :span="4" class="condition">
            <el-button type="primary">保存</el-button>
            <el-button type="info">取消</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'learningPlanEdit',
  data () {
    return {
      ruleForm: {
        name: '',
        value: '选项3',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 0, max: 50, message: '长度在 0 到 8 个字符', trigger: 'blur' }
        ]
      },
      tableData: [
        {
          title: '几何解题技巧',
          title2: '几何解题技巧',
          xke: '数学',
          jhxxsjian: '',
          xxjdu: '0%',
          xxztai: '0%',
          sfylxi: 1,
          bzhu: ''
        },
        {
          title: '几何解题技巧',
          title2: '几何解题技巧',
          xke: '数学',
          jhxxsjian: '',
          xxjdu: '0%',
          xxztai: '0%',
          sfylxi: 1,
          bzhu: ''
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.learningPlanEdit {
  @include pane_boxShadow;
  .pane-content {
    .table-data {
      padding: 0.24rem 0 0;
    }
  }
  .el-date-editor {
    width: 100%;
    height: 0.32rem;
    line-height: 0.32rem;
    font-size: $fontSize-12;
    /deep/.el-input__icon {
      line-height: 0.24rem;
    }
    .el-range-input,
    .el-range-separator {
      font-size: $fontSize-12;
      line-height: 0.24rem;
    }
    .el-range-separator {
      color: $mainTextGray;
    }
    .el-input__suffix {
      right: 30px;
      .el-input__suffix-inner {
        position: relative;
        .el-input__icon {
          position: absolute;
          &::before {
            background-color: #fff;
          }
        }
      }
    }
  }
  .limit-word {
    position: relative;
    .el-input__inner {
      padding-right: 0.35rem;
    }
    > span {
      font-size: $fontSize-12;
      position: absolute;
      right: 0.1rem;
      top: 0;
      line-height: 2.9;
      color: $mainTextGray;
    }
  }
}
</style>
