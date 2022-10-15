export const Router = [
  {
    path: "/home",
    name: "hoem",
    component: () => import("@/layout/home/home.vue"),
    meta: {
      keepAlive: true,
      pageName:"login"
    },
  },
];
