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
      tabSelected: this.$route.path.split('/').pop(),
    };
  },
  name: 'HomeView',
  components: {
    HelloWorld,
  },

  activated() {
    this.tabSelected = this.$route.path.split('/').pop();
  },

  watch: {
    tabSelected(newval, oldval) {
      // console.log(`tabSelected从 ${oldval} 变成了 ${newval} `);
      //防止路由重复跳转
      if (newval == this.$route.path.split('/').pop()) return;
      this.$router.push(`/home/${newval}`);
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
