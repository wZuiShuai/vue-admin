import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
export const Layout = () => import("@/layout/index.vue")

//自动引入modules的子文件为Router的数据
const modules = import.meta.glob("./modules/**/*.ts", { eager: true })

const routers: RouteRecordRaw[] = []

Object.values(modules).forEach((val: any) => {
  const mod = val["default"]
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routers.push(...modList)
})

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
    children: [...routers],
  },
  {
    path: "/dataScreen",
    component: () => import("@/views/dataScreen/index.vue"),
  },
  {
    // 找不到路由重定向到404页面
    path: "/:pathMatch(.*)",
    component: () => import("@/views/ErrorMessage/404.vue"),
  },
]

// 实例化路由对象，使用hash模式
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
