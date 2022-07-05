<template>
  <div>
    <mt-header title="主页" fixed>
      <div v-if="user" class="header" slot="right">欢迎 {{ user.username }}</div>
      <div v-else slot="right" class="header">
        <router-link to="/login">登录</router-link> |
        <router-link to="/register">注册</router-link>
      </div>
    </mt-header>

    <mt-navbar v-model="selected" style="margin-top: 40px" fixed v-if="category">
      <mt-tab-item v-for="c in category" :key="c.id" :id="c.id">{{ c.category_name }}</mt-tab-item>
    </mt-navbar>

    <mt-swipe :auto="4000" style="height: 56.2vw; margin-top: 80px">
      <mt-swipe-item>
        <img style="width: 100vw" src="/img/1.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img style="width: 100vw" src="/img/2.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img style="width: 100vw" src="/img/3.jpg" alt="" />
      </mt-swipe-item>
    </mt-swipe>

    <div style="margin-bottom: 60px">
      <article-item :category_id="selected"></article-item>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue';
import { mapState } from 'vuex';
export default {
  components: { ArticleItem },
  data() {
    return {
      selected: 1,
      category: null,
    };
  },

  computed: {
    ...mapState(['database', 'user']),
  },
  methods: {
    getCategory() {
      // const url = this.database + 'category';
      const url = 'category';
      this.axios.get(url).then(res => {
        // console.log(res);
        this.category = res.data.results;
        // console.log(this.category);
      });
    },
  },
  mounted() {
    this.getCategory();
  },
};
</script>

<style lang="scss" scoped></style>
