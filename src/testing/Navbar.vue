<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1"><img src="/img/001.png" alt="" slot="icon" />推荐</mt-tab-item>
      <mt-tab-item id="2"><img src="/img/004.png" alt="" slot="icon" />科技</mt-tab-item>
      <mt-tab-item id="3"><img src="@/assets/007.png" alt="" slot="icon" />数码</mt-tab-item>
      <mt-tab-item id="4"><img src="../assets/025.png" alt="" slot="icon" />军事</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :key="n" :title="'推荐 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :key="n" :title="'科技 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :key="n" :title="'数码 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell v-for="n in 6" :key="n" :title="'军事 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '1',
    };
  },
};
</script>

<style lang="scss" scoped></style>
