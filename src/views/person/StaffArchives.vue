<template>
  <div class="staff-archives">
    <h3>员工档案</h3>
    <a-tabs type="card" v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="本部门">
        <div class="search-box">
          <a-input placeholder="输入姓名" /><a-button type="primary">
            查找
          </a-button>
        </div>
        <a-table
          :dataSource="departmentData"
          :columns="columns"
          :rowKey="(record) => record.id"
        >
          <template #operation>
            <a-popconfirm
              v-if="departmentData.length"
              title="确定要给该员工办理离职？"
              @confirm="onDelete(record.id)"
            >
              <a-button type="primary" size="small"> 离职</a-button>
            </a-popconfirm>
          </template>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="本公司"
        ><div class="search-box">
          <a-input placeholder="输入姓名" /><a-button type="primary">
            查找
          </a-button>
        </div>
        <a-table :dataSource="departmentData" :columns="columns">
          <template #operation>
            <a-popconfirm
              v-if="departmentData.length"
              title="确定要给该员工办理离职？"
              @confirm="onDelete(record.id)"
            >
              <a-button type="primary" size="small"> 离职</a-button>
            </a-popconfirm>
          </template>
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { getDepartmentData } from "../../api/personApi.js";
export default {
  setup() {
    const departmentData = ref([]);
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
        title: "操作",
        key: "operation",
        align: "center",
        dataIndex: "operation",
        slots: { customRender: "operation" },
      },
    ];
    const onDelete = () => {};
    return {
      activeKey: ref("1"),
      departmentData,
      columns,
      onDelete,
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
