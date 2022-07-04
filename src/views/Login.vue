<template>
  <div>
    <mt-header fixed title="用户登录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" @click="toRegister">注册</mt-button>
    </mt-header>

    <div class="input">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </div>

    <mt-button type="primary" size="large" @click="toLogin">立即登录</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    toRegister() {
      this.$router.push('/register');
    },
    toLogin() {
      if (this.username == 'aaa' && this.password == 'aaa111') {
        console.log('登录成功');
        this.$router.push('/');
      } else {
        console.log('登录失败');
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
