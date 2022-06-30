<template>
  <div>
    <el-container>
      <el-header>
        <el-menu mode="horizontal" default-active="1">
          <el-menu-item index="1">蓝色</el-menu-item>
          <el-menu-item index="2">红色</el-menu-item>
          <el-menu-item index="3">黄色</el-menu-item>
          <el-menu-item index="4">黑色</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu default-active="1" class="menu">
            <el-menu-item index="1">指南</el-menu-item>
            <el-menu-item index="2">组件</el-menu-item>
            <el-submenu index="3">
              <template slot="title">主题</template>
              <el-menu-item index="3-1">炫酷黑</el-menu-item>
              <el-menu-item index="3-2">中国红</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">资源</el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>main</el-main>
          <el-footer>copyright@2022 element</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
