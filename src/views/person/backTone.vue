<template>
  <div class="back-tone-container">
    <div class="top">
      <div class="title">背调记录</div>
      <div class="btn">
        <a-button type="primary" :size="size" @click="backToneClick">
          <template #icon>
            <PlusOutlined />
          </template>
          发起背调
        </a-button>
      </div>
    </div>
    <div class="data-table">
      <div class="search-box">
        <a-input placeholder="输入姓名" /><a-button
          type="primary"
          @click="search"
        >
          查找
        </a-button>
      </div>
      <a-spin tip="Loading..." :spinning="loading"
        ><a-table :dataSource="dataSource" :columns="columns">
          <template #operation="{ record }">
            <a-popconfirm
              title="确定入职？"
              ok-text="是"
              cancel-text="否"
              @confirm="confirm"
              @cancel="cancel"
            >
              <a-button v-if="record.status != 2" type="primary" size="small"
                >入职</a-button
              >
            </a-popconfirm>
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
          <template #sex="{ record }">
            <span v-if="record.sex == 1">男</span>
            <span v-else>女</span>
          </template>
        </a-table>
      </a-spin>
    </div>
    <a-modal
      v-model:visible="visible"
      title="发起背调"
      :confirm-loading="confirmLoading"
      cancelText="取消"
      okText="发起"
      @ok="handleOk"
    >
      <a-tree-select
        v-model:value="current"
        style="width: 200px; height: 30px"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
        :tree-data="staffData"
        placeholder="请选择"
        tree-default-expand-all
      >
      </a-tree-select>
    </a-modal>
  </div>
</template>
<script>
import { PlusOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { ref, h } from "vue";
import { SmileOutlined } from "@ant-design/icons-vue";
import { notification } from "ant-design-vue";
const staffData = [
  {
    title: "技术部",
    value: "0",
    key: "0",
    children: [
      {
        title: "秦雨雪",
        value: "0-0-1",
        key: "0-0-1",
      },
      {
        title: "林南珍",
        value: "0-0-2",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "市场部",
    value: "0-1",
    key: "1",
    children: [
      {
        title: "秦雨雪",
        value: "1-0-1",
        key: "1-0-1",
      },
      {
        title: "林南珍",
        value: "1-0-2",
        key: "1-0-2",
      },
    ],
  },
  {
    title: "财务部",
    value: "0-1",
    key: "2",
    children: [
      {
        title: "秦雨雪",
        value: "2-0-1",
        key: "2-0-1",
      },
      {
        title: "林南珍",
        value: "2-0-2",
        key: "2-0-2",
      },
    ],
  },
  {
    title: "行政部",
    value: "0-1",
    key: "3",
    children: [
      {
        title: "秦雨雪",
        value: "3-0-1",
        key: "3-0-1",
      },
      {
        title: "林南珍",
        value: "3-0-2",
        key: "3-0-2",
      },
    ],
  },
  {
    title: "产品部",
    value: "0-1",
    key: "4",
    children: [
      {
        title: "秦雨雪",
        value: "4-0-1",
        key: "4-0-1",
      },
      {
        title: "林南珍",
        value: "4-0-2",
        key: "4-0-2",
      },
    ],
  },
  {
    title: "运营部",
    value: "0-1",
    key: "5",
    children: [
      {
        title: "秦雨雪",
        value: "5-0-1",
        key: "5-0-1",
      },
      {
        title: "林南珍",
        value: "5-0-2",
        key: "5-0-2",
      },
    ],
  },
  {
    title: "公关部",
    value: "0-1",
    key: "6",
    children: [
      {
        title: "秦雨雪",
        value: "6-0-1",
        key: "6-0-1",
      },
      {
        title: "林南珍",
        value: "6-0-2",
        key: "6-0-2",
      },
    ],
  },
];
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
        slots: { customRender: "sex" },
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
    const loading = ref(false);
    const search = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 500);
    };
    const confirm = () => {
      message.success("入职成功！");
    };
    const visible = ref(false);
    const backToneClick = () => {
      visible.value = true;
    };
    const confirmLoading = ref(false);
    const handleOk = () => {
      confirmLoading.value = true;
      setTimeout(() => {
        visible.value = false;
        confirmLoading.value = false;
        notification.open({
          message: "发起背调",
          description: "发起成功！",
          icon: h(SmileOutlined, { style: "color: #108ee9" }),
        });
      }, 1500);
    };
    return {
      dataSource,
      loading,
      columns,
      search,
      confirm,
      backToneClick,
      visible,
      staffData,
      current: ref(""),
      confirmLoading,
      handleOk,
      notification,
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
