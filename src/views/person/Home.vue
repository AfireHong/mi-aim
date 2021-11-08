<template>
  <div class="home">
    <a-row :gutter="[22, 22]" :wrap="true">
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
    <a-row :gutter="[22, 22]" :wrap="true">
      <a-col :xs="24" :md="24">
        <div class="evaluate">
          <HomeCard title="我的评价">
            <div class="card-content" style="height: 500px">
              <div class="evaluate-overview">
                <div class="stars-box">
                  <span class="stars-list">
                    <StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarOutlined />
                  </span>
                  <span class="stars-score">
                    {{ evaluateInfo.star }}
                  </span>
                </div>
                <div class="score">
                  <span v-for="item in evaluateInfo.scoreList" :key="item.type">
                    {{ item.type }} {{ item.score }}
                  </span>
                </div>
                <div class="tag">
                  <EvaluateTags :tags="evaluateInfo.tagList"></EvaluateTags>
                </div>
              </div>
              <CommentList
                :comments="evaluateInfo.commentList"
                @report="report"
              ></CommentList>
            </div>
          </HomeCard>
        </div>
      </a-col>
    </a-row>

    <a-modal
      v-model:visible="visible"
      title="评价申诉"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <a-input placeholder="输入申诉内容，将发送给直属上级" />
    </a-modal>
  </div>
</template>
<script>
import HomeCard from "./components/HomeCard.vue";
import EvaluateTags from "./components/EvaluateTags.vue";
import CommentList from "./components/CommentList.vue";
import { Pie, Radar } from "@antv/g2plot";
import { ref, onMounted, reactive } from "vue";
import { StarOutlined, StarFilled } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
export default {
  name: "Home",
  components: {
    HomeCard,
    StarOutlined,
    StarFilled,
    EvaluateTags,
    CommentList,
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

    const evaluateInfo = reactive({
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
    });
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
    const visible = ref(false);
    const confirmLoading = ref(false);
    const currentId = ref();
    const report = (id) => {
      visible.value = true;
      currentId.value = id;
      console.log(id);
    };
    const handleOk = () => {
      confirmLoading.value = true;
      setTimeout(() => {
        visible.value = false;
        confirmLoading.value = false;
        message.success("申诉成功!");
      }, 500);
    };
    return {
      myInfo,
      evaluateInfo,
      report,
      visible,
      handleOk,
      confirmLoading,
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 18px 8px;
  overflow: hidden;
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
.evaluate {
  margin-top: 20px;
  .evaluate-overview {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    .stars-list {
      font-size: 24px;
      span {
        margin-right: 5px;
        color: rgb(255, 196, 0);
      }
    }
    .stars-score {
      font-size: 24px;
      margin-left: 10px;
      color: rgb(131, 131, 131);
    }
    .score {
      display: grid;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 30px 30px;
      font-weight: bold;
    }
  }
}
</style>
