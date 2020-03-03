<template>
  <div>
    <el-container class="layout-default">
      <el-header height="167px">
        <header-main></header-main>
      </el-header>
      <div id="main_content">
        <el-main>
          <el-button @click="click1">
            清除cookie
          </el-button>
          <el-button @click="click2">
            获取cookie
          </el-button>
          <el-button @click="click3">
            testRequireToken
          </el-button>
        </el-main>
      </div>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderMain from './index.vue';
export default {
  components: {
    HeaderMain
  },
  data() {
    return {};
  },
  methods: {
    click1() {
      this.delCookie('token');
    },
    click2() {
      const token = this.getCookie('token'); // 获取Cookie
      console.log(token);
    },
    click3() {
      this.get('/community/alpha/testRequireToken')
        .then(resp => {
          console.log('resp' + JSON.stringify(resp));
        })
        .catch(e => {
          console.log('Vue GET error catched :' + e);
        });
    }
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
  background: url(../../assets/picture/line.png) repeat-x left top #f8f8f8;
  padding-top: 20px;
  padding-bottom: 30px;
}
</style>
