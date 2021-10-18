<template>
  <div class="comment-container">
    <div class="comment" v-for="item in comments" :key="item.id">
      <div class="comment-user">
        <div class="user-icon">
          <img :src="item.avater" />
        </div>
        <div class="comment-user-from">
          <div class="comment-username">
            {{ item.name
            }}<small style="margin-left: 10px">{{ item.position }}</small>
          </div>
          <div class="comment-source">
            <small
              >{{ item.time
              }}<span style="margin-left: 10px">{{ item.from }}</span></small
            >
          </div>
        </div>
        <span class="comment-score">
          <StarFilled
            v-for="index in parseInt(item.score)"
            :key="index"
          ></StarFilled>
          <StarOutlined
            v-for="index in 5 - parseInt(item.score)"
            :key="index"
          ></StarOutlined>
        </span>
        <span class="comment-score-num">{{ item.score }}</span>
        <span class="shensu-btn">申诉</span>
      </div>
      <div class="comment-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>
<script>
import { StarOutlined, StarFilled } from "@ant-design/icons-vue";
export default {
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    StarOutlined,
    StarFilled,
  },
};
</script>
<style lang="scss" scoped>
.comment-container {
  height: 340px;
  margin-top: 10px;
  margin-left: -10px;
  overflow: scroll;
  overflow-x: hidden;
  > .comment {
    padding: 20px;
    border: 1px solid #e7eaec;
    margin-top: 15px;
    overflow: hidden;
    color: #6c6f71;
    > .comment-user {
      overflow: hidden;
      position: relative;
      .user-icon {
        height: 40px;
        width: 40px;
        float: left;
        > img {
          width: 100%;
          height: 100%;
        }
      }

      > .comment-user-from {
        margin-left: 20px;
        float: left;
        > .comment-source {
          color: #888;
        }
      }
      > .comment-score {
        margin-left: 40px;
        font-size: 18px;
        float: left;
        span {
          margin-right: 5px;
          color: rgb(255, 196, 0);
        }
      }
      > .comment-score-num {
        font-size: 16px;
        margin-left: 10px;
      }
      > .shensu-btn {
        position: absolute;
        right: 0;
        cursor: pointer;
        font-size: 14px;
        &:hover {
          color: #000;
        }
      }
    }
    > .comment-content {
      margin-top: 15px;
      font-size: 13px;
      color: #676a6c;
    }
  }
}
</style>
