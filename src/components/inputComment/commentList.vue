<template>
  <ul class="commentListContainer">
    <p>热门评论</p>
    <li v-for="item in commentData" :key="item.id">
      <div class="allDiv">
        <div class="avatar">
          <img
            src="https://img1.baidu.com/it/u=1299323919,3195975887&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
            alt=""
          />
        </div>
        <div class="comment">
          <div class="header">
            <div class="left">
              <div class="name">{{ item.username }}</div>
              <div class="classification">前端</div>
            </div>
            <div class="time">{{ item.createDate | formatTimes }}</div>
          </div>
          <div class="content">{{ item.content }}</div>
          <div class="icon">
            <div>
              <i class="iconfont icon-dianzan"></i>
              {{ item.likeNumber }}
            </div>
            <div><i class="iconfont icon-comment"></i>0</div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
// import { getComment } from "@/api/comment.js";
import formatTime from "@/utils/formatTime.js";

export default {
  props: ["commentData"],

  filters: {
    formatTimes: function (value) {
      return formatTime(value);
    },
  },
};
</script>

<style scope lang="less">
.commentListContainer {
  padding: 20px;
  list-style: none;
  .allDiv {
    display: flex;
    width: 100%;
  }
  li {
    width: 100%;
    padding: 20px 0;
  }
  p {
    font-weight: bold;
  }
  .avatar {
    width: 40px;
    height: 40px;
    flex: 0 0 auto;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .comment {
    width: 100%;
  }
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .left {
      display: flex;
      .name {
        padding: 0 20px 0 0;
      }
    }
  }
  .content {
    padding: 20px 0;
  }
  .icon {
    display: flex;
    div {
      padding: 0 5px;
      i {
        padding: 0 2px;
      }
    }
  }
}
</style>
