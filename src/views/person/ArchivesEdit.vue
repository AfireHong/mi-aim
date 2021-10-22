<template>
  <div class="archive-edit-container">
    <div class="user-name">
      当前员工：
      <a-tree-select
        v-model:value="current"
        style="width: 200px; height: 30px"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
        :tree-data="staffData"
        placeholder="请选择"
        tree-default-expand-all
      >
      </a-tree-select>
      <a-button type="primary" size="small">切换</a-button>
    </div>
    <a-tabs type="card" v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="档案">
        <div class="archive-detail">
          <div class="archive-upload">
            <a-card title="考勤统计上传" style="width: 400px; height: 150px">
              <a-upload
                v-model:file-list="fileList"
                name="file"
                :multiple="true"
                @change="handleChange"
              >
                <a-button>
                  <upload-outlined></upload-outlined>
                  点击上传考勤统计
                </a-button>
              </a-upload>
            </a-card>
            <br />
            <a-card title="绩效记录上传" style="width: 400px; height: 150px">
              <a-upload
                v-model:file-list="fileList"
                name="file"
                :multiple="true"
                @change="handleChange"
              >
                <a-button>
                  <upload-outlined></upload-outlined>
                  点击上传绩效记录
                </a-button>
              </a-upload>
            </a-card>
          </div>
          <div class="experience">
            <a-tabs type="card" v-model:activeKey="expKey">
              <a-tab-pane key="3" tab="重大事件">
                <div class="experience-content">
                  <a-timeline>
                    <a-timeline-item>
                      获得公司“最佳员工”表彰 2015-09-01</a-timeline-item
                    >
                    <a-timeline-item> 成为部门主管 2015-09-01</a-timeline-item>
                    <a-timeline-item
                      >获得部门十佳员工称号 2015-09-01</a-timeline-item
                    >
                    <a-timeline-item
                      >Network problems being solved 2015-09-01</a-timeline-item
                    >
                  </a-timeline>
                </div>
              </a-tab-pane>
              <a-tab-pane key="4" tab="项目经历">
                <div class="experience-content">
                  <a-list item-layout="horizontal" :data-source="projectData">
                    <template #renderItem="{ item }">
                      <a-list-item>
                        <a-list-item-meta :description="item.desc">
                          <template #title>
                            {{ item.title }}
                          </template>
                          <template #avatar>
                            <a-avatar
                              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            />
                          </template>
                        </a-list-item-meta>
                      </a-list-item>
                    </template>
                  </a-list>
                </div>
              </a-tab-pane>
            </a-tabs>
            <a-range-picker v-model:value="time" />
            <div class="title-input">
              <a-input v-model:value="expTitle" />
              <a-button type="primary">确定</a-button>
            </div>
            <a-textarea
              v-if="expKey === '4'"
              v-model:value="expContent"
              showCount
              :maxlength="100"
            />
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="评价">Content of Tab Pane 2</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
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
    UploadOutlined,
  },
  setup() {
    const current = ref("");
    const handleChange = () => {};
    const projectData = [
      { title: "网上银行app项目", desc: "领导负责技术部工作" },
      {
        title: "开放式世界游戏项目",
        desc: "领导负责游戏后端开发",
      },
      {
        title: "共享单车项目",
        desc: "领导负责游戏后端开发",
      },
      {
        title: "扫雷小游戏",
        desc: "领导负责游戏后端开发",
      },
    ];
    return {
      activeKey: ref("1"),
      expKey: ref("3"),
      time: ref(""),
      current,
      staffData,
      fileList: ref([]),
      handleChange,
      projectData,
      expTitle: ref(""),
      expContent: ref(""),
    };
  },
};
</script>
<style lang="scss" scoped>
$font-color: #6c6f71;
.archive-edit-container {
  padding: 20px;
  background: #fff;
  .user-name {
    padding: 10px;
    font-size: 18px;
    color: $font-color;
    button {
      margin-left: 20px;
    }
  }
  .archive-detail {
    display: flex;
    justify-content: space-around;
  }
  .experience-content {
    width: 300px;
    height: 300px;
    padding-top: 10px;
    overflow-y: scroll;
  }
  .title-input {
    display: flex;
  }
}
</style>
