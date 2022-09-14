<template>
  <div class="rightAsideContainer">
    <div ref="target">
      <div class="top">
        <div class="first-line">
          <el-row :gutter="10">
            <el-col :span="15">
              <div class="grid-content bg-purple time-text">
                <i class="el-icon-date icon-time"></i>
                <span>{{ formatNowTime("Y-M-D h:m:s") }}</span>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="grid-content bg-purple">
                <el-button class="btn" round size="small">去签到</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="second-line">点亮你在社区的每一天</div>
      </div>
      <div class="one">
        <a href="#">
          <img src="../../assets/right_1.jpg" alt="" width="240" height="200" />
        </a>
      </div>
      <div class="two">
        <a href="#">
          <img
            src="../../assets/right_2.webp"
            alt=""
            width="240"
            height="200"
          />
        </a>
      </div>
      <div class="three">
        <a href="#">
          <div class="app-link">
            <img
              src="../../assets/right_3.png"
              class="qr-img"
              alt=""
              width="50"
              height="50"
            />
            <div class="content-box">
              <div class="headline">下载稀土掘金APP</div>
              <div class="desc">一个帮助开发者成长的社区</div>
            </div>
          </div>
        </a>
      </div>
      <div class="user-block">
        <header class="user-block-header">🏅作者榜</header>
        <div class="user-list">
          <div class="item">
            <a href="#" class="link">
              <img src="../../assets/right_1.jpg" class="avatar" alt="" />
              <div class="user-info">
                <a href="#" class="username">
                  <span class="name">jsmask</span>
                  <span class="rank">
                    <img src="../../assets/rank.svg" alt="" />
                  </span>
                </a>
                <div class="position">前端修仙者</div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#" class="link">
              <img src="../../assets/right_1.jpg" class="avatar" alt="" />
              <div class="user-info">
                <a href="#" class="username">
                  <span class="name">jsmask</span>
                  <span class="rank">
                    <img src="../../assets/rank.svg" alt="" />
                  </span>
                </a>
                <div class="position">前端修仙者</div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#" class="link">
              <img src="../../assets/right_1.jpg" class="avatar" alt="" />
              <div class="user-info">
                <a href="#" class="username">
                  <span class="name">jsmask</span>
                  <span class="rank">
                    <img src="../../assets/rank.svg" alt="" />
                  </span>
                </a>
                <div class="position">前端修仙者</div>
              </div>
            </a>
          </div>
        </div>
        <div class="footer">
          <a href="#">
            <div class="more">
              <span class="more-text">完整榜单</span>
              <i class="el-icon-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>
      <div class="line-block">
        <ul class="link-list">
          <li class="list-item">
            <a href="#" class="link-item"
              ><img
                src="../../assets/icon-1.png"
                class="icon"
                width="36px"
                height="36px"
                alt=""
              /><span class="title">稀土掘金漫游指南</span></a
            >
          </li>
          <li class="list-item">
            <a href="#" class="link-item">
              <img
                src="../../assets/icon-2.png"
                class="icon"
                width="36px"
                height="36px"
                alt=""
              /><span class="title">安装掘金浏览器插件</span></a
            >
          </li>
          <li class="list-item">
            <a href="#" class="link-item"
              ><img
                src="../../assets/icon-3.png"
                class="icon"
                width="36px"
                height="36px"
                alt=""
              /><span class="title">前往掘金翻译计划</span></a
            >
          </li>
        </ul>
      </div>
      <div class="index-aside-footer">
        <ul class="more-list">
          <li class="li-item"><a href="#">用户协议</a></li>
          <li class="li-item"><a href="#">营业执照</a></li>
          <li class="li-item"><a href="#">隐私政策</a></li>
          <li class="li-item"><a href="#">关于我们</a></li>
        </ul>
        <ul class="more-list">
          <li class="li-item"><a href="#">站点地图</a></li>
          <li class="li-item"><a href="#">使用指南</a></li>
          <li class="li-item"><a href="#">友情链接</a></li>
          <li class="li-item"><a href="#">更多文章</a></li>
        </ul>
        <ul class="more-list">
          <li class="li-item"><a href="#">京ICP设备18012699号-3</a></li>
        </ul>
        <ul class="more-list">
          <li class="li-item">
            <a href="#">
              <img
                src="../../assets/footer_3.png"
                width="20px"
                height="20px"
                style="vertical-align: middle"
                alt=""
              />
              <span>京公网安备11010802026719号</span></a
            >
          </li>
          <li class="li-item">
            <span> 版权所有：北京北比信息技术有限公司</span>
          </li>
          <li class="li-item">
            <span>公司地址：北京市海淀区信息路甲28号13层B座13B-5</span>
          </li>
          <li class="li-item">
            <span>公司座机：010-83434395</span>
          </li>
          <li class="li-item">
            <span>举报邮箱： feedback@xitu.io</span>
          </li>
        </ul>
        <ul class="more-list">
          <li class="li-item"><a href="#">©2022 稀土掘金</a></li>
        </ul>
        <ul class="more-list account-list">
          <li class="li-item">
            <a href="#">
              <img
                src="../../assets/footer_1.png"
                width=" 24px"
                height="24px"
                class="icon"
                alt=""
              />
            </a>
          </li>
          <li class="li-item">
            <a href="#">
              <img
                src="../../assets/footer_2.png"
                width=" 24px"
                height="24px"
                class="icon"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="sticky-block" v-show="isFixed" ref="fixed_block">
      <div class="one">
        <a href="#">
          <img src="../../assets/right_1.jpg" alt="" width="240" height="200" />
        </a>
      </div>
      <div class="two">
        <a href="#">
          <img
            src="../../assets/right_2.webp"
            alt=""
            width="240"
            height="200"
          />
        </a>
      </div>
      <div class="three">
        <a href="#">
          <div class="app-link">
            <img
              src="../../assets/right_3.png"
              class="qr-img"
              alt=""
              width="50"
              height="50"
            />
            <div class="content-box">
              <div class="headline">下载稀土掘金APP</div>
              <div class="desc">一个帮助开发者成长的社区</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { isElementNotInViewport } from "../common/utils.js";
