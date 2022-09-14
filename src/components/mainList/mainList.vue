<template>
  <li class="mainListContainer" ref="mainListContainer">
    <el-row type="flex" class="row-bg">
      <el-col :span="24" :offset="0" justify="start">
        <li class="mianListContainer">
          <div class="header">
            <div>{{ titleData.author | substringTextAuthor }}</div>
            <div>
              {{ titleData.createDate | formatTimes }}
            </div>
            <div>{{ titleData.category.name }}</div>
          </div>
          <router-link
            target="_blank"
            :to="{
              name: 'acticle',
              params: {
                acticleId: titleData.id,
              },
            }"
            class="grid-content bg-purple"
          >
            <div class="title">
              <p>
                {{ titleData.title }}
              </p>
            </div>
            <div class="content">
              <p>
                {{ titleData.description }}
              </p>
            </div>
          </router-link>
          <div class="footer">
            <div>
              <i class="iconfont icon-liulanliang"></i
              ><span> {{ titleData.scanNumber }}</span>
            </div>
            <div @click.stop="handleAddLike(titleData.id, flag)">
              <i class="iconfont icon-dianzan" ref="likeDom"></i
              ><span> {{ likeNumber }} </span>
            </div>
            <div>
              <i class="iconfont icon-comment"></i
              ><span>{{ titleData.commentNumber }}</span>
            </div>
          </div>
        </li>
      </el-col>
    </el-row>
  </li>
</template>

<script>
import formatTime from "@/utils/formatTime.js";
import addLike from "@/api/addLike.js";
export default {
  props: ["titleData"],
  data() {
    return {
      flag: true,
      likeNumber: 0,
      liHeight: null,
    };
  },
  created() {
    // console.log(this.titleData);
    // console.log(this.$bus);
    this.likeNumber = this.titleData.likeNumber;
  },

  filters: {
    formatTimes: function (value) {
      return formatTime(value);
    },
    substringTextAuthor: function (author) {
      const text = author.substring(0, 6);
      return text;
    },
  },

  methods: {
    //跳转到文章详情页

    // uploadTheHeight() {
    //   const liHeight = this.$refs.mainListContainer.clientHeight;

    //   this.$emit("uploadTheHeight", liHeight);
    // },

    handleAddLike: function (id, flag) {
      this.flag = !this.flag;
      //改变元素样式
      this.flag
        ? (this.$refs.likeDom.style.color = "rgb(51, 51, 51)")
        : (this.$refs.likeDom.style.color = "blue");
      //点赞量增加or减少
      this.flag ? this.likeNumber-- : this.likeNumber++;
      addLike(id, flag);
    },
  },
};
</script>

<style lang="less" scope>
@import "@/styles/var.less";
@import "./../../assets/font_3553120_5scv3k3kub3/iconfont.css";
.el-row {
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
}
.mianListContainer:hover{
  background-color: @lightGray;
}
.mianListContainer {
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  padding: 12px 20px 0 12px;
  // border: 1px solid #ccc;
  background-color: @white;
  list-style: none;
  .header {
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
  .header :last-child {
    border: none;
  }
  .title {
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
    }
  }
  .content {
    padding: 10px 0 10px 0;

    p {
      width: 100%;
      overflow: hidden;
      height: 12px;
      line-height: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 10px;
    }
  }
  .footer {
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
// .icon-dianzan {
//   color: rgb(47, 0, 255);
// }
</style>
