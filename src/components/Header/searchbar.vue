// 此文件为header的出口文件组成文件之一，负责输出header的内容searchbar部分
<template>
  <div class="search-panel">
    <el-row :gutter="0" class="m-header-searchbar">
      <!-- 实现左边的logo -->
      <el-col :span="5" class="left">
        <el-link :underline="false" href="/">
          <img src="@/assets/picture/logo.png" alt="成研logo" />
        </el-link>
      </el-col>
      <!-- 实现中间的搜索框 -->
      <el-col :span="14" class="center">
        <!-- 搜索框，element中的el-input组件 -->
        <div class="wrapper">
          <!-- 定义两个点击监听事件focus和blur，当点击输入框的时候，将热门搜索展示 -->
          <el-input
            v-model="search"
            @focus="focus"
            @blur="blur"
            @input="input"
            placeholder="搜索课程关键词"
          ></el-input>
          <!-- 搜索按钮，element中的默认按钮el-button -->
          <button class="el-button el-button--primary">
            <i class="el-icon-search" />
          </button>
          <!-- 点击搜索框但是没有输入内容时的热门搜索 -->
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, idx) in hotPlace" :key="idx">
              {{ item }}
            </dd>
          </dl>
          <!-- 点击搜索框并输入内容之后的相关内容 -->
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="(item, idx) in searchList" :key="idx">
              {{ item }}
            </dd>
          </dl>
        </div>
        <!-- 搜索框下面的建议内容 -->
        <p class="suggest">
          <!-- <a href="#">Java</a>
          <a href="#">C#</a>
          <a href="#">中平业务</a>
          <a href="#">C4D基础</a>
          <a href="#">特效技巧</a>
          <a href="#">软件测试</a> -->
        </p>
      </el-col>
      <!-- 实现切换到研发过程管控系统的图片 -->

      <el-col :span="5" class="right">
        <!-- 使用el-link实现跳转 -->
        <el-link :underline="false" href="/login">
          <el-image
            :src="url"
            style="width: 245px; height: 50px ;padding-left: 40px;"
          ></el-image>
        </el-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      hotPlace: ['Java', '接口', '新中平'],
      searchList: ['Java基础', '新中平Java接口相关', 'Java核心进阶'],
      url: require('@/assets/picture/convert.png')
    };
  },
  // 使用计算属性，来控制聚焦非聚焦状态下的输入框预测值
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.search;
    },
    isSearchList: function() {
      return this.isFocus && this.search;
    }
  },
  methods: {
    focus: function() {
      this.isFocus = true;
    },
    blur: function() {
      const self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input: function() {
      console.log('input');
      // 在此处获取input数据，然后调用后台接口来更新data中的hotPlace和searchList
    },
    toDevSystem: function() {}
  }
};
</script>

<style lang="scss"></style>
