<template>
  <div class="classificationBar">
    <el-menu
      :default-active="activeIndex"
      @select="handleSelect"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1">
        处理中心
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          我的工作台
        </template>
        <el-menu-item index="2-1">
          选项1
        </el-menu-item>
        <el-menu-item index="2-2">
          选项2
        </el-menu-item>
        <el-menu-item index="2-3">
          选项3
        </el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">
            选项4
          </template>
          <el-menu-item index="2-4-1">
            选项1
          </el-menu-item>
          <el-menu-item index="2-4-2">
            选项2
          </el-menu-item>
          <el-menu-item index="2-4-3">
            选项3
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>
        消息中心
      </el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
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
.classificationBar {
  padding-left: 40%;
}
</style>
