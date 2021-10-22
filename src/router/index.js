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
