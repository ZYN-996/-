<template>
  <div class="mainContainer">
    <div class="leftMain"><leftMain /></div>
    <div class="rightSide"><rightSide /></div>
  </div>
</template>

<script>
import leftMain from "@/views/leftMain/leftMain.vue";
import rightSide from "@/components/rightAside/rightAside.vue";

export default {
  components: {
    leftMain,
    rightSide,
  },
};
</script>

<style scoped lang="less">
.mainContainer {
  margin-top: 120px;
  display: flex;
  width: 960px;
  justify-content: space-between;
  .leftMain {
    width: 700px;
    margin-right: 20px;
  }
  .rightSide {
    width: 240px;
  }
}
</style>
