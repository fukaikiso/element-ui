<template>
  <div>
    <mt-header title="我的主页">
      <div slot="right" class="header">
        <router-link to="/login">登录</router-link> |
        <router-link to="/register">注册</router-link>
      </div>
    </mt-header>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">UI</mt-tab-item>
      <mt-tab-item id="2">电商</mt-tab-item>
      <mt-tab-item id="3">网页</mt-tab-item>
      <mt-tab-item id="4">交互</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :key="n" :title="'UI ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :key="n" :title="'电商 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :key="n" :title="'网页' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell v-for="n in 6" :key="n" :title="'交互 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="tabSelected">
      <!-- <mt-tab-item id="index"> <img slot="icon" :src="require(`../assets/tabbar/index_${tabSelected == 'index' ? 1 : 0}.png`)" /> 首页 </mt-tab-item> -->
      <mt-tab-item id="index">
        <img slot="icon" v-show="tabSelected == 'index'" src="../assets/tabbar/index_1.png" />
        <img slot="icon" v-show="tabSelected != 'index'" src="../assets/tabbar/index_0.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="me">
        <img slot="icon" v-show="tabSelected == 'me'" src="../assets/tabbar/me_1.png" />
        <img slot="icon" v-show="tabSelected != 'me'" src="../assets/tabbar/me_0.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  data() {
    return {
      selected: '1',
      tabSelected: 'index',
    };
  },
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
</style>

<style scoped>
.header > a {
  color: #fff;
}
</style>
