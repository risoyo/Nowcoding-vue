<template>
  <div>
    <!-- 登录页页头 -->
    <h1 class="register-header">
      登录
    </h1>
    <el-divider></el-divider>
    <!-- 使用element-ui的表单来实现登录页主体 -->
    <div class="register-form">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        status-icon
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            v-model="ruleForm.pass"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm('ruleForm')" type="primary">
            提交
          </el-button>
          <el-button @click="resetForm('ruleForm')">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
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
  methods: {
    submitForm(formName) {
      const vm = this; // 在axios的then方法中this会失效，此处使用vm保存this指针
      console.log('form is:' + JSON.stringify(this.ruleForm));
      // 指定访问的URL
      const url = '/community/Login';
      this.post(url, this.ruleForm)
        .then(function(res) {
          console.log(res);
          // 将响应res打印出来
          console.log('token为' + res.data.token);
          const expireMinutes = 30; // 设置cookie过期时间为30分钟，与后台token过期时间一致
          console.log('expireDays' + expireMinutes);
          vm.setCookie('token', res.data.token, expireMinutes); // 存token到cookie
          vm.setCookie('headerURL', res.data.headerURL, expireMinutes); // 存headerURL到cookie
          vm.$router.push('/'); // 后台响应为成功时，导航至主页
        })
        .catch(e => {
          // 当POST请求返回了Promise.reject对象时，捕获异常
          console.log('Vue POST error catched :' + e);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
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
