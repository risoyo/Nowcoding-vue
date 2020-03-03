<template>
  <div class="m-geo">
    <template v-if="getterUserInfo">
      欢迎，
      <span class="userName">{{ getterUserInfo.user }}</span>
      <el-link :underline="false" class="exitLogin" href="/login">
        退出登录
      </el-link>
    </template>
    <template v-else>
      <el-link :underline="false" href="/login" class="login">
        登录
      </el-link>
    </template>
  </div>
</template>

<script>
// 此文件是header的组成文件之一topbar的组成组件-用户登陆
export default {
  data() {
    return {
      // user: "学员1"
    };
  },
  computed: {
    // 通过计算属性，获得当前用户的待办事项和用户信息，获取的值为vuex的Store.js中state的值
    getterUserInfo() {
      return this.$store.getters.getterUserInfo;
    }
  }
};
</script>

<style lang="scss"></style>
