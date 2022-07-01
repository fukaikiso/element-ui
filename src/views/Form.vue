<template>
  <div>
    <el-form :model="form" ref="form" :rules="rules">
      <el-form-item prop="name" label="用户名" label-width="100px" class="tag">
        <el-input v-model="form.name" placeholder="请输入用户名" clearable></el-input>
      </el-form-item>
      <el-form-item prop="pwd" label="密码" label-width="100px" class="tag">
        <el-input v-model="form.pwd" placeholder="请输入密码" show-password clearable></el-input>
      </el-form-item>
      <el-form-item prop="pwd2" label="重复密码" label-width="100px" class="tag">
        <el-input v-model="form.pwd2" placeholder="请重新输入密码" show-password clearable></el-input>
      </el-form-item>
      <el-form-item prop="phone" label="手机号" label-width="100px" class="tag">
        <el-input v-model="form.phone" placeholder="请输入手机号" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">快速注册</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePwd2 = (rule, value, callback) => {
      if (value !== this.form.pwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: '',
        pwd: '',
        pwd2: '',
        phone: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' },
        ],
        pwd2: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePwd2, trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确格式的手机号', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      const { name, pwd, phone } = this.form;
      console.log(`表单数据:`, name, pwd, phone);
      this.$refs['form'].validate(valid => {
        if (valid) {
          alert('提交成功');
        } else {
          alert('提交失败');
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
/* .tag {
  text-align: justify;
  text-align-last: justify;
} */
</style>
