// 此文件为header的出口文件，负责输出header的topbar与searchbar结合后的完整header
<template>
  <div>
    <el-row>
      <el-col>
        <top-bar />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <!-- <search-bar /> -->
      </el-col>
      <!-- <el-col>
        <classification-bar />
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
import topBar from './HeaderMain.vue';
// import searchBar from './HeaderSearch.vue';
// import searchBar from './searchbar.vue';
// import classificationBar from './classificationBar.vue';
export default {
  components: {
    topBar
    // searchBar
    // classificationBar
  }
};
</script>

<style lang="scss"></style>
