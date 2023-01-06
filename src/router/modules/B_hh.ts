export default [
  {
    path: "/home2",
    name: "hoem2",
    component: () => import("@/views/dataScreen/index.vue"),
    meta: {
      title: "用户列表",
      key: "Avatar",
    },
    children: [
      {
        path: "/assembly/selectIcon",
        name: "selectIcon",
        component: () => import("@/views/dataScreen/index.vue"),
        meta: {
          title: "Icon 选择",
          key: "Plus",
        },
      },
      {
        path: "/assembly/batchImport",
        name: "batchImport",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "批量导入数据",
          key: "Minus",
        },
      },
    ],
  },
]
