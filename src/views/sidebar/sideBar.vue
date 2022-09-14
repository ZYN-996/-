<template>
  <div>
    <!-- 作者信息盒子 -->
    <div class="author-block">
      <a class="user-item" href="#">
        <img
          src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/mirror-assets/168e0858b6ccfd57fe5~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
          alt=""
        />
        <div class="info-box">
          <a href="" class="username">
            <span class="name">掘金酱 </span>
            <span class="rank"
              ><img
                src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png"
                alt=""
            /></span>
          </a>
          <div class="position">技术开发 @ 欢聚</div>
        </div>
      </a>
      <div class="stat-item fist">
        <div class="icon-view"></div>
        <span class="content"
          >获得点赞
          <span class="count">&nbsp;8,989</span>
        </span>
      </div>
      <div class="stat-item last">
        <div class="icon-view"></div>
        <span class="content"
          >文章被阅读<span class="count">&nbsp;1,803,212</span>
        </span>
      </div>
    </div>
    <!-- App下载链接盒子 -->
    <div class="app-download-block">
      <a href="/app" target="_blank">
        <div class="app-link">
          <img
            class="qr-img"
            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article.9d13ff7.png"
          />
          <div class="content-box">
            <div class="headline">下载稀土掘金APP</div>
            <div class="desc">一个帮助开发者成长的社区</div>
          </div>
          <!---->
        </div></a
      >
    </div>
    <!-- 微信进群盒子 -->
    <div class="wechat-sidebar-block">
      <div class="wechat-banner">
        <img
          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png"
          class="wechat-img"
        />
      </div>
      <div title="关闭" class="close-btn ion-close-round"></div>
    </div>
    <!-- 相关文章 -->
    <div class="related-entry-sidebar-block">
      <div class="block-title">相关文章</div>
      <div class="block-body">
        <div class="entry-list" v-for="(item, id) in articlesList" :key="id">
          <a :title="item.title" class="item">
            <div class="entry-title">{{ item.title }}🎁</div>
            <div class="entry-meta-box">
              <div class="entry-meta">{{ item.likeNumber }}点赞</div>
              <div class="entry-meta">&nbsp; · &nbsp;</div>
              <div class="entry-meta">{{ item.commentNumber }}评论</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- 目录 -->
    <div class="catalog" ref="catalog">
      <catalogArea :catalog="catalog" :scrollTop="scrollTop"/>
    </div>
  </div>
</template>

<script>
import getArtile from "@/api/getArtile.js";
import catalogArea from "../catalogArea/catalogArea.vue";
export default {
  props: ["catalog"],
  components: {
    catalogArea,
  },
  data() {
    return {
      page: 1,
      limit: 5,
      articlesList: [],
      scrollTop: "",
    };
  },
  methods: {
    async feachData() {
      const { data } = await getArtile(this.page, this.limit);
      return data.data;
    },
    move() {
      this.scrollTop = document.documentElement.scrollTop;
      this.scrollTop > 1300
        ? (this.$refs.catalog.style.position='fixed')
        : (this.$refs.catalog.style.position= "");
    },
  },
  async created() {
    const data = await this.feachData();
    this.articlesList = data.articles;
    this.total = data.total;
    window.addEventListener("scroll", this.move);
  },
  // watch: {
  //   scrollTop() {
      
  //   }
  // }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
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
.author-block {
  height: 184px;
  padding: 20px;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 2px;
  .user-item {
    display: block;
    display: flex;
    width: 260px;
    height: 67px;
    padding-bottom: 17px;
    border-bottom: 1px solid #e4e6eb;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    .info-box {
      width: 196px;
      height: 50px;
      margin-left: 16px;

      .username {
        display: block;
        height: 24px;

        .name {
          color: #252933;
          font-size: 14px;
          line-height: 24px;
          font-weight: 500;
        }
        .rank img {
          vertical-align: middle;
          width: 35px;
          height: 16px;
        }
      }
      .position {
        height: 22px;
        margin-top: 4px;
        font-size: 13px;
        color: #515767;
        font-weight: 400;
        line-height: 22px;
      }
    }
  }
  .stat-item {
    display: flex;
    height: 26px;
    .icon-view {
      width: 25px;
      height: 26px;
      border-radius: 50%;
      color: rgb(123, 185, 255);
      background-color: rgb(225, 239, 255);
      margin-right: 12px;
    }
    .content {
      font-size: 14px;
      color: #252933;
      font-weight: 400;
      line-height: 26px;
    }
  }
  .fist {
    margin-top: 17px;
  }
  .last {
    margin-top: 8px;
  }
}
.app-download-block {
  background: #fff;
  width: 300px;
  height: 90px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 2px;
  .app-link {
    display: flex;
    .qr-img {
      margin-right: 16px;
      width: 50px;
      height: 50px;
      border-style: none;
    }
    .headline {
      font-size: 16px;
      line-height: 24px;
      color: #252933;
    }
    .desc {
      font-size: 14px;
      line-height: 22px;
      margin-top: 4px;
      color: #8a919f;
    }
  }
}
.wechat-sidebar-block {
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 2px;
  .wechat-img {
    width: 100%;
    border-radius: 2px;
  }
}
.related-entry-sidebar-block {
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 20px;
  .block-title {
    padding: 16px 0;
    margin: 0 20px;
    font-size: 16px;
    line-height: 24px;
    color: #1d2129;
    font-weight: 500;
    border-bottom: 1px solid #e4e6eb;
  }
  .entry-list {
    padding: 8px 0 16px 0;
    .item {
      display: block;
      padding: 8px 20px;
      &:hover .entry-title {
        color: #1171ee;
      }
      .entry-title {
        line-height: 22px;
        font-size: 14px;
        font-weight: 400;
        color: #252933;
      }
      .entry-meta-box {
        margin-top: 4px;
        .entry-meta {
          display: inline-block;
          font-size: 14px;
          line-height: 22px;
          color: #8a919f;
          font-weight: 400;
        }
      }
    }
  }
}
.catalog {
  top: 0;
  z-index: 999999;
  transition: all 8s;
}
</style>