<template>
  <div class="HomeMain">
    <div class="loadingtext">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
        <!-- 将class设置为loadingtext，遮罩本节点 -->

        <el-tab-pane label="日热门" name="first">
          <!-- 使用v-for读取infos中的数据 -->

          <div v-for="(info, i) in infos" :key="i">
            <div class="post">
              <el-row>
                <div class="postTitle">
                  <h4>{{ info.title }}</h4>
                </div>
              </el-row>
              <el-row>
                <div class="postContent">
                  <p>{{ info.content }}</p>
                </div>
              </el-row>
              <el-row>
                <div class="postVotes">
                  <el-col :span="4">
                    <i class="el-icon-sunny"></i>
                    x {{ info.comment_count }}
                  </el-col>
                </div>
                <div class="postWriter">
                  <el-col :span="6">
                    {{ info.user_name }}
                  </el-col>
                </div>
                <div class="postTime">
                  <el-col :span="8">
                    {{ info.create_time }}
                  </el-col>
                </div>
              </el-row>
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

        <el-tab-pane label="周热门" name="second">
          最热
        </el-tab-pane>
        <el-tab-pane label="月热门" name="second">
          最热
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 声明使用的数组
      currentPageNumber: 1,
      totalPageNumber: 0,
      maxRowsPerPage: 10,
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
          this.totalPageNumber = parseInt(resp.message) * 10;
        })
        .catch(err => {
          // 当GET请求返回了Promise.reject对象时，捕获异常
          console.log('Vue GET error catched :' + err);
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
.post {
  padding-top: 30px;
  padding-bottom: 30px;
  .postTitle {
    display: inline;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #212121;
    position: relative;
    vertical-align: middle;
  }
  .postContent {
    padding-top: 10px;
    margin-bottom: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    color: #888;
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
      Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
      sans-serif;
  }
  .postVotes {
    color: #009a61;
    font-weight: bold;
    font-size: 13px;
  }
  .postWriter {
    font-size: 13px;
  }
  .postTime {
    font-size: 13px;
    color: #9e9e9e;
  }
}
.HomeMain {
  width: 800px;
}
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
