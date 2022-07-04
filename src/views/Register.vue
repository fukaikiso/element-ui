<template>
  <div>
    <mt-header fixed title="用户注册">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" @click="toLogin">登录</mt-button>
    </mt-header>

    <div class="input">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username" @input="checkName" :state="usernameSate"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" @input="checkPassword" :state="passwordSate"></mt-field>
      <mt-field label="确认密码" placeholder="请确认密码" type="password" v-model="password2" @input="checkPassword2" :state="password2Sate"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" @input="checkPhone" :state="phoneSate"></mt-field>
    </div>

    <mt-button type="primary" size="large" @click="checkLogin">立即注册</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      phone: '',
      usernameSate: '',
      passwordSate: '',
      password2Sate: '',
      phoneSate: '',
    };
  },
  methods: {
    toLogin() {
      this.$router.push('/login');
    },
    checkName() {
      const exp = /^\w{3,15}$/;
      if (exp.test(this.username)) {
        // console.log('success');
        this.usernameSate = 'success';
        return true;
      } else {
        // console.log('error');
        this.usernameSate = 'error';
        Toast({
          message: '用户名为3~15位数字或字母组合',
          duration: 2000,
        });
        return false;
      }
    },
    checkPassword() {
      const exp = /^\w{6,15}$/;
      if (exp.test(this.password)) {
        // console.log('success');
        this.passwordSate = 'success';
        return true;
      } else {
        // console.log('error');
        this.passwordSate = 'error';
        Toast({
          message: '密码为6~15位数字或字母组合',
          duration: 2000,
        });
        return false;
      }
    },
    checkPassword2() {
      const exp = /^\w{6,15}$/;
      if (this.password2 == this.password && exp.test(this.password2)) {
        this.password2Sate = 'success';
        return true;
      } else {
        this.password2Sate = 'error';
        Toast({
          message: '密码不匹配',
          duration: 2000,
        });
        return false;
      }
    },
    checkPhone() {
      const exp = /^1[3-9]\d{9}$/;
      if (exp.test(this.phone)) {
        this.phoneSate = 'success';
        return true;
      } else {
        this.phoneSate = 'error';
        Toast({
          message: '手机号码格式不正确',
          duration: 2000,
        });
        return false;
      }
    },
    checkLogin() {
      if (this.checkName() && this.checkPassword() && this.checkPassword2() && this.checkPhone()) {
        // console.log('验证成功');
        Toast({
          message: '注册成功',
          duration: 2000,
        });
        setTimeout(() => {
          this.$router.push('/login');
        }, 1000);
        return true;
      } else {
        // console.log('验证失败');
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  margin-top: 40px;
}
</style>
