<template>
  <div class="message">
    <a-row :gutter="[22, 22]" :wrap="true">
      <a-col :xs="24" :md="6">
        <div class="card">
          <div class="title">消息</div>
          <div class="title-cate">
            <MessageTwoTone /><span>未读</span><span class="unread">3</span>
          </div>
          <div class="title-cate"><CheckCircleTwoTone /><span>已读</span></div>
        </div>
        <div class="card">
          <div class="title">分类</div>
          <span class="cate"><a-badge color="#f50" text="警示" /></span>
          <br />
          <span class="cate"><a-badge color="#2db7f5" text="工作" /></span>
          <br />
          <span class="cate"><a-badge color="#87d068" text="其他" /></span>
          <br />
        </div>
      </a-col>
      <a-col :xs="24" :md="18">
        <tr v-for="item in message" :key="item.id" class="list-item">
          <td class="from">
            {{ item.send
            }}<span class="type warning" v-if="item.typeId == 1">{{
              item.type
            }}</span>
            <span class="type" v-if="item.typeId == 4"></span>
          </td>

          <td class="message-title">{{ item.title }}</td>
          <td class="message-time">{{ item.time }}</td>
        </tr>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { CheckCircleTwoTone, MessageTwoTone } from "@ant-design/icons-vue";
import { getMessageData } from "../../api/personApi";
import { ref } from "vue";
export default {
  components: { CheckCircleTwoTone, MessageTwoTone },
  setup() {
    const message = ref([]);
    const initMessage = async () => {
      const { code, data } = await getMessageData();
      if (code === 0) {
        message.value = data.list;
      }
    };
    initMessage();
    return {
      message,
    };
  },
};
</script>
<style lang="scss" scoped>
.message {
  padding: 20px;
  background: #fff;
}
.title {
  font-weight: 600;
  margin-top: 20px;
}
.title-cate {
  border-bottom: 1px solid #eee;
  padding: 5px 0;
  span:nth-child(2) {
    margin-left: 8px;
  }
  .unread {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #f8ac59;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    line-height: 20px;
    float: right;
  }
}
.cate {
  cursor: pointer;
  display: inline-block;
  padding: 4px 0;
}
.list-item {
  padding: 10px 10px;
  border-top: 1px solid #eee;
  display: block;
  &:hover {
    background: #eee;
  }
  .from {
    padding: 12px;
    width: 23%;
    display: inline-block;
  }
  .type {
    /* display: inline-block; */
  }
  .warning {
    font-size: 0.8em;
    /* display: inline-block; */
    padding: 2px;
    background: #f8ac59;
    color: #fff;
    border-radius: 4px;
    float: right;
  }
  .message-title {
    margin-left: 20px;
    display: inline-block;
  }
  .message-time {
    display: inline-block;
    float: right;
  }
}
</style>
