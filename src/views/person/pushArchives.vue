<template>
  <div class="back-tone-container">
    <div class="top">
      <div class="title">档案投递</div>
    </div>
    <div class="data-table">
      <div class="search-box">
        <a-input placeholder="输入企业名" /><a-button type="primary">
          查找
        </a-button>
      </div>
      <a-table :dataSource="dataSource" :columns="columns">
        <template #operation>
          <a-button type="primary" size="small">投递</a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
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
