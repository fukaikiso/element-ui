<template>
  <div>
    <!-- views/Components.vue -->
    <el-container>
      <el-header style="background: #444">
        <el-menu mode="horizontal" default-active="2" background-color="#444" text-color="#bbb" active-text-color="#fff">
          <el-menu-item index="1">指南</el-menu-item>
          <el-menu-item index="2">组件</el-menu-item>
          <el-menu-item index="3">主题</el-menu-item>
          <el-menu-item index="4">资源</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu class="aside-menu" :default-active="$route.path" background-color="#444" text-color="#bbb" active-text-color="#fff" router>
            <el-menu-item index="/components/container">
              <i class="el-icon-menu"></i>
              Container容器
            </el-menu-item>
            <el-menu-item index="/components/form">
              <i class="el-icon-menu"></i>
              Form表单
            </el-menu-item>
            <el-menu-item index="/components/table">
              <i class="el-icon-menu"></i>
              table表格
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.aside-menu {
  height: calc(100vh - 60px);
}
::-webkit-scrollbar {
  width: 8px;
  height: 100%;
}
::-webkit-scrollbar-button {
  display: none;
}
::-webkit-scrollbar-thumb {
  background-color: #dedee0;
  border-radius: 4px;
}

.main {
  height: calc(100vh - 60px);
}
</style>
