<template>
  <div class="stars-select-contaienr">
    <span
      v-for="index in full"
      :key="index"
      @click="selectHandle(index + 1)"
      @mouseover="mouseOverHandle(index + 1)"
      @mouseout="mouseLeaveHandle"
    >
      <StarFilled v-if="index < current"></StarFilled>
      <StarOutlined v-else></StarOutlined>
    </span>
  </div>
</template>
<script>
import { ref } from "vue";
import { StarOutlined, StarFilled } from "@ant-design/icons-vue";
export default {
  name: "stars",
  components: {
    StarOutlined,
    StarFilled,
  },
  setup() {
    const current = ref(0);
    const mouseOverBefore = ref(0);
    const full = ref(5);
    const selectHandle = (index) => {
      current.value = index;
      mouseOverBefore.value = current.value;
    };
    const mouseOverHandle = (index) => {
      mouseOverBefore.value = current.value;
      current.value = index;
    };
    const mouseLeaveHandle = () => {
      current.value = mouseOverBefore.value;
    };
    return {
      full,
      current,
      mouseOverBefore,
      selectHandle,
      mouseOverHandle,
      mouseLeaveHandle,
    };
  },
};
</script>
<style lang="scss" scoped>
.stars-select-contaienr {
  overflow: hidden;
  span {
    cursor: pointer;
    color: #ffc400;
    margin-left: 5px;
    font-size: 18px;
  }
}
</style>
