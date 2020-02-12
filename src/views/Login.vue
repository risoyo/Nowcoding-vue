<template>
  <div class="home">
    <el-container>
      <el-header height="67px">
        <header-main></header-main>
      </el-header>
      <el-main>
        <login-main></login-main>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginMain from '@/components/Login/LoginMain.vue';
import HeaderMain from '@/components/Common/HeaderMain.vue';

export default {
  name: 'Register',
  components: {
    HeaderMain,
    LoginMain
  }
};
</script>

<style scoped lang="scss"></style>
