<template>
  <div class="setting">
    <a-tabs type="card">
      <a-tab-pane key="1" tab="基本设置">
        <BaseSetting />
      </a-tab-pane>
      <a-tab-pane key="2" tab="安全设置">
        <SecuritySetting />
      </a-tab-pane>
      <a-tab-pane key="3" tab="身份设置">
        <IdentitySetting />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import BaseSetting from "./components/BaseSetting.vue";
import SecuritySetting from "./components/SecuritySetting.vue";
import IdentitySetting from "./components/IdentitySetting.vue";
export default {
  components: {
    BaseSetting,
    SecuritySetting,
    IdentitySetting,
  },
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
