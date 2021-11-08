import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
    redirect: "/person/home",
    children: [
      {
        path: "/person/home",
        name: "home",
        meta: { name: "主页" },
        component: () => import("../views/person/Home.vue"),
      },
      {
        path: "/person/myArchives",
        name: "archives",
        meta: { name: "我的档案" },
        component: () => import("../views/person/MyArchives.vue"),
      },
      {
        path: "/person/editArchives",
        name: "editArchives",
        meta: { name: "档案编辑" },
        component: () => import("../views/person/ArchivesEdit.vue"),
      },
      {
        path: "/person/staffArchives",
        name: "staffArchives",
        meta: { name: "员工档案" },
        component: () => import("../views/person/StaffArchives.vue"),
      },
      {
        path: "/person/setting",
        name: "Setting",
        meta: { name: "个人设置" },
        component: () => import("../views/person/Setting.vue"),
      },
      {
        path: "/person/message",
        name: "Message",
        meta: { name: "消息" },
        component: () => import("../views/person/Message.vue"),
      },
      {
        path: "/person/backTone",
        name: "backTone",
        meta: { name: "发起背调" },
        component: () => import("../views/person/backTone.vue"),
      },
      {
        path: "/person/pushArchives",
        name: "pushArchives",
        meta: { name: "投递档案" },
        component: () => import("../views/person/pushArchives.vue"),
      },
    ],
  },

  {
    path: "/Enter",
    name: "Enter",
    component: () => import("../views/Enter.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
