<template>
  <div class="hello">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="最新" name="first">
        <h3>当前页码 is {{ totalPageNumber }}</h3>

        <!-- 使用v-for读取infos中的数据 -->

        <div v-for="(info, i) in infos" :key="i">
          <div v-if="info.totalPageNumber"></div>
          <div v-else>
            <div>
              <p>{{ info.content }}</p>
              <p>
                <span>{{ info.user_name }}</span>
                <el-divider direction="vertical"></el-divider>
                <span style="padding-left:250px">
                  发布于：{{ info.create_time }}
                </span>
                <el-divider direction="vertical"></el-divider>
                <span>回帖：{{ info.comment_count }}</span>
              </p>
            </div>
            <el-divider></el-divider>
          </div>
        </div>

        <div style="text-align: center;">
          <el-pagination
            @current-change="handleCurrentChange"
            :size="maxRowsPerPage"
            :total="totalPageNumber"
            :current-page="currentPageNumber"
            layout="prev, pager, next"
          >
          </el-pagination>
        </div>
      </el-tab-pane>

      <el-tab-pane label="最热" name="second">
        最热
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getHomePosts } from '@/utils/request.js';
export default {
  data() {
    return {
      // 声明使用的数组
      currentPageNumber: 1,
      totalPageNumber: 0,
      maxRowsPerPage: 10,
      activeName: 'first',
      // loading: true,
      infos: []
    };
  },
  computed: {
    // 页面总数的计算属性，获取info中第一个节点的totalPageNumber数据
    getPageNumber() {
      const pageNumber = this.infos[0].totalPageNumber * 10;
      return pageNumber;
    }
  },
  mounted() {
    this.handleUrlChange(1);
  },
  methods: {
    handleUrlChange(PageNumber) {
      /**
       * @description 获取首页的帖子集合,调用封装在request中的函数
       * @param {String} PageNumber 首页的页数
       * @param {String} maxRowsPerPage 首页每页显示的行数
       * @return {Object} resp.data为帖子集合的set
       */
      getHomePosts(PageNumber, this.maxRowsPerPage).then(resp => {
        if (resp) {
          // 将resp中的data数据存入infos
          this.infos = resp.data;
          console.log('resp' + JSON.stringify(resp));
          console.log('resp.data' + JSON.stringify(resp.data));
          // totalPageNumber数据由后台传过来，页面上直接获取的话会报错，故使用计算属性来完成
          this.totalPageNumber = this.getPageNumber;
        }
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCurrentChange(val) {
      this.currentPageNumber = val;
      console.log(`当前页: ${val}`);
      this.handleUrlChange(val);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
