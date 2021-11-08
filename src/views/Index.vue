<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo-content">
        <div class="logo">
          <img src="../assets/images/a2.jpg" alt="" />
        </div>
        <div class="user-info">
          <div class="username">唐慧君</div>
          <div class="company-name">杭州MiAim公司</div>
        </div>
      </div>
      <a-menu
        theme="dark"
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        @click="menuClick"
      >
        <a-menu-item key="/person/home">
          <HomeOutlined />
          <span class="nav-text">主页</span>
        </a-menu-item>
        <a-menu-item key="/person/myArchives">
          <UserOutlined />
          <span class="nav-text">我的档案</span>
        </a-menu-item>
        <a-sub-menu>
          <template #icon>
            <FolderOpenOutlined />
          </template>
          <template #title>人事档案</template>
          <a-menu-item key="/person/staffArchives">员工档案</a-menu-item>
          <a-menu-item key="/person/editArchives">档案编辑</a-menu-item>
        </a-sub-menu>
        <a-sub-menu>
          <template #icon>
            <SearchOutlined />
          </template>
          <template #title>背景调查</template>
          <a-menu-item key="/person/backTone">发起背调</a-menu-item>
          <a-menu-item key="/person/pushArchives">投递档案</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="/person/setting">
          <SettingOutlined />
          <span class="nav-text">个人设置</span>
        </a-menu-item>
        <a-menu-item key="/person/message">
          <BellOutlined />
          <span class="nav-text">消息</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <div class="login-out-btn" @click="loginOut">
          退出
          <ExportOutlined />
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px 0',
          height: 'calc(100vh - 158px)',
          overflowY: 'scroll',
        }"
      >
        <div
          :style="{
            overflow: 'hidden',
          }"
        >
          <router-view v-slot="{ Component }">
            <transition name="scale" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </a-layout-content>
      <a-layout-footer
        style="text-align: center; background: #fff; border-top: 1px solid #eee"
      >
        copyright
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
//导入antd图标
import {
  UserOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  SearchOutlined,
  SettingOutlined,
  ExportOutlined,
  BellOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  components: {
    UserOutlined,
    FolderOpenOutlined,
    HomeOutlined,
    SearchOutlined,
    SettingOutlined,
    ExportOutlined,
    BellOutlined,
  },
  setup() {
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = () => {
      console.log();
    };

    const router = useRouter();
    const menuClick = ({ key }) => {
      router.push(key);
    };
    const route = useRoute();
    const selectedKeys = ref([route.path]);
    const loginOut = () => {
      router.push("/login");
    };
    return {
      selectedKeys,
      onCollapse,
      onBreakpoint,
      menuClick,
      loginOut,
    };
  },
});
</script>
<style lang="scss" scoped>
.ant-layout-sider {
  height: 100vh;
}
.logo-content {
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2f3045;
  > .logo {
    width: 70px;
    height: 70px;
    > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  > .user-info {
    color: #fff;
    margin-top: 10px;
    > .company-name {
      font-size: 14px;
      color: #8095a8;
    }
  }
}
.login-out-btn {
  float: right;
  margin-right: 30px;
  padding: 0 10px;
  height: 100%;
  color: #8095a8;
  font-weight: 800;
  &:hover {
    color: #2f3045;
    cursor: pointer;
  }
}
.route-tab {
  width: 100%;
  height: 50px;
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
