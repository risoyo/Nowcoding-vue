<template>
  <div>
    <!-- 登录页页头 -->
    <h3 class="register-header">
      个人资料
    </h3>
    <el-divider></el-divider>
    <el-form :model="form">
      <el-form-item ref="uploadElement" :label-width="formLabelWidth">
        <el-upload
          ref="upload"
          :limit="limitNum"
          :auto-upload="false"
          :on-exceed="handleExceed"
          :before-upload="handleBeforeUpload"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-change="imgChange"
          :class="{ hide: hideUpload }"
          action="#"
          accept="image/png,image/gif,image/jpg,image/jpeg"
          list-type="picture-card"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img :src="dialogImageUrl" width="100%" alt="" />
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button @click="uploadFile" size="small" type="primary">
          立即上传
        </el-button>
        <el-button @click="tocancel" size="small">
          取消
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { userAvatarUpload } from '@/api/UserAPI.js';
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
        pass: '',
        hideUpload: false,
        dialogImageUrl: '',
        dialogVisible: false, // 图片预览弹窗
        formLabelWidth: '80px',
        limitNum: 1,
        form: {},
        dialogVisible2: false // 弹窗
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
  },
  methods: {
    // 上传文件之前的钩子
    handleBeforeUpload(file) {
      if (
        !(
          file.type === 'image/png' ||
          file.type === 'image/gif' ||
          file.type === 'image/jpg' ||
          file.type === 'image/jpeg'
        )
      ) {
        this.$notify.warning({
          title: '警告',
          message:
            '请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片'
        });
      }
      const size = file.size / 1024 / 1024 / 2;
      if (size > 2) {
        this.$notify.warning({
          title: '警告',
          message: '图片大小必须小于2M'
        });
      }
      const fd = new FormData(); // 通过form数据格式来传
      fd.append('picFile', file); // 传文件
      console.log(fd.get('picFile'));
      const url = '/community/up';
      userAvatarUpload(url, fd)
        .then(data => {})
        .catch(e => {
          // 当POST请求返回了Promise.reject对象时，捕获异常
          console.log('Vue GET error catched :' + e);
        });
    },
    // 文件超出个数限制时的钩子
    handleExceed(files, fileList) {},
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      this.hideUpload = fileList.length >= this.limitNum;
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    uploadFile() {
      this.$refs.upload.submit();
    },
    imgChange(files, fileList) {
      this.hideUpload = fileList.length >= this.limitNum;
      if (fileList) {
        this.$refs.uploadElement.clearValidate();
      }
    },
    tocancel() {
      this.dialogVisible2 = false;
    }
  }
};
</script>

<style lang="scss">
.register-header {
  text-align: left;
  font-size: 20px;
  color: rgb(48, 214, 214);
}
.register-form {
  padding-left: 350px;
  padding-right: 350px;
}
</style>
