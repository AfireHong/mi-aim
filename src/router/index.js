import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/person/home",
        name: "home",
        component: () => import("../views/person/Home.vue"),
      },
      {
        path: "/person/myArchives",
        name: "archives",
        component: () => import("../views/person/MyArchives.vue"),
      },
      {
        path: "/person/editArchives",
        name: "editArchives",
        component: () => import("../views/person/ArchivesEdit.vue"),
      },
      {
        path: "/person/staffArchives",
        name: "staffArchives",
        component: () => import("../views/person/StaffArchives.vue"),
      },
      {
        path: "/person/setting",
        name: "Setting",
        component: () => import("../views/person/Setting.vue"),
      },
      {
        path: "/person/message",
        name: "Message",
        component: () => import("../views/person/Message.vue"),
      },
      {
        path: "/person/backTone",
        name: "backTone",
        component: () => import("../views/person/backTone.vue"),
      },
      {
        path: "/person/pushArchives",
        name: "pushArchives",
        component: () => import("../views/person/pushArchives.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
