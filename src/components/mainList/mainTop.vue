<template>
  <div class="mainTopContainer">
    <div class="firstDiv">
      <router-link to="/zonghe">推荐</router-link>
    </div>
    <div><router-link to="/newest">最新</router-link></div>
    <div><router-link to="/hottest">热榜</router-link></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "HomePage",
          title: "推荐",
          exact: true, //必须要精确匹配才能添加匹配类名`router-link-active`
        },
        {
          name: "Blog",
          title: "最新",
          exact: false, //不需要精确匹配才能添加匹配类名`router-link-active`
        },
        {
          name: "Blog",
          title: "热榜",
          exact: false, //不需要精确匹配才能添加匹配类名`router-link-active`
        },
      ],
    };
  },
};
</script>

<style lang="less" scope>
@import "@/styles/var.less";
.mainTopContainer {
  height: 46px;
  width: 100%;
  background-color: @white;
  display: flex;
  align-items: center;
  color: @lightWords;
  font-size: 14px;
  border-bottom: 1px solid hsla(0,0%,59.2%,.1);

  .firstDiv {
    color: @primary;
  }
  div {
    margin-left: 20px;
    cursor: pointer;
    width: 50px;
    border-right: 1px solid @gray;
    &:hover {
      color: @primary;
    }
  }
}
.active{
  color: #1e80ff;
}
div:last-child {
  border: none;
}
</style>
