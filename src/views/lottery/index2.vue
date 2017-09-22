<template>
  <div class="app-container">
    <el-form :model="addForm" ref="addForm" label-width="100px">
      <el-form-item label="期数">
        <el-input type="text" v-model="addForm.qihao" auto-complete="off" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="第一球">
        <el-input type="text" v-model="addForm.num1" auto-complete="off" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="第二球">
        <el-input type="text" v-model="addForm.num2" auto-complete="off" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="第三球">
        <el-input type="text" v-model="addForm.num3" auto-complete="off" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="第四球">
        <el-input type="text" v-model="addForm.num4" auto-complete="off" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="第五球">
        <el-input type="text" v-model="addForm.num5" auto-complete="off" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addForm')">提交</el-button>
        <el-button @click="resetForm('addForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      addForm: {
        qihao: '',
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: ''
      }
    };
  },
  created() {
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName){}
  }
}
</script>
