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

    <!-- NOTE:无限滚动 -->
    <div v-infinite-scroll="loadMore" infinite-scroll-distance="60" infinite-scroll-immediate-check="true">
      <article-item :article="a" v-for="a in articleList" :key="a.id" @click.native="$router.push(`/article?id=${a.id}`)"> </article-item>
      <div style="margin-bottom: 60px"></div>
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
      page: 1,
      category: null,
      articleList: [], // 绑定文章列表
      isLoading: false,
    };
  },

  computed: {
    ...mapState(['database', 'user']),
  },
  methods: {
    getCategory() {
      // const url = this.database + 'category';
      const url = 'category';
      this.axios.get(url).then((res) => {
        // console.log(res);
        this.category = res.data.results;
        // console.log(this.category);
      });
    },
    loadArticles(cid, page, callback) {
      this.$indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle',
      });
      const url = `/articles?cid=${cid}&page=${page}`;
      this.axios.get(url).then((res) => {
        let articles = res.data.results; //接收查询结果数组
        callback(articles); //调用callback方法，执行后续业务
        this.$indicator.close();
      });
    },
    loadMore() {
      //如果正在加载，则终止目前触发的加载
      if (this.isLoading) return;
      //设置正在加载
      this.isLoading = true;
      // console.log('到底了....');
      // 准备参数，发送http请求
      let cid = this.selected; // 当前选中项的类别ID
      let page = ++this.page; // 目标页码
      // console.log(`加载类别：${cid}  的第 ${page} 页数据.`);
      // this.axios.get(`/articles?cid=${cid}&page=${page}`).then((res) => {
      //   // console.log('下一页数据', res);
      //   this.articleList.push(...res.data.results);
      //   //请求结束后，解锁
      //   this.isLoading = false;
      // });
      this.loadArticles(cid, page, (articles) => {
        this.articleList.push(...articles);
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.getCategory();

    // // 发送http请求，加载UI类别下首页文章列表
    // this.axios.get(`/articles?cid=1&page=1`).then((res) => {
    //   // console.log('加载UI类别首页文章列表', res);
    //   // 将res.data.results 数组存入 data的articleList变量中
    //   this.articleList = res.data.results;
    // });

    this.loadArticles(1, 1, (articles) => {
      this.articleList = articles;
    });
  },

  watch: {
    selected(newval, oldval) {
      this.page = 1;
      //回到顶部
      window.scrollTo(0, 0);

      // // 监听顶部导航选中项的变化
      // // console.log(`顶部导航选中项从：${oldval} 变成了${newval}`);
      // // newval就是选中项的id值   发送http请求，访问当前类别的首页
      // this.axios.get(`/articles?cid=${newval}&page=1`).then((res) => {
      //   // console.log('当前选中类别的首页数据：', res);
      //   // 替换当前列表
      //   this.articleList = res.data.results;
      // });

      this.loadArticles(newval, 1, (articles) => {
        this.articleList = articles;
      });
    },
  },
  activated() {
    // console.log('激活');
    //禁用无线滚动
    this.isLoading = false;
  },
  deactivated() {
    // console.log('页面保活');
    //启用无线滚动
    this.isLoading = true;
  },
};
</script>

<style lang="scss" scoped></style>
