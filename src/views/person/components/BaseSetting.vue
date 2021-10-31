<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="姓名">
      <a-input v-model:value="formState.name" placeholder="唐慧君" />
    </a-form-item>
    <a-form-item label="性别">
      <a-radio-group v-model:value="formState.sex">
        <a-radio value="1">男</a-radio>
        <a-radio value="2">女</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="电话">
      <a-input
        v-model:value="formState.phone"
        placeholder="135****1234"
        disabled
      />
      <p>展示在个人档案中，作为隐私信息将不对外公布</p>
    </a-form-item>
    <a-form-item label="生日">
      <a-date-picker
        v-model:value="formState.date1"
        show-time
        type="date"
        placeholder="选择生日"
        style="width: 100%"
      />
    </a-form-item>
    <a-form-item label="民族">
      <a-input v-model:value="formState.nation" type="input" />
    </a-form-item>
    <a-form-item label="籍贯">
      <a-input v-model:value="formState.from" type="input" />
    </a-form-item>
    <a-form-item label="所在地">
      <a-input v-model:value="formState.area" type="input" />
    </a-form-item>
    <a-form-item label="自我介绍">
      <a-textarea v-model:value="formState.desc" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 2, offset: 2 }">
      <a-button type="primary" @click="onSubmit">更新</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive, toRaw, h } from "vue";
import { SmileOutlined } from "@ant-design/icons-vue";

import { notification } from "ant-design-vue";
export default defineComponent({
  setup() {
    const formState = reactive({
      name: "",
      sex: "2",
      phone: "",
      type: [],
      resource: "",
      desc: "",
      date1: "",
      nation: "",
      from: "",
      area: "",
    });

    const openNotification = () => {
      notification.open({
        message: "提示",
        description: "更新成功！",
        icon: h(SmileOutlined, { style: "color: #108ee9" }),
      });
    };
    const onSubmit = () => {
      console.log("submit!", toRaw(formState));
      openNotification();
    };
    return {
      labelCol: { span: 2 },
      wrapperCol: { span: 8 },
      formState,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
p {
  color: #737373;
  margin-bottom: -10px;
}
</style>
