<template>
  <div>
    <el-button @click="click1">
      清除cookie
    </el-button>
    <el-button @click="click2">
      获取cookie
    </el-button>
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
    }
  }
};
</script>

<style lang="scss"></style>
