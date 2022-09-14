<template>
  <div class="appContainer">
    <RouterView />
    <reBack />
  </div>
</template>

<script>
import reBack from "@/components/ReBack/ReBack.vue";
export default {
  components: {
    reBack,
  },
};
</script>

<!-- <style less>
* {
  box-sizing: border-box;
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
.appContainer {
  color: rgb(51, 51, 51);
  background-color: #e4e6eb;
  display: block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell,
    "Noto Sans", sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial;
  font-size: 12px;
  line-height: normal;
  overflow-x: visible;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  width: 100%;
  word-break: break-word;
  -webkit-font-smoothing: auto;
}
</style> -->
<style less>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.appContainer {
  color: rgb(51, 51, 51);
  background-color: #f4f5f5;
  display: block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell,
    "Noto Sans", sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial;
  font-size: 12px;
  line-height: normal;
  overflow-x: visible;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  width: 100%;
  word-break: break-word;
  -webkit-font-smoothing: auto;
}
</style>
