import { createRouter, createWebHashHistory } from "vue-router";
export const Layout = () => import("@/layout/index.vue");
// 路由表
const routes = [
  {
    path: "/",
    redirect: { name: "login" },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/user/login.vue"),
  },
  {
    path: "/",
    component: Layout,
    children: [] as any[],
  },
];

//自动引入modules的子文件为Router的数据
const modules = import.meta.glob("./modules/**/*.ts", { eager: true });
Object.values(modules).forEach((val: any) => {
  let routers: any[] = [];
  const mod = val["Router"];
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routers.push(...modList);
  routes[2].children?.push(...routers);
});

// 实例化路由对象，使用hash模式
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
