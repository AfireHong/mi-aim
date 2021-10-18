<template>
  <div class="archives-container">
    <div class="archives-header">
      <div class="icon">
        <img src="../../assets/images/a2.jpg" alt="" />
      </div>
      <div class="user-name">唐慧君</div>
    </div>
    <div class="archives-content">
      <a-tabs type="card" v-model:activeKey="tabKey" @change="tabChannge">
        <a-tab-pane key="1" tab="个人信息">
          <div class="person-info-content">
            <img
              class="person-img"
              src="../../assets/images/photo.jpg"
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
        <a-tab-pane key="3" tab="在职工作档案">
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
                      :size="small"
                    />
                  </a-card>
                </a-col>
                <a-col>
                  <a-card title="重大事件" style="width: 300px">
                    <a-timeline>
                      <a-timeline-item
                        >Create a services site 2015-09-01</a-timeline-item
                      >
                      <a-timeline-item
                        >Solve initial network problems
                        2015-09-01</a-timeline-item
                      >
                      <a-timeline-item
                        >Technical testing 2015-09-01</a-timeline-item
                      >
                      <a-timeline-item
                        >Network problems being solved
                        2015-09-01</a-timeline-item
                      >
                    </a-timeline>
                  </a-card>
                </a-col>
                <a-col>
                  <a-card title="项目经历" style="width: 300px">
                    <p>card content</p>
                    <p>card content</p>
                    <p>card content</p>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="4" tab="评价">评价</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { nextTick } from "vue";
import { Pie } from "@antv/g2plot";
export default {
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
    const tabChannge = (key) => {
      if (key == 3) {
        console.log(111);
        nextTick(() => {
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
        });
      }
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
    return {
      tabKey: ref("1"),
      activeKey: ref("1"),
      time: ref(""),
      onChange,
      onOpenChange,
      onCalendarChange,
      tabChannge,
      columns,
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
}
</style>
