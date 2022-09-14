<template>
  <div class="layoutContainer">
    <header class="header" ref="header">
      <slot name="topHeader"></slot>
    </header>
    <div class="main"><slot></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.moveHeader);
  },

  methods: {
    moveHeader() {
      const scrollTop = document.documentElement.scrollTop;
      this.scrollTop = scrollTop;
      scrollTop > 400
        ? (this.$refs.header.style.transform = "translateY(-60px)")
        : (this.$refs.header.style.transform = "");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  // top: -60px;
  z-index: 999;
  width: 100%;

  transition: all 0.25s;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
