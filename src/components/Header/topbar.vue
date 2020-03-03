// 此文件为header的出口文件组成文件之一，负责输出header的内容topbar部分
<template>
  <!-- 此处为element布局中的分栏间隔 -->
  <el-row :gutter="0" class="m-header">
    <el-col :span="9">
      <!-- 在每一列都引入一个真实的组件，需要在Script中import -->
      <user />
      <!-- 使用User这个组件 -->
    </el-col>
    <el-col :span="15">
      <navbar />
    </el-col>
    <!-- <el-col :span="3">
      <user />
    </el-col>-->
  </el-row>
</template>

<script>
import User from './user.vue';
import Navbar from './nav.vue';
// 首先引入组件User
export default {
  components: {
    User,
    Navbar
  }
};
</script>

<style lang="scss">
@import '@/assets/css/public/layout.scss';
@import '@/assets/css/public/header/index.scss';
</style>
