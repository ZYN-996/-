<template>
  <div class="header-contain">
    <div class="header">
      <!-- logo区域 -->
      <div class="logo">
        <h1><a title="稀土掘金" href="#">稀土掘金</a></h1>
      </div>
      <!-- 导航栏区域 -->
      <div class="nav">
        <!-- 左边导航模块 -->
        <nav class="left-nav">
          <ul class="nav-item">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/pins">沸点</router-link></li>
            <li><router-link to="/course">课程 </router-link></li>
            <li><router-link to="/live">直播</router-link></li>
            <li><router-link to="/zixun">资讯</router-link></li>
            <li><router-link to="/events">活动</router-link></li>
            <li class="commity">
              <router-link to="/notFount">社区</router-link>
            </li>
            <li><router-link to="/notFount">商城</router-link></li>
            <li><router-link to="/notFount">APP</router-link></li>
            <li><router-link to="/notFount">插件</router-link></li>
          </ul>
        </nav>
        <!-- 右边导航模块 -->
        <nav>
          <ul class="right-nav">
            <!-- search搜索模块 -->
            <div class="search" ref="search">
              <!-- <el-input v-model="input" placeholder="探索稀土掘金"  @click="a" @blur="b"></el-input> -->
              <input
                type="text"
                placeholder="探索稀土掘金"
                @click="a"
                @blur="b"
              />
              <div class="search-bottom">
                <img
                  src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"
                  alt="搜索"
                />
              </div>
            </div>
            <!-- 创作者中心 -->
            <li class="add-group" v-show="showAddGroup">
              <button class="add-btn">创作者中心</button>
              <div class="more"><a href="#"></a></div>
            </li>
            <!-- 会员 -->
            <li class="vip-enter">
              <a href="#"></a>
              <a href="">会员</a>
            </li>
            <!-- 消息 -->
            <li class="notification">
              <a class="notification-a">
                <i class="el-icon-message-solid"></i>
                <span class="count">4</span>
              </a>
            </li>
            <!-- 头像 -->
            <li class="menu"></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAddGroup: true,
    };
  },
  methods: {
    a() {
      this.showAddGroup = false;
      this.$refs.search.style.width = "300px";
    },
    b() {
      this.showAddGroup = true;
      this.$refs.search.style.width = "182px";
      // this.$refs.search.style.border= "#1e80ff";
    },
  },
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #515767;
}
li {
  list-style: none;
  display: inline-block;
  height: 20px;
}
button {
  /* 鼠标经过button 按钮的时候，鼠标变成小手 */
  cursor: pointer;
}
button,
input {
  /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    "\5B8B\4F53", sans-serif;
  border: 0;
  outline: none;
}
.header-contain {
  background-color: #fff;
  z-index: 250;
}
.header {
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 60px;
  width: 100%;
  max-width: 1440px;
  border-bottom: 1px solid #f1f1f1;
  .logo a {
    display: block;
    margin-left: 24px;
    margin-right: 12px;
    width: 107px;
    height: 22px;
    font-size: 0;
    background: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg)
      no-repeat;
    background-size: 100%;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .left-nav {
    .nav-item {
      display: flex;
      align-items: center;
      li {
        display: block;
        display: flex;
        height: 60px;
        line-height: 60px;
        margin: 0 12px;
        font-size: 14px;
        font-weight: 500;
      }
      .active {
        color: #1e80ff;
      }
      nav {
        display: block;
        display: flex;
        height: 60px;
        line-height: 60px;
        margin: 0 12px;
        font-size: 14px;
      }
      .commity {
        a::after {
          content: "";
          display: inline-block;
          position: relative;
          background-size: 8.5px 5px;
          height: 5px;
          width: 8.5px;
          top: -3px;
          background-image: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e700f44c0c9ddafb97f655043d1c135a.svg);
        }
        a:hover::after {
          content: "";
          display: inline-block;
          position: relative;
          background-size: 8.5px 5px;
          height: 5px;
          width: 8.5px;
          top: -3px;
          background-image: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/dad01615c8290b337ce7fa9e332038ad.svg);
        }
        a:hover {
          color: #1e80ff;
        }
      }
    }
    .nav-item li:hover {
      color: #515767;
      border-bottom: 2px solid #1e80ff;
    }
  }
  .right-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 182px;
      height: 36px;
      margin-right: 15px;
      border-radius: 4px;
      border: 1px solid #c2c8d1;
      transition: width 0.2s;
      &:hover {
        border: 1px solid #1e80ff;
      }
      input {
        width: calc(100% - 44px);
        height: 31px;
        padding: 7.2px 0 7.2px 12px;
        font-size: 13px;
        color: #8a919f;
      }
      div {
        position: relative;
        left: -2px;
        width: 44px;
        height: 30px;
        background: #f2f3f5;
        border-radius: 2px;
        img {
          display: inline-block;
          width: 15.958px;
          padding: 0 1px 0 0;
          cursor: pointer;
          margin: 7px 15px;
        }
      }
    }
    .add-group {
      display: flex;
      align-items: center;
      /* position: relative; */
      margin-left: 5px;
      cursor: pointer;
      width: 115px;
      .add-btn {
        padding: 0 12px;
        font-size: 14px;
        height: 36px;
        width: 94px;
        color: #fff;
        background-color: #1e80ff;
        border-radius: 3px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        white-space: nowrap;
      }
      .more {
        content: "";
        width: 20px;
        height: 36px;
        display: flex;
        align-items: center;
        border-radius: 3px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        justify-content: center;
        background-color: #1e80ff;
        border-left: 1px solid hsla(0, 0%, 100%, 0.1);
        a {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-size: 10px 10px;
          background-repeat: no-repeat;
          background-image: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e700f44c0c9ddafb97f655043d1c135a.svg);
        }
      }
    }
    .vip-enter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80px;
      height: 60px;
      padding: 0 12px 0 13px;
      a:first-child {
        display: block;
        width: 24px;
        height: 24px;
        background: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg)
          no-repeat;
      }
      a:last-child {
        color: #86909c;
        font-weight: 400;
        font-size: 14px;
      }
    }
    .notification {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      position: relative;
      padding: 0 24px 0 12px;
      a {
        color: var(--juejin-font-2);
        position: relative;
      }
      .notification-a {
        .el-icon-message-solid {
          width: 24px;
          height: 24px;
          font-size: 24px;
          color: #8a919f;
        }
        .count {
          position: absolute;
          left: 15px;
          bottom: 65%;
          margin: 0;
          line-height: 11px;
          text-align: center;
          border-radius: 3rem;
          word-break: normal;
          display: inline-block;
          color: #f1f1f1;
          transform: scale(0.8);
          font-size: 12px;
          font-weight: 500;
          padding: 3px 5px;
          background: #f03535;
          border-radius: 50px;
          border: 1px solid #fff;
        }
      }
    }
    .menu {
      width: 36px;
      height: 36px;
      border-radius: 50px;
      margin-right: 14px;
      background-size: 36px;
      background-image: url(https://p9-passport.byteacctimg.com/img/mosaic-legacy/3795/3044413937~300x300.image);
    }
  }
}
</style>
