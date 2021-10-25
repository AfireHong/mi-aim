<template>
  <div class="back-tone-container">
    <div class="top">
      <div class="title">背调记录</div>
      <div class="btn">
        <a-button type="primary" :size="size">
          <template #icon>
            <PlusOutlined />
          </template>
          发起背调
        </a-button>
      </div>
    </div>
    <div class="data-table">
      <div class="search-box">
        <a-input placeholder="输入姓名" /><a-button type="primary">
          查找
        </a-button>
      </div>
      <a-table :dataSource="dataSource" :columns="columns">
        <template #operation="{ record }">
          <a-button v-if="record.status != 2" type="primary" size="small"
            >入职</a-button
          >
          <a-button
            v-if="record.status === 2"
            type="primary"
            size="small"
            disabled
            >入职</a-button
          >
        </template>
        <template #status="{ record }">
          <span v-if="record.status === 0">等待</span>
          <span v-if="record.status === 1" class="pass-status">通过</span>
          <span v-if="record.status === 2" class="reject-status">拒绝</span>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import { PlusOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    PlusOutlined,
  },
  setup() {
    //   sex 0-女 1-男
    //   status 0-等待 1-通过 2-拒绝
    const dataSource = [
      {
        key: "1",
        name: "许纪颖",
        sex: 0,
        phone: "17345546710",
        email: "xvjiying@163.com",
        date: "2021/04/10",
        status: 0,
      },
      {
        key: "2",
        name: "韩行",
        sex: 0,
        phone: "17345546710",
        email: "xvjiying@163.com",
        date: "2021/04/10",
        status: 0,
      },
      {
        key: "3",
        name: "方思聪",
        sex: 0,
        phone: "17345546710",
        email: "xvjiying@163.com",
        date: "2021/04/10",
        status: 1,
      },
      {
        key: "4",
        name: "程兰芳",
        sex: 0,
        phone: "17345546710",
        email: "xvjiying@163.com",
        date: "2021/04/10",
        status: 0,
      },
      {
        key: "5",
        name: "余绮云",
        sex: 0,
        phone: "17345546710",
        email: "xvjiying@163.com",
        date: "2021/04/10",
        status: 1,
      },
      {
        key: "6",
        name: "许纪颖",
        sex: 0,
        phone: "17345546710",
        email: "xvjiying@163.com",
        date: "2021/04/10",
        status: 0,
      },
      {
        key: "7",
        name: "郑开宇",
        sex: 0,
        phone: "17345546710",
        email: "xvjiying@163.com",
        date: "2021/04/10",
        status: 2,
      },
    ];
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "性别",
        dataIndex: "sex",
        key: "sex",
      },
      {
        title: "手机",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "邮箱",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "日期",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
        slots: { customRender: "status" },
      },
      {
        title: "操作",
        key: "operation",
        align: "center",
        dataIndex: "operation",
        slots: { customRender: "operation" },
      },
    ];
    return {
      dataSource,
      columns,
    };
  },
};
</script>
<style lang="scss" scoped>
.back-tone-container {
  background: #fff;
  padding: 20px;
  .top {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 18px;
    }
  }
  .pass-status {
    color: #23c6c8;
  }
  .reject-status {
    color: red;
  }
  .search-box {
    display: flex;
    width: 300px;
    margin: 10px 0;
    button {
      margin-left: 20px;
    }
  }
}
</style>
