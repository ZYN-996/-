<template>
  <div class="homePage">
    <towLayout>
      <template #topHeader><headerArea /> <navArea /></template>
      <template #default>
        <RouterView />
        <!-- <homeMain /> -->
      </template>
    </towLayout>
  </div>
</template>

<script>
import towLayout from "@/components/layout/towLayout.vue";
import headerArea from "@/components/headerArea/headerArea.vue";
import navArea from "@/components/headerArea/navArea.vue";

// import homeMain from "./views/main/homeMain.vue";
export default {
  components: {
    towLayout,
    headerArea,
    navArea,
    // homeMain,
  },
};
</script>

<style></style>
