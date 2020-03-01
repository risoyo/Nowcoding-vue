<template>
  <div>
    <!-- 登录页页头 -->
    <h3 class="MyPage-header">
      个人资料设置
    </h3>
    <el-divider></el-divider>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="MypageContent">
          头像设置
        </div>
      </el-col>
      <el-col :span="20">
        <div class="elUploadStyle">
          <el-upload
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :headers="headers"
            :action="uploadURL"
            class="avatar-uploader"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadURL: '/community/uploadHeaderImage',
      imageUrl: ''
    };
  },
  computed: {
    headers() {
      return {
        token: this.getCookie('token')
      };
    }
  },
  created() {},
  methods: {
    // 文件成功上传之后的钩子，在原窗格处显示图片
    handleAvatarSuccess(res, file) {
      this.$message({
        message: '上传成功，下次登陆后生效',
        type: 'success'
      });
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    // 上传文件之前的钩子
    beforeAvatarUpload(file) {
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
    }
  }
};
</script>

<style lang="scss">
.MyPage-header {
  text-align: left;
  font-size: 20px;
  color: rgb(48, 214, 214);
}
.MypageContent {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.elUploadStyle {
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
}
</style>
