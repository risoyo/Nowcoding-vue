<template>
  <div>
    <!-- 注册页页头 -->
    <h1 class="register-header">
      注册
    </h1>
    <el-divider></el-divider>
    <!-- 使用element-ui的表单来实现注册页主体 -->
    <div class="loadingtext">
      <div class="el-form-style">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          status-icon
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name" autocomplete="on"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="on"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="on"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model.number="ruleForm.email"></el-input>
            <el-button :plain="true" @click="handVerifyClick">
              发送验证码
            </el-button>
          </el-form-item>
          <el-form-item label="验证码" prop="verifyCode">
            <el-input v-model.number="ruleForm.verifyCode"></el-input>
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
  </div>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    const checkEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入邮箱'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: '',
        pass: '',
        checkPass: '',
        email: '',
        verifyCode: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        email: [{ validator: checkEmail, trigger: 'blur' }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const vm = this; // 在axios的then方法中this会失效，此处使用vm保存this指针
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 检查form的字段是否符合要求
          const url = '/community/userRegist'; // 指定访问的URL
          this.post(url, this.ruleForm)
            .then(res => {
              console.log('响应res为' + res); // 将响应res打印出来
              vm.$router.push('Login'); // 后台响应为成功时，导航至登陆页面
            })
            .catch(e => {
              // 当POST请求返回了Promise.reject对象时，捕获异常
              console.log('Vue POST error catched :' + e);
            });
        } else {
          this.$message({
            message: '请完善信息',
            type: 'error'
          });
          return false;
        }
      });
    },
    handVerifyClick() {
      console.log('send code to ' + this.ruleForm.email);
      // 指定访问的URL
      const url = '/community/getVerifyCode';
      this.post(url, this.ruleForm).catch(e => {
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

<style lang="scss" scoped>
.register-header {
  text-align: center;
  font-size: 30px;
  color: rgb(48, 214, 214);
}
.el-form-style {
  padding-left: 350px;
  padding-right: 350px;
}
</style>
