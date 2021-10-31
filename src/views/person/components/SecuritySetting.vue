<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="风险程度">
      <a-progress :percent="10" :showInfo="false" strokeColor="green" />
    </a-form-item>

    <a-form-item label="密码">
      <a-input v-model:value="formState.password" disabled />
      <a-button type="primary" @click="editInfo()">修改</a-button>
    </a-form-item>
    <a-form-item label="二级密码">
      <a-input v-model:value="formState.passwordh" disabled />
      <a-button type="primary" @click="editInfo()">修改</a-button>
    </a-form-item>
    <a-form-item label="绑定邮箱">
      <a-input v-model:value="formState.email" disabled />
      <a-button type="primary" @click="editInfo()">修改</a-button>
    </a-form-item>
    <a-form-item label="绑定手机">
      <a-input v-model:value="formState.phone" disabled />
      <a-button type="primary" @click="editInfo()">修改</a-button>
    </a-form-item>
  </a-form>
  <a-modal v-model:visible="modalVisible" title="修改信息" @ok="handleOk">
    <a-input v-model:value="value" />
  </a-modal>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
import { message } from "ant-design-vue";
export default defineComponent({
  setup() {
    const formState = reactive({
      password: "",
      passwordh: "",
      device: "",
      email: "",
      phone: "",
    });
    const modalVisible = ref(false);
    const editInfo = () => {
      modalVisible.value = true;
    };
    const handleOk = () => {
      modalVisible.value = false;
      message.success("修改成功！");
    };
    return {
      labelCol: { span: 2 },
      wrapperCol: { span: 8 },
      formState,
      editInfo,
      modalVisible,
      value: ref(""),
      handleOk,
    };
  },
});
</script>
<style lang="scss" scoped>
button {
  margin-top: 10px;
}
</style>
