<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="彩种">
        <el-select v-model="form.region" placeholder="彩种">
          <el-option label="快乐十分" value="0"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="状态">
        <el-radio-group v-model="form.resource">
          <el-radio label="0">开通</el-radio>
          <el-radio label="1">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">修改设置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        region: '0',
        resource: '0'
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    }
  }
}
</script>
