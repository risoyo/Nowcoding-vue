<template>
  <div>
    <!-- 注册页页头 -->
    <h1 class="register-header">注册</h1>
    <el-divider></el-divider>
    <!-- 使用element-ui的表单来实现注册页主体 -->
    <div class="register-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名：  ">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码：  ">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.passwordConfirm"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：  ">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
        passwordConfirm: '',
        email: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log('form is:' + JSON.stringify(this.form));
      // 指定访问的URL
      let url = '/community/alpha/student';
      this.$axios({
        // 指定POST方法
        method: "POST",
        // 指定数据格式
        dataType: "json",
        // 指定访问的URL
        url: url,
        // 指定header
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        // 将data中的form存入axios.POST请求的数据节点中
        data: JSON.stringify(this.form)
        // then->接收返回响应
      }).then(function (res) {
        console.log(res);
        // 将响应res打印出来
        console.log(JSON.stringify(res.data.code));
      }).catch(function (err) {
        console.log(err)
      });
    }
  }
}
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
