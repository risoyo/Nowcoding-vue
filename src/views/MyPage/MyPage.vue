<template>
  <div class="home">
    <el-container>
      <el-header height="67px">
        <header-main></header-main>
      </el-header>
      <el-main>
        <my-page></my-page>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MyPage from './MyPageMain.vue';
import HeaderMain from '@/components/Common/HeaderMain.vue';

export default {
  name: 'Register',
  components: {
    HeaderMain,
    MyPage
  }
};
</script>

<style scoped lang="scss"></style>
