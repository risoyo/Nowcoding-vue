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

<style lang="scss">
@import '@/assets/css/public/layout.scss';
@import '@/assets/css/public/header/index.scss';
body {
  width: 100%;
  overflow-x: hidden;
}
#main_content {
  // background: url(@/assets/picture/line.png) repeat-x left top #f8f8f8;
  padding-top: 20px;
  padding-bottom: 30px;
}
</style>
