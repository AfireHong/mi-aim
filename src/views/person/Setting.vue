<template>
  <div class="setting">
    <a-tabs type="card">
      <a-tab-pane key="1" tab="基本设置"> </a-tab-pane>
      <a-tab-pane key="2" tab="安全设置"> Content of Tab Pane 2 </a-tab-pane>
      <a-tab-pane key="3" tab="身份设置"> Content of Tab Pane 3 </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.setting {
  padding: 20px;
  background: #fff;
}
</style>
