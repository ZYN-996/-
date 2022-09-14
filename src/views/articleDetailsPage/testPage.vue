<template>
    <mainAllList class="mianListContainer"/>
</template>

<script>
import mainAllList from "./../../components/mainList/mainAllList/mainAllList.vue";

export default {
  components: {
    mainAllList
  }
}
</script>

<style scoped lang="less">
@import "@/styles/var.less";


.mianListContainer {
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  padding: 12px 20px 0 12px;
  // border: 1px solid #ccc;
  background-color: @white;
  list-style: none;
  /deep/a {     //点击时去掉下划线
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
