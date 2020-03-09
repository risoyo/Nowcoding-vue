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

<style lang="scss">
.search-panel {
  width: 1190px;
  margin: 0 auto;
  height: 157px;
  display: flex;
  padding: 20px 20px;
  background: #fff;
  align-items: start;
  box-sizing: border-box;
  .m-header-searchbar {
    height: 127px;
    padding: 20px 20px;
    background: #fff;
    align-items: start;
    box-sizing: border-box;
    .left {
      width: 300px;
      padding-top: 15px;
      img {
        width: 230px;
        height: 43px;
      }
    }
    .center {
      flex: 1;
      width: auto;
      .wrapper {
        margin-top: 16px;
        border: 1px solid #00754b;
        border-radius: 4px;
        width: 552px;
        box-sizing: border-box;
        position: relative;
        white-space: nowrap;
        .el-input {
          width: 462px;
        }
        input {
          border: none;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .el-button {
          width: 88px;
          border: none;
          background: #00754b;
          font-size: 16px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          vertical-align: -1px;
          i {
            font-weight: bold;
          }
        }
        .hotPlace,
        .searchList {
          position: absolute;
          top: 41px;
          left: 0;
          background: #fff;
          padding: 10px;
          font-size: 12px;
          width: 462px;
          box-sizing: border-box;
          border: 1px solid #e5e5e5;
          border-top: none;
          z-index: 999;
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;

          dt {
            color: #999;
            font-weight: bold;
          }

          dd {
            display: inline-block;
            color: #666;
            margin-right: 10px;
            margin-bottom: 3px;
            margin-top: 5px;
            cursor: pointer;

            &:hover {
              background: #f8f8f8;
              color: #31bbac;
            }
          }

          &.searchList {
            padding: 0;
            margin: 0;
            dd {
              margin: 0;
              padding: 3px 10px;
              display: block;
              line-height: 1.6;
            }
          }
        }
      }

      .suggest {
        width: 552px;
        overflow: hidden;
        padding-left: 16px;
        line-height: 1;
        margin-top: 8px;
        height: 14px;

        a {
          color: #999;
          margin-right: 10px;
          margin-bottom: 3px;
          display: inline-block;
          font-size: 12px;

          &:hover {
            color: #31bbac;
          }
        }
      }

      .nav {
        list-style: none;
        display: flex;
        margin-top: 25px;

        li {
          font-weight: 700;
          font-size: 16px;
          margin: 0 20px;
          cursor: pointer;
          position: relative;

          a {
            color: #222;

            &:hover {
              color: #f04d4e;
            }

            &.takeout:hover {
              color: #fbc700;
            }

            &.apartment:hover {
              color: #fdc411;
            }

            &.business:hover {
              color: #31bbac;
            }
          }
        }
      }
    }

    .right {
      text-align: right;
      padding-top: 15px;

      .image {
        padding-left: 40px;
        height: 50px;
        width: 245px;
      }

      .security {
        li {
          display: inline-block;
          text-align: center;
          padding: 0 5px;
        }

        i {
          font-style: normal;

          &:after {
            font-family: iconfont;
            font-size: 36px;
            color: #13d1be;
          }
        }

        .refund {
          &:after {
            content: '\e65f';
          }
        }

        .single {
          &:after {
            content: '\e652';
          }
        }

        .overdue {
          &:after {
            content: '\e65e';
          }
        }

        .txt {
          color: #999;
          font-size: 12px;
          line-height: 1;
          margin: 0;
          text-align: center;
        }
      }
    }
  }

  .left {
    width: 280px;
    padding-top: 15px;

    img {
      width: 126px;
      height: 46px;
    }
  }

  .center {
    flex: 1;

    .wrapper {
      margin-top: 16px;
      border: 1px solid #13d1be;
      border-radius: 4px;
      width: 552px;
      box-sizing: border-box;
      position: relative;
      white-space: nowrap;
      .el-input {
        width: 462px;
      }

      input {
        border: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .el-button {
        width: 88px;
        border: none;
        background: #13d1be;
        font-size: 16px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        vertical-align: -1px;

        i {
          font-weight: bold;
        }
      }

      .hotPlace,
      .searchList {
        position: absolute;
        top: 41px;
        left: 0;
        background: #fff;
        padding: 10px;
        font-size: 12px;
        width: 462px;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        border-top: none;
        z-index: 999;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        dt {
          color: #999;
          font-weight: bold;
        }

        dd {
          display: inline-block;
          color: #666;
          margin-right: 10px;
          margin-bottom: 3px;
          margin-top: 5px;
          cursor: pointer;

          &:hover {
            background: #f8f8f8;
            color: #31bbac;
          }
        }

        &.searchList {
          padding: 0;
          margin: 0;
          dd {
            margin: 0;
            padding: 3px 10px;
            display: block;
            line-height: 1.6;
          }
        }
      }
    }

    .suggest {
      width: 552px;
      overflow: hidden;
      padding-left: 16px;
      line-height: 1;
      margin-top: 8px;
      height: 14px;

      a {
        color: #999;
        margin-right: 10px;
        margin-bottom: 3px;
        display: inline-block;
        font-size: 12px;

        &:hover {
          color: #31bbac;
        }
      }
    }

    .nav {
      list-style: none;
      display: flex;
      margin-top: 25px;

      li {
        font-weight: 700;
        font-size: 16px;
        margin: 0 20px;
        cursor: pointer;
        position: relative;

        a {
          color: #222;

          &:hover {
            color: #f04d4e;
          }

          &.takeout:hover {
            color: #fbc700;
          }

          &.apartment:hover {
            color: #fdc411;
          }

          &.business:hover {
            color: #31bbac;
          }
        }
      }
    }
  }

  .right {
    text-align: right;
    padding-top: 15px;

    .security {
      li {
        display: inline-block;
        text-align: center;
        padding: 0 5px;
      }

      i {
        font-style: normal;

        &:after {
          font-family: iconfont;
          font-size: 36px;
          color: #13d1be;
        }
      }

      .refund {
        &:after {
          content: '\e65f';
        }
      }

      .single {
        &:after {
          content: '\e652';
        }
      }

      .overdue {
        &:after {
          content: '\e65e';
        }
      }

      .txt {
        color: #999;
        font-size: 12px;
        line-height: 1;
        margin: 0;
        text-align: center;
      }
    }
  }
}
</style>
