<template>
  <div>
    <router-view />

    <mt-tabbar v-model="tabSelected" fixed>
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
import router from '@/router';

export default {
  data() {
    return {
      //HACK:为什么直接使用data监听$route.path，当路由跳转回'/'时,tabSelected不更新？
      // tabSelected: this.$route.path.split('/').pop(),
      tabSelected: 'index',
    };
  },
  name: 'HomeView',
  components: {
    HelloWorld,
  },

  watch: {
    tabSelected(newValue, oldValue) {
      // console.log('newValue :>> ', newValue);
      let path = `/home/${newValue}`;
      if (this.$route.path == path) return;
      this.$router.push(path);
    },
    $route(to, from) {
      // console.log('to :>> ', to.path);
      this.tabSelected = to.path.split('/').pop();
    },
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

ul,
ol {
  list-style: none;
}

.header > a {
  color: #fff;
}
</style>
