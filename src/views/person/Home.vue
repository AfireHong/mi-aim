<template>
  <div class="home">
    <a-row :gutter="16" :wrap="true">
      <a-col :xs="24" :md="8">
        <div class="info">
          <HomeCard title="我的信息">
            <div class="card-content">
              <div class="info-card">
                <div class="info-item">
                  <span>姓名:</span>
                  <span>{{ myInfo.name }}</span>
                </div>
                <div class="info-item">
                  <span>性别:</span>
                  <span>{{ myInfo.sex === 0 ? "女" : "男" }}</span>
                </div>
                <div class="info-item">
                  <span>电话:</span>
                  <span>{{ myInfo.phone }}</span>
                </div>
                <div class="info-item">
                  <span>生日:</span>
                  <span>{{ myInfo.brith }}</span>
                </div>
                <div class="info-item">
                  <span>邮箱:</span>
                  <span>{{ myInfo.mail }}</span>
                </div>
              </div>
            </div>
          </HomeCard>
        </div>
      </a-col>
      <a-col :xs="24" :md="8">
        <div class="attendance">
          <HomeCard title="我的考勤">
            <div class="card-content">
              <div id="attendance" style="width: 100%; height: 220px"></div>
            </div>
          </HomeCard>
        </div>
      </a-col>
      <a-col :xs="24" :md="8">
        <div class="ability">
          <HomeCard title="我的能力">
            <div class="card-content">
              <div id="ability" style="width: 100%; height: 220px"></div>
            </div>
          </HomeCard>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import HomeCard from "./components/HomeCard.vue";
import { Pie, Radar } from "@antv/g2plot";
import { ref, onMounted } from "vue";
export default {
  name: "Home",
  components: {
    HomeCard,
  },
  setup() {
    const myInfo = ref({
      name: "唐慧君",
      sex: 0,
      phone: "135****4765",
      brith: "1990/05/29",
      mail: "tanghuijun@163.com",
    });
    const pieData = [
      { type: "迟到", value: 27 },
      { type: "打卡", value: 25 },
      { type: "早退", value: 18 },
      { type: "缺卡", value: 15 },
      { type: "出差", value: 10 },
      { type: "请假", value: 5 },
    ];

    const radarData = [
      { name: "工作能力", star: 671 },
      { name: "应急处理", star: 780 },
      { name: "工作态度", star: 814 },
      { name: "创新意识", star: 840 },
      { name: "职业道德", star: 660 },
      { name: "团队合作", star: 885 },
    ];
    onMounted(() => {
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
    return {
      myInfo,
    };
  },
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  padding: 24px;
}
.attendance {
  background: red;
}
.ability {
  background-color: green;
}
.card-content {
  height: 250px;
  box-sizing: border-box;
}
.info-card {
  margin-left: 20px;
  overflow: hidden;
  & > .info-item {
    margin-top: 20px;
    font-size: medium;
    color: rgb(105, 105, 105);
    span {
      margin-right: 20px;
    }
  }
}
</style>
