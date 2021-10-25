<template>
  <div class="archives-container">
    <div class="archives-header">
      <div class="icon">
        <img src="../../../assets/images/a2.jpg" alt="" />
      </div>
      <div class="user-name">唐慧君</div>
    </div>
    <div class="archives-content">
      <a-tabs type="card" v-model:activeKey="tabKey" @change="tabChannge">
        <a-tab-pane key="1" tab="个人信息">
          <div class="person-info-content">
            <img
              class="person-img"
              src="../../../assets/images/photo.jpg"
              alt=""
            />
            <a-descriptions title="我的信息">
              <a-descriptions-item label="姓名">唐慧君</a-descriptions-item>
              <a-descriptions-item label="性别">女</a-descriptions-item>
              <a-descriptions-item label="生日">1990/05/29</a-descriptions-item>
              <a-descriptions-item label="民族">汉族</a-descriptions-item>
              <a-descriptions-item label="手机">
                13525804765
              </a-descriptions-item>
              <a-descriptions-item label="邮箱"
                >tanghuijun@163.com</a-descriptions-item
              >
              <a-descriptions-item label="籍贯"
                >浙江市台州市温岭市</a-descriptions-item
              >
              <a-descriptions-item label="学历">
                杭州服创大学软件工程专业本科
              </a-descriptions-item>
              <a-descriptions-item label="所在地">
                浙江省杭州市
              </a-descriptions-item>
              <a-descriptions-item label="住址">
                滨江区大都名苑29幢402室
              </a-descriptions-item>
              <a-descriptions-item label="技能证书">
                于2010年3月，获全国大学生服务外包比赛省级一等奖。
              </a-descriptions-item>
            </a-descriptions>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="过往工作经历">
          <a-collapse v-model:activeKey="activeKey">
            <a-collapse-panel key="1" header="杭州一号公司">
              测试
            </a-collapse-panel>
            <a-collapse-panel key="2" header="杭州二号公司">
              测试
            </a-collapse-panel>
            <a-collapse-panel key="3" header="杭州三号公司">
              测试
            </a-collapse-panel>
          </a-collapse>
        </a-tab-pane>
        <a-tab-pane key="3" tab="在职工作档案" :forceRender="true">
          <div class="archives-overview">
            <div class="over-item">
              <span class="over-title">部门</span>
              <span class="over-detail">技术部</span>
            </div>
            <div class="over-item">
              <span class="over-title">职位</span>
              <span class="over-detail">部门主管</span>
            </div>
            <div class="over-item">
              <span class="over-title">在职累计时长</span>
              <span class="over-detail">60个月</span>
            </div>
          </div>
          <div class="archives-container">
            <div class="time-pick">
              范围选择
              <a-range-picker
                v-model:value="time"
                @change="onChange"
                @openChange="onOpenChange"
                @calendarChange="onCalendarChange"
              />
            </div>
            <div class="archives-detail">
              <a-row type="flex" justify="space-between">
                <a-col>
                  <a-card title="考勤统计" style="width: 300px">
                    <div
                      id="attendance"
                      style="width: 100%; height: 220px"
                    ></div>
                  </a-card>
                </a-col>
                <a-col>
                  <a-card
                    title="绩效记录"
                    style="width: 300px"
                    :bodyStyle="{ padding: '10px' }"
                  >
                    <a-table
                      :dataSource="dataSource"
                      :columns="columns"
                      size="small"
                    />
                  </a-card>
                </a-col>
                <a-col>
                  <a-card title="重大事件" style="width: 300px">
                    <a-timeline>
                      <a-timeline-item>
                        获得公司“最佳员工”表彰 2015-09-01</a-timeline-item
                      >
                      <a-timeline-item>
                        成为部门主管 2015-09-01</a-timeline-item
                      >
                      <a-timeline-item
                        >获得部门十佳员工称号 2015-09-01</a-timeline-item
                      >
                      <a-timeline-item
                        >Network problems being solved
                        2015-09-01</a-timeline-item
                      >
                    </a-timeline>
                  </a-card>
                </a-col>
                <a-col>
                  <a-card
                    title="项目经历"
                    style="width: 300px; max-height: 300px; overflow-y: scroll"
                  >
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
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="4" tab="评价" :forceRender="true">
          <div class="evaluate-container">
            <div class="eva-tag-comment">
              <div class="tag">
                <EvaluateTags :tags="evaluateInfo.tagList"></EvaluateTags>
              </div>
              <CommentList :comments="evaluateInfo.commentList"></CommentList>
            </div>

            <div id="ability" style="width: 23%; height: 300px"></div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, nextTick } from "vue";
