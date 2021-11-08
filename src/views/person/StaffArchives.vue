<template>
  <div class="staff-archives">
    <h3>员工档案</h3>
    <a-tabs type="card" v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="本部门">
        <div class="search-box">
          <a-input placeholder="输入姓名" /><a-button
            type="primary"
            @click="search"
          >
            查找
          </a-button>
        </div>
        <div>
          <a-spin :spinning="loading" />
          <a-table
            :dataSource="departmentData"
            :columns="columns"
            :rowKey="(record) => record.id"
            v-if="!loading"
          >
            <template #status="{ record }">
              <span v-if="record.status === 0">在职</span>
              <span v-if="record.status === 1">离职流程中</span>
              <span v-if="record.status === 2">已离职</span>
            </template>
            <template #operation="{ record }">
              <a-popconfirm
                v-if="departmentData.length"
                title="确定要给该员工办理离职？"
                @confirm="onDelete(record.id)"
              >
                <a-button
                  v-if="record.status === 0"
                  type="primary"
                  size="small"
                >
                  发起离职</a-button
                >
                <a-button
                  v-if="record.status === 1"
                  type="primary"
                  size="small"
                  danger
                >
                  办理离职</a-button
                >
              </a-popconfirm>
            </template>
          </a-table>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="本公司"
        ><div class="search-box">
          <a-input placeholder="输入姓名" /><a-button
            type="primary"
            @click="search"
          >
            查找
          </a-button>
        </div>
        <div>
          <a-spin :spinning="loading" />
          <a-table
            :dataSource="departmentData"
            :columns="columns"
            v-if="!loading"
          >
            <template #status="{ record }">
              <span v-if="record.status === 0">在职</span>
              <span v-if="record.status === 1">离职流程中</span>
              <span v-if="record.status === 2">已离职</span>
            </template>
            <template #operation="{ record }">
              <a-popconfirm
                v-if="departmentData.length"
                title="确定要给该员工办理离职？"
                @confirm="onDelete(record.id)"
              >
                <a-button type="primary" size="small"> 离职</a-button>
              </a-popconfirm>
            </template>
          </a-table>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { getDepartmentData } from "../../api/personApi.js";
import { message } from "ant-design-vue";
export default {
  setup() {
    const departmentData = ref([]);
    const loading = ref(false);
    const getDepatment = async () => {
      const res = await getDepartmentData();
      if (res.code === 0) {
        departmentData.value = res.data.list;
        console.log(departmentData.value);
      }
    };
    onMounted(() => {
      getDepatment();
    });
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        align: "center",
      },
      {
        title: "部门",
        dataIndex: "department",
        key: "department",
        align: "center",
      },
      {
        title: "手机",
        dataIndex: "phone",
        key: "phone",
        align: "center",
      },
      {
        title: "邮箱",
        dataIndex: "email",
        key: "email",
        align: "center",
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
        align: "center",
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
    const onDelete = (id) => {
      console.log(id);
      console.log(departmentData.value);
      departmentData.value.forEach((item) => {
        if (item.id === id && item.status === 0) {
          item.status = 1;
          message.info("办理成功！");
        } else if (item.id === id && item.status === 1) {
          item.status = 2;
          message.info("办理成功！");
        }
      });
      console.log(departmentData.value);
    };
    const search = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        message.success("查找成功！");
      }, 500);
    };
    return {
      activeKey: ref("1"),
      departmentData,
      columns,
      onDelete,
      loading,
      search,
    };
  },
};
</script>
<style lang="scss" scoped>
$font-color: #6c6f71;
.staff-archives {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 20px;
  > h3 {
    font-weight: 800;
    color: $font-color;
  }
  .search-box {
    width: 20%;
    margin: 10px;
    display: flex;
  }
}
</style>
