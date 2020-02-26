<template>
  <div>
    <!-- 登录页页头 -->
    <h1 class="register-header">
      登录
    </h1>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
    };
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }]
      }
    };
  },
  created() {
    this.get('/community/alpha/testRequireToken')
      .then(resp => {
        // 将resp中的data数据存入infos
        console.log('resp' + JSON.stringify(resp));
      })
      .catch(e => {
        // 当POST请求返回了Promise.reject对象时，捕获异常
        console.log('Vue GET error catched :' + e);
      });
  }
};
</script>

<style lang="scss">
.register-header {
  text-align: center;
  font-size: 30px;
  color: rgb(48, 214, 214);
}
.register-form {
  padding-left: 350px;
  padding-right: 350px;
}
</style>
