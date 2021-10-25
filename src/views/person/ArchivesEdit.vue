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
      <a-tab-pane key="1" tab="档案" :forceRender="true">
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
      <a-tab-pane key="2" tab="评价" :forceRender="true">
        <div class="comment-detail">
          <div class="comment-list">
            <div class="filter-comment"><span>全部</span><span>我的</span></div>
            <CommentList :comments="commentList"></CommentList>
          </div>
          <div class="comment-radar">
            <div id="ability"></div>
            <EvaluateTags :tags="evaluateInfo.tagList"></EvaluateTags>
          </div>
        </div>
        <div class="cooment-submit-box">
          <div class="input-area">
            <a-textarea
              v-model:value="commentText"
              showCount
              :maxlength="100"
            />
            <a-button type="primary">提交</a-button>
          </div>
          <div class="stars-area">
            <div>工作能力: <StarsSelect></StarsSelect></div>
            <div>工作态度: <StarsSelect></StarsSelect></div>
            <div>团队合作: <StarsSelect></StarsSelect></div>
            <div>职业道德: <StarsSelect></StarsSelect></div>
            <div>创新意识: <StarsSelect></StarsSelect></div>
            <div>应急处理: <StarsSelect></StarsSelect></div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { ref, onMounted, nextTick } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import CommentList from "./components/CommentList.vue";
import { Radar } from "@antv/g2plot";
import EvaluateTags from "./components/EvaluateTags.vue";
import StarsSelect from "./components/StarsSelect.vue";
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
    CommentList,
    EvaluateTags,
    StarsSelect,
  },
  setup() {
    const current = ref("");
    const handleChange = () => {};
    const commentList = [
      {
        id: 0,
        name: "黄优乐",
        position: "HR",
        content: "能够逻辑清晰表达己方诉求，交流很高效。",
        time: "2014年8月18日 16:05",
        from: "杭州达创公司",
        score: "4.8",
        avater:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F31%2F67%2F5810c4460e1ca_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637064952&t=b58bc1d8c0bd9379f252166a5c3b9f58",
      },
      {
        id: 1,
        name: "江明明",
        position: "技术部部部门主管",
        content: "认真负责且有热情，是一个十分有想法的人！( •̀ ω •́ )y",
        time: "2012年7月21日 17:05",
        from: "杭州宏恒公司",
        score: "4.8",
        avater:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F31%2F67%2F5810c4460e1ca_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637064952&t=b58bc1d8c0bd9379f252166a5c3b9f58",
      },
      {
        id: 2,
        name: "廖柏柏",
        position: "人力资源部部门主管",
        content: "能够逻辑清晰表达己方诉求，交流很高效。",
        time: "2012年5月13日 10:05",
        from: "杭州和海公司",
        score: "4.8",
        avater:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F31%2F67%2F5810c4460e1ca_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637064952&t=b58bc1d8c0bd9379f252166a5c3b9f58",
      },
    ];
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
    const radarData = [
      { name: "工作能力", star: 671 },
      { name: "应急处理", star: 780 },
      { name: "工作态度", star: 814 },
      { name: "创新意识", star: 840 },
      { name: "职业道德", star: 660 },
      { name: "团队合作", star: 885 },
    ];
    const activeKey = ref("1");
    const evaluateInfo = {
      star: 4,
      scoreList: [
        { type: "工作能力", score: 4.6 },
        { type: "应急处理", score: 4.1 },
        { type: "创新意识", score: 4.6 },
        { type: "职业道德", score: 4.6 },
        { type: "团队合作", score: 4.6 },
        { type: "工作态度", score: 4.6 },
      ],
      tagList: [
        { id: 0, type: "全部", nums: 90 },
        { id: 1, type: "负责", nums: 61 },
        { id: 2, type: "工作完成效率高", nums: 61 },
        { id: 3, type: "有工作能力", nums: 29 },
      ],
      commentList: [
        {
          id: 0,
          name: "黄优乐",
          position: "HR",
          content: "能够逻辑清晰表达己方诉求，交流很高效。",
          time: "2014年8月18日 16:05",
          from: "杭州达创公司",
          score: "4.8",
          avater:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F31%2F67%2F5810c4460e1ca_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637064952&t=b58bc1d8c0bd9379f252166a5c3b9f58",
        },
        {
          id: 1,
          name: "江明明",
          position: "技术部部部门主管",
          content: "认真负责且有热情，是一个十分有想法的人！( •̀ ω •́ )y",
          time: "2012年7月21日 17:05",
          from: "杭州宏恒公司",
          score: "4.8",
          avater:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F31%2F67%2F5810c4460e1ca_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637064952&t=b58bc1d8c0bd9379f252166a5c3b9f58",
        },
        {
          id: 2,
          name: "廖柏柏",
          position: "人力资源部部门主管",
          content: "能够逻辑清晰表达己方诉求，交流很高效。",
          time: "2012年5月13日 10:05",
          from: "杭州和海公司",
          score: "4.8",
          avater:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F31%2F67%2F5810c4460e1ca_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637064952&t=b58bc1d8c0bd9379f252166a5c3b9f58",
        },
      ],
    };
    const commentText = ref("");
    onMounted(() => {
      nextTick(() => {
        const radarPlot = new Radar("ability", {
          data: radarData,
          xField: "name",
          yField: "star",
          appendPadding: [0, 10, 0, 10],
          meta: {
            star: {
              alias: "star 数量",
              min: 0,
              nice: true,
              formatter: (v) => Number(v).toFixed(2),
            },
          },
          xAxis: {
            line: null,
            tickLine: null,
            grid: {
              line: {
                style: {
                  lineDash: null,
                },
              },
            },
          },
          yAxis: {
            line: null,
            tickLine: null,
            grid: {
              line: {
                type: "line",
                style: {
                  lineDash: null,
                },
              },
              alternateColor: "rgba(0, 0, 0, 0.04)",
            },
          },
          // 开启辅助点
          point: {
            size: 2,
          },
          area: {},
        });
        radarPlot.render();
      });
    });
    return {
      activeKey,
      expKey: ref("3"),
      time: ref([]),
      current,
      staffData,
      fileList: ref([]),
      handleChange,
      projectData,
      expTitle: ref(""),
      expContent: ref(""),
      commentList,
      evaluateInfo,
      commentText,
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
  .comment-detail {
    display: flex;
    .comment-list {
      width: 70%;
      position: relative;
      padding-top: 22px;
      .filter-comment {
        position: absolute;
        height: 22px;
        background: #fff;
        top: 0;
        left: 0;
        span {
          margin-right: 20px;
          cursor: pointer;
        }
      }
    }
    .comment-radar {
      width: 30%;
      display: flex;
      flex-direction: column;
      #ability {
        width: 70%;
        margin: 0 auto;
      }
    }
  }
  .cooment-submit-box {
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
    .input-area {
      width: 60%;
    }
    .stars-area {
      div {
        display: flex;
      }
    }
  }
}
</style>
