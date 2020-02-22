<template>
  <div class="hello">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <!-- 将class设置为loadingtext，遮罩本节点 -->
      <el-tab-pane label="最新" name="first" class="loadingtext">
        <h3>当前页码 is {{ totalPageNumber }}</h3>

        <!-- 使用v-for读取infos中的数据 -->

        <div v-for="(info, i) in infos" :key="i">
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
export default {
  data() {
    return {
      // 声明使用的数组
      currentPageNumber: 1,
      totalPageNumber: 0,
      maxRowsPerPage: 1,
      activeName: 'first',
      infos: []
    };
  },
  computed: {},
  mounted() {
    this.handleUrlChange(1);
  },
  methods: {
    handleUrlChange(PageNumber) {
      const url =
        '/community/getIndexPost?currentPageNumber=' +
        PageNumber +
        '&maxRowsPerPage=' +
        this.maxRowsPerPage;
      this.get(url)
        .then(resp => {
          // 将resp中的data数据存入infos
          this.infos = resp.data;
          console.log('resp' + JSON.stringify(resp));
          this.totalPageNumber = parseInt(resp.message) * 10;
          console.log('totalPageNumber' + this.totalPageNumber);
        })
        .catch(err => {
          console.log(err);
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
