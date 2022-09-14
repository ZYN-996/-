<!--  -->
<template>
  <div class="view-nav">
    <ul>
      <li><router-link to="/zonghe">综合</router-link></li>
      <li><router-link to="/following">关注</router-link></li>
      <li><router-link to="/backend">后端</router-link></li>
      <li><router-link to="/frontend">前端</router-link></li>
      <li><router-link to="/android">Android</router-link></li>
      <li><router-link to="/ios">ios</router-link></li>
      <li><router-link to="/ai">人工智能</router-link></li>
      <li><router-link to="/freebie">开发工具</router-link></li>
      <li><router-link to="/career">代码人生</router-link></li>
      <li><router-link to="/article">阅读</router-link></li>
      <li><router-link to="/subscribe" class="right">标签管理</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #71777c;
}
li {
  list-style: none;
}
.view-nav {
  background-color: #fff;
}
.view-nav ul {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 960px;
  height: 46px;
}
.view-nav ul .right {
  position: absolute;
  right: 0;
  top: 17px;
  font-size: 14px;
  padding: 0 0 0 12px;
}
.view-nav ul li a {
  display: block;
  padding: 0 12px;
  font-size: 14px;
}
.view-nav ul li:first-child a {
  padding: 0 12px 0 0;
}
.view-nav ul li a:hover {
  color: #007fff;
}
.view-nav ul .active {
  color: #1e80ff;
}
</style>
