<template>
  <div class="box">
    <div class="box-title">
      {{ title }}
    </div>
    <div class="box-content">
      <slot> </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      default: "标题",
      type: String,
    },
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  overflow: hidden;
  border-top: 4px solid #e7eaec;
  background: #fff;
}
.box-title {
  font-size: large;
  font-weight: normal;
  padding: 12px 15px 7px;
  min-height: 48px;
  color: #585858;
  border-bottom: 1px solid rgb(231, 234, 236);
}
.box-content {
  padding: 15px 20px 20px;
  overflow: hidden;
}
</style>
