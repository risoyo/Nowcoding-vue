<template>
  <div class="home">
    <el-container>
      <el-header height="67px">
        <header-main></header-main>
      </el-header>
      <el-main>
        <register-main></register-main>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterMain from '@/components/Register/RegisterMain.vue';
import HeaderMain from '@/components/Common/HeaderMain.vue';

export default {
  name: 'Register',
  components: {
    HeaderMain,
    RegisterMain
  }
};
</script>

<style scoped lang="scss"></style>
