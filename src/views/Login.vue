<template>
  <a-row justify="center" align="middle">
    <a-col :xs="12" :md="6" :lg="8">
      <div class="login-box">
        <div class="login-title">欢迎使用</div>
        <div class="login-form">
          <div class="system-name">MiAim</div>
          <a-form
            :model="formState"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
          >
            <a-form-item>
              <a-input v-model:value="formState.user" placeholder="手机号">
                <template #prefix><user-outlined type="user" /></template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model:value="formState.password"
                type="password"
                placeholder="密码"
              >
                <template #prefix><key-outlined /></template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                :disabled="formState.user === '' || formState.password === ''"
              >
                登录
              </a-button>
            </a-form-item>
          </a-form>
          <div class="form-item">
            <a-switch v-model:checked="isCompany" />
            <span class="isCompany-desc">企业</span>
            <span class="forget-pwd">忘记密码？</span>
          </div>
          <!-- <a-button type="primary" @click="loginClick" block>登录</a-button> -->
        </div>
      </div>
      <div class="brand-name">MiAim</div>
    </a-col>
  </a-row>
</template>
<script>
import { UserOutlined, KeyOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
export default {
  name: "Login",
  components: {
    UserOutlined,
    KeyOutlined,
  },
  setup() {
    const tel = ref();
    const password = ref();
    const isCompany = ref();
    const router = useRouter();
    const loginClick = () => {
      // TODO:登录校验
      message.success("登录成功！");
      router.push("/person/home");
    };
    const formState = reactive({
      user: "",
      password: "",
    });
    const handleFinish = () => {
      loginClick();
    };
    return {
      tel,
      password,
      isCompany,
      loginClick,
      formState,
      handleFinish,
    };
  },
};
</script>

<style lang="scss" scoped>
.login-box {
  margin-top: 40px;
  box-shadow: 5px 5px 10px rgb(226, 226, 226);
  > .login-title {
    background: #40a9ff;
    padding: 10px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
  }
  > .login-form {
    padding: 30px;
    background: #fff;
    > .system-name {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    > .form-item {
      margin-top: 20px;
      margin-bottom: 20px;
      > .isCompany-desc {
        font-size: 14px;
        color: rgb(97, 96, 96);
        display: inline-block;
        height: 22px;
        line-height: 22px;
        margin-left: 10px;
      }
      > .forget-pwd {
        display: inline-block;
        float: right;
        color: rgb(48, 12, 177);
        cursor: pointer;
      }
    }
  }
}

.brand-name {
  text-align: center;
  margin-top: 40px;
  font-weight: 600;
  font-size: 16px;
}
</style>
