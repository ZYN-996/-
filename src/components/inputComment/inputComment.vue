<template>
  <form autocomplete="off" class="inputCommentContainer" id="commentId">
    <div class="txt">评论</div>
    <div class="avatarInput">
      <div class="avatar">
        <img
          src="https://img1.baidu.com/it/u=1299323919,3195975887&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
          alt=""
        />
      </div>
      <div class="beforeTextarea" v-if="!isShow" @click="handleDivClick">
        <div class="contenteditable">输入评论(enter换行,Crtl+Enter发送)</div>
      </div>
      <div class="contentInput" v-if="isShow">
        <el-input
          ref="input"
          @blur="handleWindowClick"
          type="textarea"
          :rows="2"
          :placeholder="placeholderTxt"
          v-model="textarea"
        >
        </el-input>
        <div class="publishedContent">
          <div>
            <div class="expression">
              <i class="iconfont icon-biaoqing"></i>表情
            </div>
            <div class="img">
              <i class="iconfont icon-tupian_huaban"></i>图片
            </div>
          </div>
          <div>
            <div class="crtlEnter"><span>Crtl+Enter</span></div>
            <el-button
              size="small"
              @mousedown.native="buttonClick"
              type="primary"
              :style="{
                backgroundColor: isDisabled,
                cursor: isCursor,
              }"
              >{{ buttonText }}</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <commentList :commentData="commentData" />
  </form>
</template>

<script>
import "@/assets/font_3553120_4c8vgdrij0p/iconfont.css";
import commentList from "@/components/inputComment/commentList.vue";
import { getComment } from "@/api/comment.js";

import { addComment } from "@/api/comment.js";
export default {
  components: {
    commentList,
  },
  data() {
    return {
      commentData: [],
      buttonText: "发表评论",
      disabled: false,
      textarea: "",
      isShow: false,
      form: {
        username: null,
        content: null,
        articleId: 1,
      },
    };
  },
  computed: {
    isDisabled() {
      return this.textarea ? "rgb(150, 150, 248)" : " rgb(191, 191, 243)";
    },
    isCursor() {
      return this.textarea ? "pointer" : "text";
    },
  },
  props: {
    placeholderTxt: {
      type: String,
      default: "请输入评论",
    },
  },
  async created() {
    this.feathData();
    // this.commentData = data;
  },
  mounted() {
    // window.addEventListener("click", this.handleWindowClick);
    // this.$refs.input.focus();
  },

  methods: {
    async feathData() {
      const res = await getComment(1, 100, this.$route.params.acticleId);
      this.commentData = res.data.data;
    },

    async buttonClick(event) {
      event.preventDefault();
      if (!this.textarea) {
        return;
      }
      const content = this.textarea;
      const username = "用户" + Math.floor(Math.random() * 100 + 100);
      this.form.username = username;
      this.form.articleId = this.$route.params.acticleId;
      this.form.content = content;
      this.buttonText = "提交中...";
      await addComment(this.form);
      this.buttonText = "发表评论";
      this.textarea = "";
      //重新读取评论数据
      this.feathData();
    },
    handleDivClick() {
      this.isShow = true;
    },
    handleWindowClick() {
      this.isShow = false;
    },
  },
};
</script>

<style scope lang="less">
.crtlEnter {
  padding-right: 20px;
  span {
    line-height: 32px;
  }
}

.publishedContent {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 14px !important;
  line-height: 32px;

  i {
    padding-right: 5px;
    vertical-align: middle;
    line-height: 32px;
  }
  div {
    display: flex;
    padding-right: 5px;
  }
}
.contentInput {
  width: 100%;
  //   border: 1px solid red;
}
.inputCommentContainer {
  width: 100%;
  background-color: #fff;

  margin-top: 20px;
  font-size: 14px;
  padding: 20px 0;
}
.txt {
  width: 100%;
  font-weight: bold;
  padding: 0 20px;
}
.avatarInput {
  display: flex;
  width: 100%;
  padding: 20px;
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
.beforeTextarea {
  border-radius: 5px;
  width: 100%;
  height: 60px;
  background-color: rgb(230, 227, 227);
  cursor: text;
  .contenteditable {
    padding: 8px 12px;
    color: rgb(119, 117, 117);
    outline: none;
    min-height: 64px;
    box-sizing: border-box;
    line-height: 22px;
    font-size: 14px;
    resize: both;
  }
}

textarea {
  resize: none !important;
}
</style>
