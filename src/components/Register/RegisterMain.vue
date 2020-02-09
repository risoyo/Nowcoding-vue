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
    // onSubmit() {
    //   console.log('submit!');
    //   console.log('form is:' + JSON.stringify(this.form));
    //   let url = '/community/alpha/student';
    //   this.$axios.post(url, {
    //     name: '孙悟空1',
    //     // age: '17'
    //   })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });

    // }
    // onSubmit() {
    //   console.log('submit!');
    //   console.log('form is:' + JSON.stringify(this.form));
    //   let url = '/community/alpha/student';
    //   let list = this.form;

    //   let formData = new window.FormData();
    //   //这里将表单数据封装成json保存到formData中
    //   formData.append("formData", new Blob([JSON.stringify(list)], { type: "application/json" }));
    //   this.$axios({
    //     method: "POST",
    //     url: url,
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     },
    //     data: formData
    //   }).then(function (res) {
    //     console.log(res);
    //   }).catch(function (err) {
    //     console.log(err)
    //   });
    // }
    onSubmit() {
      console.log('submit!');
      console.log('form is:' + JSON.stringify(this.form));
      let url = '/community/alpha/student';
      this.$axios({
        method: "POST",
        dataType: "json",
        url: url,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(this.form)
      }).then(function (res) {
        console.log(res);
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
