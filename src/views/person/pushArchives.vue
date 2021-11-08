<template>
  <div class="back-tone-container">
    <div class="top">
      <div class="title">档案投递</div>
    </div>
    <div class="data-table">
      <div class="search-box">
        <a-input placeholder="输入企业名" />
        <a-button type="primary" @click="search"> 查找 </a-button>
      </div>
      <a-spin tip="Loading..." :spinning="loading">
        <a-table :dataSource="dataSource" :columns="columns">
          <template #operation>
            <a-button type="primary" size="small" @click="push">投递</a-button>
          </template>
        </a-table>
      </a-spin>
    </div>
    <a-modal
      v-model:visible="visible"
      title="投递档案"
      :confirm-loading="confirmLoading"
      cancelText="取消"
      okText="投递"
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
  components: {},
  setup() {
    const dataSource = [
      {
        name: "杭州MiAim公司",
        phone: "0571-56692278",
        personPhone: "13540204765",
        area: "	浙江省杭州市",
        address: "	滨江区2号大街1158号",
        email: "	MiAim@163.com",
      },
      {
        name: "杭州宏恒公司",
        phone: "0571-56692278",
        personPhone: "13540204765",
        area: "	浙江省杭州市",
        address: "	余杭区1号大街233号",
        email: "	MiAim@163.com",
      },
      {
        name: "杭州河海公司",
        phone: "0571-56692278",
        personPhone: "13540204765",
        area: "	浙江省杭州市",
        address: "	滨江区2号大街1158号",
        email: "	MiAim@163.com",
      },
      {
        name: "杭州达创公司",
        phone: "0571-56692278",
        personPhone: "13540204765",
        area: "	浙江省杭州市",
        address: "余杭区3号大街108号",
        email: "	MiAim@163.com",
      },
    ];
    const columns = [
      {
        title: "企业名",
        dataIndex: "name",
        key: "name",
      },

      {
        title: "企业电话",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "负责人电话",
        dataIndex: "personPhone",
        key: "personPhone",
      },
      {
        title: "地区",
        dataIndex: "area",
        key: "area",
      },
      {
        title: "地址",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "邮箱",
        dataIndex: "email",
        key: "email",
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
    const visible = ref(false);
    const push = () => {
      visible.value = true;
    };
    const confirmLoading = ref(false);
    const handleOk = () => {
      confirmLoading.value = true;
      setTimeout(() => {
        visible.value = false;
        confirmLoading.value = false;
        notification.open({
          message: "投递档案",
          description: "投递成功！",
          icon: h(SmileOutlined, { style: "color: green" }),
        });
      }, 1500);
    };
    return {
      dataSource,
      columns,
      loading,
      search,
      staffData,
      current: ref(""),
      push,
      confirmLoading,
      handleOk,
      visible,
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