export default {
  name: "rightAside",
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  beforeRouteLeave(to, form, next) {
    // 离开路由移除滚动事件
    window.removeEventListener("scroll", this.scrollToTop);
    next();
  },
  methods: {
    scrollToTop() {
      if (isElementNotInViewport(this.$refs.target)) {
        this.isFixed = true;
        this.$refs.fixed_block.style.position = "fixed";
        this.$refs.fixed_block.style.top = "0px";
      } else {
        this.isFixed = false;
        this.$refs.fixed_block.style.position = " ";
      }
    },
    formatNumber(n) {
      n = n.toString();
      return n[1] ? n : "0" + n;
    },
    // / 获取本地时间
    formatNowTime(format) {
      return this.formatTime(new Date().getTime(), format);
    },
    // 参数number为毫秒时间戳，format为需要转换成的日期格式
    formatTime(number, format) {
      let time = new Date(number);
      let newArr = [];
      let formatArr = ["Y", "M", "D", "h", "m", "s"];
      newArr.push(time.getFullYear());
      newArr.push(this.formatNumber(time.getMonth() + 1));
      newArr.push(this.formatNumber(time.getDate()));

      newArr.push(this.formatNumber(time.getHours()));
      newArr.push(this.formatNumber(time.getMinutes()));
      newArr.push(this.formatNumber(time.getSeconds()));

      for (let i in newArr) {
        format = format.replace(formatArr[i], newArr[i]);
      }
      let system_time = format.split(" ")[1].split(":")[0];
      if (system_time >= 6 && system_time <= 12) {
        return "早上好";
      } else if (system_time >= 13 && system_time <= 19) {
        return "下午好";
      } else {
        return "晚上好";
      }
    },
  },
};
</script>

<style>
.rightAsideContainer {
  /* background-color: #f5f5f5; */
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
ul {
  display: block;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.top {
  width: 240px;
  height: 96px;
  /* margin-top: 10px; */
  margin-bottom: 15px;
  background-color: #fff;
}
.one {
  margin-bottom: 15px;
}
.two {
  margin-bottom: 15px;
  /* margin-top: 15px; */
}
.three {
  width: 240px;
  height: 96px;
  background-color: #fff;
  margin-bottom: 15px;
}
.user-block {
  width: 240px;
}
.user-info {
  flex: 1;
}
.username {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.item {
  display: block;
  width: 240px;
  height: 70px;
  /* padding-left: 15px;
  padding-top: 15px; */
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
.item:hover {
  background-color: #fbfbfb;
}
.name {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
  color: #333;
}
.more {
  background-color: #fff;
  color: #007fff;
  text-align: center;
  font-size: 16px;
  height: 45px;
  line-height: 45px;
}
.more-text {
  display: inline-block;
  margin-right: 5px;
}
.rank {
  margin-left: 5px;
  margin-top: 5px;
}
.position {
  margin-top: 5px;
  color: #909090;
  font-size: 14px;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-top: 15px;
}

.avatar {
  flex: 0 0 auto;
  width: 45.6px;
  height: 45.6px;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.user-block-header {
  padding: 0.6rem 0.7rem;
  background-color: #fff;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
.user-list {
  background-color: #fff;
}
.app-link {
  display: flex;
  align-items: center;
  padding: 1rem;
}
.qr-img {
  margin-right: 16px;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}
.headline {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #1d2129;
}
.desc {
  margin-top: 0.5rem;
  font-size: 12px;
  line-height: 20px;
  color: #86909c;
}
.first-line {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.time-text {
  font-size: 18px;
  padding-top: 5px;
  margin-left: 10px;
}
.icon-time {
  margin-top: 5px;
  margin-right: 8px;
  fill: rgb(255, 207, 139);
}
.second-line {
  margin-top: 20px;
  margin-left: 45px;
  color: #4e5969;
  font-size: 14px;
  font-weight: 400;
}
.el-row {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.btn {
  margin-top: 10px;
  border: 1px solid #1e80ff;
  background-color: #fff;
  color: #1e80ff;
  height: 32px;
  width: 72px;
  font-size: 14px;
}
.btn:hover {
  border: 1px solid #1e80ff;
}
.line-block {
  margin-top: 15px;
  background-color: #fff;
  width: 240px;
}
.link-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icon {
  margin-right: 10px;
}
.title {
  font-size: 16px;
  color: #333;
}
.list-item {
  padding-left: 15px;
  height: 60px;
  line-height: 60px;
}
.list-item:hover {
  background: #fbfbfb;
}
.more-list {
  display: block;
  font-size: 10px;
  line-height: 1.2;
}
.more-list::after {
  content: "";
  margin-right: 8px;
  clear: both;
  display: block;
}
.li-item {
  color: #9aa3ab;
  margin-top: 10px;
  float: left;
  margin-right: 5px;
}
.index-aside-footer {
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 80px;
}
.index-aside-footer .more-list.account-list {
  display: flex;
  height: 30px;
  justify-content: flex-start;
}
.sticky-block {
  margin-top: 80px;
}
/* .fixed {
  position: fixed;
  top: 0;
} */
</style>
