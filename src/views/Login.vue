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

    <mt-button type="primary" size="large" @click="login">立即登录</mt-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['user']),
  },
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

    login() {
      const url = 'login';
      const params = `username=${this.username}&password=${this.password}`;
      this.axios.post(url, params).then((res) => {
        // console.log(res);
        if (res.data.code == 200) {
          this.$messagebox('提示', '登录成功').then(() => {
            this.$store.commit('updateUser', res.data.result);
            this.$router.push('/');
          });
          // console.log(this.user);
        } else if (res.data.code == 201) {
          this.$toast({
            message: '登录失败，请检查用户名密码是否正确',
            duration: 2000,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  margin-top: 40px;
}
</style>
