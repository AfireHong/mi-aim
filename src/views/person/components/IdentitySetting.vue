<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="身份证号">
      <a-input v-model:value="formState.idNum" disabled />
      <p>作为隐私信息将不对外公布</p>
      <a-button type="primary" @click="editInfo()">修改</a-button>
    </a-form-item>
    <a-form-item label="学历">
      <a-input v-model:value="formState.education" disabled />
      <p>提交相关学历证明待审核后方可显示</p>
      <a-button type="primary" @click="editInfo()">验证</a-button>
    </a-form-item>
    <a-form-item label="技能证书">
      <a-input v-model:value="formState.certificate" disabled />
      <p>提交相关证书证明待审核后方可显示</p>
      <a-button type="primary" @click="editInfo()">验证</a-button>
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
      idNum: "",
      education: "",
      certificate: "",
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
p {
  color: #737373;
  margin-bottom: -5px;
}
</style>