import { Pie, Radar } from "@antv/g2plot";
import EvaluateTags from "./EvaluateTags.vue";
import CommentList from "./CommentList.vue";
export default {
  components: {
    EvaluateTags,
    CommentList,
  },
  setup() {
    const onChange = () => {};
    const onOpenChange = () => {};
    const onCalendarChange = () => {};
    const pieData = [
      { type: "迟到", value: 27 },
      { type: "打卡", value: 25 },
      { type: "早退", value: 18 },
      { type: "缺卡", value: 15 },
      { type: "出差", value: 10 },
      { type: "请假", value: 5 },
    ];
    const dataSource = [
      {
        order: "1",
        work: "89",
        start: "2020-9",
        end: "2021-9",
      },
    ];
    onMounted(() => {
      nextTick(() => {
        console.log(document.getElementById("attendance"));
        const piePlot = new Pie("attendance", {
          appendPadding: 10,
          data: pieData,
          angleField: "value",
          colorField: "type",
          radius: 1,
          innerRadius: 0.64,
          label: {
            type: "inner",
            offset: "-50%",
            autoRotate: false,
            style: { textAlign: "center" },
            formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          },
          statistic: {
            title: {
              offsetY: -8,
              content: "",
            },
            content: {
              offsetY: -4,
              content: "",
            },
          },
          // 添加 中心统计文本 交互
          interactions: [
            { type: "element-selected" },
            { type: "element-active" },
            {
              type: "pie-statistic-active",
              cfg: {
                start: [
                  {
                    trigger: "element:mouseenter",
                    action: "pie-statistic:change",
                  },
                  {
                    trigger: "legend-item:mouseenter",
                    action: "pie-statistic:change",
                  },
                ],
                end: [
                  {
                    trigger: "element:mouseleave",
                    action: "pie-statistic:reset",
                  },
                  {
                    trigger: "legend-item:mouseleave",
                    action: "pie-statistic:reset",
                  },
                ],
              },
            },
          ],
        });
        piePlot.render();
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
    const tabChannge = () => {
      // if (key == 3) {
      //   console.log(111);
      //   nextTick(() => {});
      // } else if (key == 4) {
      //   nextTick(() => {});
      // }
    };
    const columns = [
      {
        title: "#",
        dataIndex: "order",
        key: "order",
      },
      {
        title: "绩效",
        dataIndex: "work",
        key: "work",
      },
      {
        title: "起始时间",
        dataIndex: "start",
        key: "start",
      },
      {
        title: "截止时间",
        dataIndex: "end",
        key: "end",
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
    const radarData = [
      { name: "工作能力", star: 671 },
      { name: "应急处理", star: 780 },
      { name: "工作态度", star: 814 },
      { name: "创新意识", star: 840 },
      { name: "职业道德", star: 660 },
      { name: "团队合作", star: 885 },
    ];
    return {
      tabKey: ref("1"),
      activeKey: ref("1"),
      time: ref([]),
      onChange,
      onOpenChange,
      onCalendarChange,
      tabChannge,
      columns,
      projectData,
      evaluateInfo,
      dataSource,
    };
  },
};
</script>
<style lang="scss" scoped>
$font-color: #6c6f71;
.archives-container {
  background: #fff;
  padding: 20px;
  > .archives-header {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    > .icon {
      width: 60px;
      height: 60px;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    > .user-name {
      line-height: 60px;
      margin-left: 28px;
      font-size: 20px;
      color: $font-color;
    }
  }
  > .archives-content {
    .person-info-content {
      display: flex;
      .person-img {
        width: 200px;
        height: 300px;
      }
      .ant-descriptions {
        margin-left: 30px;
      }
    }
    .archives-overview {
      display: flex;
      margin-left: 40px;
      .over-item {
        border-right: 1px #c0c0c0 solid;
        padding-right: 40px;
        margin-right: 40px;
        .over-title {
          font-size: large;
          margin-right: 30px;
        }
        .over-detail {
          font-size: large;
          color: $font-color;
          height: 30px;
        }
      }
    }
    .archives-detail {
      margin-top: 20px;
    }
  }
  .evaluate-container {
    display: flex;
    justify-content: space-between;
  }
  .eva-tag-comment {
    width: 75%;
  }
}
</style>
