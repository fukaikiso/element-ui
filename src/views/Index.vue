<template>
  <div>
    <el-container>
      <el-header>
        <el-menu mode="horizontal" default-active="1">
          <el-menu-item index="1">指南</el-menu-item>
          <el-menu-item index="2">组件</el-menu-item>
          <el-menu-item index="3">主题</el-menu-item>
          <el-menu-item index="4">资源</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu default-active="1" class="menu">
            <el-menu-item index="1">Container容器</el-menu-item>
            <el-menu-item index="2">Form表单</el-menu-item>
            <el-menu-item index="3">Table表格</el-menu-item>
            <el-menu-item index="4">Button按钮</el-menu-item>
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
