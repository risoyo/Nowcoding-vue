<template>
  <div id="app">
    <el-container>
      <el-header height="67px">
        <header-main></header-main>
      </el-header>
      <el-main>
        <home-main></home-main>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMain from './HomeMain.vue';
import HeaderMain from '@/components/Header/HeaderMain.vue';

export default {
  name: 'App',
  components: {
    HeaderMain,
    HomeMain
  }
};
</script>

<style scoped lang="scss"></style>
