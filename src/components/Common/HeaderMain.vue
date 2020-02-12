<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      @select="handleSelect"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="home">
        首页
      </el-menu-item>
      <el-submenu index="2" disabled>
        <template slot="title">
          消息
        </template>
        <el-menu-item index="2-1">
          最热1
        </el-menu-item>
        <el-menu-item index="2-2">
          最热2
        </el-menu-item>
        <el-menu-item index="2-3">
          最热3
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
      <el-menu-item index="Register">
        注册
      </el-menu-item>
      <el-menu-item index="Login">
        登陆
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// @ is an alias to /src
// import RegisterMain from "@/components/Register/RegisterMain.vue";

export default {
  name: 'HeaderMain',
  components: {
    // RegisterMain
  },
  data() {
    return {
      // 声明使用的数组
      activeIndex: '1',
      infos: []
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key === 'Register') {
        console.log('Register');
        this.$router.push('Register');
      } else if (key === 'home') {
        console.log('home');
        this.$router.push('/');
      } else if (key === 'Login') {
        console.log('home');
        this.$router.push('Login');
      }
    }
  }
};
</script>
