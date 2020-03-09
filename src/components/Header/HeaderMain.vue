<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="home">
            <el-image
              :src="require('@/assets/logo.png')"
              class="logoImage"
              fit="fill"
            ></el-image>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-purple">
          <el-menu
            :default-active="activeIndex"
            @select="handleSelect"
            class="el-menu-demo"
            mode="horizontal"
          >
            <el-menu-item index="home">
              首页
            </el-menu-item>
            <el-menu-item index="test">
              培训系统
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                论坛
              </template>
              <el-menu-item index="2-1">
                最新内容
              </el-menu-item>
              <el-menu-item index="2-2">
                近期热门
              </el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">
                  分类
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

            <el-menu-item index="test">
              研发过程管控
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="home">
            <div class="searchInput">
              <el-input
                v-model="input"
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
              ></el-input>
            </div>
          </el-menu-item>
        </el-menu>
      </el-col>
      <!-- <el-col :span="4">
        <div class="elMenuStyle">
          <div class="searchInput">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="elMenuStyle">
          <div class="searchButton">
            <el-button icon="el-icon-search"></el-button>
          </div>
        </div>
      </el-col> -->
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-menu
            :default-active="activeIndex"
            @select="handleSelect"
            class="el-menu-demo"
            mode="horizontal"
          >
            <el-menu-item v-if="getLoginStatus" index="Register">
              注册
            </el-menu-item>
            <el-menu-item v-if="getLoginStatus" index="Login">
              登陆
            </el-menu-item>
            <el-submenu v-else index="My">
              <template slot="title">
                <el-avatar :src="getHeaderURL" size="large"></el-avatar>
              </template>
              <el-menu-item index="MyPage">
                我的主页
              </el-menu-item>
              <el-menu-item index="Exit">
                退出登录
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
          </el-menu>
        </div>
      </el-col>
    </el-row>
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
      activeIndex: '1'
    };
  },
  computed: {
    getHeaderURL() {
      const headerURL = decodeURIComponent(this.getCookie('headerURL')); // 加入decodeURIComponent，否则传回来的URL会变为http%3A//localhost%3A8080/
      return headerURL;
    },
    getLoginStatus() {
      const tokenExist = this.getCookie('token'); // 获取Cookie,当获取不到时tokenExist为null
      // const headerURL = this.getCookie('headerURL');
      if (!tokenExist) {
        // catch: tokenExist != null
        // 若token存在，表明已登陆，显示“我的”
        return true;
      } else {
        // catch: tokenExist = null
        // 若token不存在，表明未登录，显示“注册”与“登陆”
        return false;
      }
    }
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
      } else if (key === 'MyPage') {
        console.log('MyPage');
        this.$router.push('MyPage');
      } else if (key === 'Exit') {
        console.log('Exit');
        this.delCookie('token'); // 将cookie中失效的token清除
        this.$router.push('Login');
      } else if (key === 'test') {
        console.log('Extestit');
        this.$router.push('TestPage');
      }
    }
  }
};
</script>

<style lang="scss">
.logoImage {
  padding-top: 10px;
  padding-left: 20px;
}
.elMenuStyle {
  background-color: rgb(255, 255, 255);
  border-bottom: solid 1px #e6e6e6;
  height: 60px;

  .searchInput {
    padding-top: 10px;
  }
  .searchButton {
    padding-top: 10px;
  }
}
</style>
