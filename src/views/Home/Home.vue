<template>
  <div id="app">
    <el-container>
      <el-header height="67px">
        <header-main></header-main>
      </el-header>
      <el-container>
        <div class="MainContainer">
          <el-col :span="5">
            <home-aside></home-aside>
          </el-col>
          <el-col :span="8">
            <el-main>
              <home-main></home-main>
            </el-main>
          </el-col>
        </div>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMain from './HomeMain.vue';
import HomeAside from './HomeAside.vue';
import HeaderMain from '@/components/Header/HeaderIndex.vue';

export default {
  name: 'App',
  components: {
    HeaderMain,
    HomeMain,
    HomeAside
  }
};
</script>

<style lang="scss">
.MainContainer {
  width: 1190px;
  margin-left: 395px;
  margin-right: 395px;
}
</style>
