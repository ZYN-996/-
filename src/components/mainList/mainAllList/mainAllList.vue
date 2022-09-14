<template>
  <ul class="mainAllListContainer">
    <el-skeleton :rows="20" animated :loading="isLoading" />
    <mainList v-for="item in titleData" :key="item.id" :titleData="item" />
  </ul>
</template>

<script>
import getArtile from "@/api/getArtile.js";
import mainList from "@/components/mainList/mainList.vue";

export default {
  components: {
    mainList,
  },
  data() {
    return {
      titleData: [],
      isLoading: false,
      page: 1,
      limit: 15,
      num: 10, //每一屏渲染5个
      liHeight: null, //每个list的高度
      total: null,
    };
  },
  computed: {
    hasMore() {
      return this.titleData.length < this.total;
    },
    // calculateRollHeight() {
    //   //首屏渲染的高度

    //   return this.liHeight * this.num;
    // },
  },
  async created() {
    this.isLoading = true;
    const data = await this.feachData();
    this.isLoading = false;

    this.titleData = data.articles;
    this.total = data.total;
    // console.log(this.titleData, this.total);
    // window.fetchMore = this.fetchMore;
  },
  mounted() {
    // this.isScroll();
    window.addEventListener("scroll", this.handleScroll);
    // const domNum = window.screen.height / this.liHeight ;//视口能看到多少个元素
  },
  methods: {
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }

      this.page++;
      const resp = await this.feachData();
      this.total = resp.total;
      this.titleData = this.titleData.concat(resp.articles);
      // this.titleData = resp.articles;
    },
    // getData(a) {
    //   this.liHeight = a;
    // },
    isScroll: function () {
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.body.scrollHeight;
      if (Math.abs(scrollTop + clientHeight - scrollHeight) < 10) {
        return true;
      }
    },
    handleScroll() {
      //如果滚动高度超过首屏渲染的高度，重新请求数据
      if (this.isScroll()) {
        this.fetchMore();
      }
    },
    async feachData() {
      const { data } = await getArtile(this.page, this.limit);
      return data.data;
    },
  },
};
</script>

<style scope lang="less"></style>
