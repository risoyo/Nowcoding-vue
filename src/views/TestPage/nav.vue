//
此文件是header的组成文件之一topbar的组成组件-右侧导航栏（备份2，更改为element-下拉菜单）
<template>
  <div class="m-nav">
    <!-- 快速生成4列：ul.nav>li*4 -->

    <ul class="nav">
      <el-divider direction="vertical"></el-divider>

      <el-dropdown>
        <el-link :underline="false" href="/mymt" class="content">
          网站导航
        </el-link>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="/myorder"
              style="font-size: 12px;color: #999;"
            >
              参加培训
            </el-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="/myfavorate"
              style="font-size: 12px;color: #999;"
            >
              考试系统
            </el-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="/myfavorate"
              style="font-size: 12px;color: #999;"
            >
              在线笔记系统
            </el-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="/myfavorate"
              style="font-size: 12px;color: #999;"
            >
              帮助中心
            </el-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </ul>

    <ul class="nav">
      <el-divider direction="vertical"></el-divider>

      <el-dropdown>
        <!-- 空<el-dropdown-menu>，因为不添加的话页面console会报错 -->
        <el-dropdown-menu></el-dropdown-menu>
        <el-link :underline="false" href="/mymt" class="content">
          我的消息
        </el-link>
      </el-dropdown>
      <el-badge v-if="notice" is-dot class="item"></el-badge>
    </ul>

    <ul class="nav">
      <el-divider direction="vertical"></el-divider>

      <el-dropdown>
        <el-link :underline="false" href="/mycourse/trainPlan" class="content">
          我的课程
        </el-link>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="/mycourse/trainPlan"
              style="font-size: 12px;color: #999;"
            >
              培训班
            </el-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="/mycourse/selfCourse"
              style="font-size: 12px;color: #999;"
            >
              自修课程
            </el-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="/mycourse/compeleted"
              style="font-size: 12px;color: #999;"
            >
              已完成
            </el-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </ul>

    <ul class="nav">
      <el-divider direction="vertical"></el-divider>

      <el-dropdown>
        <el-link :underline="false" href="/createCourse" class="content">
          课程管理
        </el-link>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="/createCourse"
              style="font-size: 12px;color: #999;"
            >
              新增课程
            </el-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="/myfavorate"
              style="font-size: 12px;color: #999;"
            >
              编辑课程
            </el-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </ul>

    <ul class="nav">
      <el-divider direction="vertical"></el-divider>

      <el-dropdown>
        <el-link :underline="false" href="/createTrain" class="content">
          培训班管理
        </el-link>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="/createTrain"
              style="font-size: 12px;color: #999;"
            >
              新增培训班
            </el-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-link
              :underline="false"
              href="/myfavorate"
              style="font-size: 12px;color: #999;"
            >
              编辑培训班
            </el-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // notice控制是否显示通知小圆点
      notice: false
    };
  }
};
</script>

<style lang="scss">
.item {
  margin-top: -10px;
  // margin-right: 40px;
}
</style>
