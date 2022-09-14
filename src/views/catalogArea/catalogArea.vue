<!--  -->
<template>
  <!-- 目录 -->
  <div class="catalog-block">
    <nav class="article-catalog">
      <div class="catalog-title">目录</div>
      <div class="catalog-body">
        <ul class="catalog-list">
          <li
            class="item"
            v-for="(item, i) in catalog"
            :key="i"
            :class="{ active: item.title === title }"
            @click="t(item.id)"
          >
            <div class="a-container" :style="{ paddingLeft: item.level * 22 - 30 + 'px' }">
              <a>
                {{ item.title }}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["catalog", "scrollTop"],
  name: "catalogArea",
  data() {
    return {
      scroll: "",
      title: " ",
    };
  },
  watch: {
    scrollTop() {
      for (var i = this.catalog.length - 1; i >= 0; i--) {
        var PageId = document.querySelector("#" + this.catalog[i].id);
        if (this.scrollTop >= PageId.offsetTop) {
          this.title = this.catalog[i].title;
          break;
        }
      }
    },
  },
  methods: {
    // 目录锚点
    t(id) {
      var PageId = document.querySelector("#" + id);
      this.scroll = PageId.offsetTop;
      window.scrollTo({
        top: PageId.offsetTop,
        behavior: "smooth",
      });
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped lang="less">
.catalog-block {
  .article-catalog {
    position: absolute;
    width: 300px;
    background: #fff;
    border-radius: 2px;
    .catalog-title {
      font-weight: 500;
      padding: 16px 0;
      margin: 0 20px;
      font-size: 16px;
      line-height: 24px;
      color: #1d2129;
      border-bottom: 1px solid #e4e6eb;
    }
    .catalog-body {
      background-color: #fff;
      max-height: 612px;
      margin: 8px 4px 0 0;
      overflow: auto;
      .catalog-list {
        padding: 0 0 12px 0;
        .item {
          display: block;
          .a-container {
            position: relative;
            font-size: 14px;
            &:hover::before {
              content: "";
              position: absolute;
              top: 8px;
              left: 0;
              margin-top: 7px;
              width: 4px;
              height: 16px;
              background: #1e80ff;
              border-radius: 0 4px 4px 0;
            }
            a {
              display: block;
              display: flex;
              align-items: center;
              padding-left: 8px;
              width: 95%;
              height: 44px;
              &:hover {
                color: #007fff;
                border-radius: 4px;
                background-color: #f7f8fa;
              }
            }
          }
        }
      }
    }
  }
}
.active {
    color: #007fff;
    border-radius: 4px;
    background-color: #f7f8fa;
  
}
</style>