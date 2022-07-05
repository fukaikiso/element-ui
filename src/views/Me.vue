<template>
  <div>
    <mt-header title="我的">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <div v-if="!user" slot="right" class="header">
        <router-link to="/login">登录</router-link> |
        <router-link to="/register">注册</router-link>
      </div>
    </mt-header>

    <ul v-if="!user">
      请登录
    </ul>
    <ul v-else class="info">
      <li><img :src="`/resource/avatar/${user.avatar}`" alt="" /></li>
      <li>id:{{ user.id }}</li>
      <li>用户名：{{ user.username }}</li>
      <li>昵称：{{ user.nickname ? user.nickname : '未设置' }}</li>
    </ul>

    <mt-button v-if="user" type="danger" size="large" @click="quit">立即退出</mt-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['user']),
  },
  methods: {
    quit() {
      this.$store.commit('updateUser', null);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  img {
    display: block;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    border: 3px solid #aaa;
    margin: 20px auto;
  }
  li + li {
    margin-bottom: 20px;
    margin-left: 40px;
  }
}
</style>
