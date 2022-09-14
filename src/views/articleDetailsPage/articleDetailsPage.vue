<template>
  <div class="articleDetailsPageContainer">
    <div class="headerArea" ref="headerArea"><headerArea /></div>
    <div class="mainContainer">
      <div class="bothContainer">
        <div class="vHtml" ref="markdownContent">
          <el-skeleton :rows="20" animated :loading="isLoading" />
          <div v-html="acticleData" class="markdown-body"></div>
          <userComment />
          <mainAllList class="mianListContainer" />
        </div>
        <div class="aside"><sideBarVue :catalog="catalog" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import getBook from "@/api/getBook";
import "@/styles/markdown.css";
import userComment from "@/components/userComment/userComment.vue";
import headerArea from "@/components/headerArea/headerArea.vue";
import mainAllList from "@/components/mainList/mainAllList/mainAllList.vue";
import sideBarVue from "../sidebar/sideBar.vue";

export default {
  components: {
    headerArea,
    mainAllList,
    userComment,
    sideBarVue,
  },
  data() {
    return {
      acticleData: "", //文章详情页数据
      isLoading: false, //
      catalog: "", //封装目录
    };
  },
  async created() {
    this.isLoading = true;
    const acticleData = await this.fetchData();
    this.isLoading = false;

    this.acticleData = acticleData;
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle);
    // console.log(
    //   this.$route.fullPath.substring(
    //     this.$route.fullPath.length - 2,
    //     this.$route.fullPath.length
    //   )
    // );
    this.getTitles();
  },
  computed: {
    routerId() {
      return this.$route.fullPath.substring(
        this.$route.fullPath.length - 2,
        this.$route.fullPath.length
      );
    },
  },
  methods: {
    scrollHandle() {
      const scrollTop = document.documentElement.scrollTop;

      scrollTop > 400
        ? (this.$refs.headerArea.style.transform = "translateY(-60px)")
        : (this.$refs.headerArea.style.transform = "");
    },
    async fetchData() {
      const res = await getBook(this.routerId);
      return res.data;
    },
    // 获取文章目录
    getTitles() {
      this.$nextTick(() => {
        const article_content = this.$refs.markdownContent;
        const titleTag = ["H1", "H2", "H3", "H4"];
        const titles = [];
        setTimeout(() => {
          article_content.children[1].childNodes.forEach((e, index) => {
            if (titleTag.includes(e.nodeName)) {
              const id = "header-" + index;
              e.setAttribute("id", id);
              titles.push({
                id: id,
                title: e.innerHTML,
                level: Number(e.nodeName.substring(1, 2)),
                nodeName: e.nodeName,
              });
            }
          });
          titles.shift();
          this.catalog = titles;
        }, 1000);
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "@/styles/var.less";
.articleDetailsPageContainer {
  // background-color: #fff;
  font-size: 16px;
}
.headerArea {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.25s;
}
.mainContainer {
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.bothContainer {
  width: 1140px;
  display: flex;
  justify-content: space-between;
  margin: 21px 0 0 0;
  padding-bottom: 96px;
}
.vHtml {
  width: 820px;
}
.aside {
  width: 300px;
}
.markdown-body {
  background-color: #fff;
  padding: 32px;
  width: 820px;
}

.mianListContainer {
  margin-top: 20px;
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  padding: 12px 20px 0 12px;
  // border: 1px solid #ccc;
  background-color: @white;
  list-style: none;
  /deep/a {
    //点击时去掉下划线
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
    color: @lightWords;
  }
  /deep/.header {
    display: flex;
    width: 100%;
    height: 10px;
    div {
      width: 80px;
      height: 14px;
      margin-left: 10px;
      border-right: 1px solid @gray;
      color: #86909c;
      font-size: 5px;
      &:first-child {
        color: #4e5969;
      }
      &:first-child:hover {
        color: @primary;
      }
      &:last-child:hover {
        color: @primary;
      }
    }
  }
  /deep/.header :last-child {
    border: none;
  }
  /deep/.title {
    width: 100%;
    padding: 10px 0 10px 0;
    p {
      width: 90%;
      overflow: hidden;
      height: 24px;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      white-space: nowrap;
      margin-left: 10px;
      color: @words;
    }
  }
  /deep/.content {
    padding: 10px 0 10px 0;

    p {
      width: 100%;
      overflow: hidden;
      height: 12px;
      line-height: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 10px;
      font-size: 5px;
      color: @lightWords;
    }
  }
  /deep/.footer {
    padding: 10px 0 10px 0;
    font-size: 13px;
    display: flex;
    div {
      width: 60px;
      margin-left: 10px;
      &:not(:first-child):hover {
        color: @primary;
      }
    }
    i {
      display: inline-block;
      width: 20px;
    }
  }
}
</style>
