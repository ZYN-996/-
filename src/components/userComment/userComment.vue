<template>
  <div class="userCommentContainer">
    <inputComment />
  </div>
</template>

<script>
import { getComment } from "@/api/comment.js";
import inputComment from "@/components/inputComment/inputComment.vue";

export default {
  components: {
    inputComment,
  },
  data() {
    return {
      page: 1,
      limit: 1,
      articleld: 63,
    };
  },
  async created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      await getComment(this.page, this.limit, this.articleld);
    },
  },
};
</script>

<style scope lang="less">
.userCommentContainer {
  width: 100%;
}
</style>
