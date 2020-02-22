<template>
  <div>
    <!-- 注册页页头 -->
    <h1 class="register-header">
      注册
    </h1>
    <el-divider></el-divider>
    <!-- 使用element-ui的表单来实现注册页主体 -->
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
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
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
          console.log('form is:' + JSON.stringify(this.ruleForm));
          // 指定访问的URL
          const url = '/community/userRegist';
          this.$axios({
            // 指定POST方法
            method: 'POST',
            // 指定数据格式
            dataType: 'json',
            // 指定访问的URL
            url: url,
            // 指定header
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            },
            // 将data中的form存入axios.POST请求的数据节点中
            data: JSON.stringify(this.ruleForm)
            // then->接收返回响应
          })
            .then(function(res) {
              console.log(res);
              // 将响应res打印出来
              console.log(JSON.stringify(res.data.resp_code));
              let status = ''; // 使用status来控制$Message的提示类型
              if (JSON.stringify(res.data.resp_code) !== '"000000"') {
                status = 'error'; // 响应码为1，提示类型为错误
              } else {
                status = 'success'; // 响应码为0，提示类型为成功
              }
              vm.$message({
                message: JSON.stringify(res.data.resp_info), // 取后台返回的响应信息
                type: status // 指定响应类型
              });
              vm.$router.push('Login');
            })
            .catch(function(err) {
              console.log(err);
              vm.$message({
                message: err, // 取后台返回的响应信息
                type: 'error' // 指定响应类型
              });
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
      const vm = this; // 在axios的then方法中this会失效，此处使用vm保存this指针
      console.log('send code to ' + this.ruleForm.email);
      // 指定访问的URL
      const url = '/community/getVerifyCode';
      this.$axios({
        // 指定POST方法
        method: 'POST',
        // 指定数据格式
        dataType: 'json',
        // 指定访问的URL
        url: url,
        // 指定header
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        // 将data中的form存入axios.POST请求的数据节点中
        data: JSON.stringify(this.ruleForm)
        // then->接收返回响应
      })
        .then(function(res) {
          console.log(res);
          // 将响应res打印出来
          console.log(JSON.stringify(res.data.resp_info));
          let status = ''; // 使用status来控制$Message的提示类型
          if (JSON.stringify(res.data.resp_code) !== '000000') {
            status = 'error'; // 响应码为1，提示类型为错误
          } else {
            status = 'success'; // 响应码为0，提示类型为成功
          }
          vm.$message({
            message: JSON.stringify(res.data.resp_info), // 取后台返回的响应信息
            type: status // 指定响应类型
          });
        })
        .catch(function(err) {
          console.log(err);
          vm.$message({
            message: err, // 取后台返回的响应信息
            type: 'error' // 指定响应类型
          });
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
