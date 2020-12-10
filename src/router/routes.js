export default [
  {
    path: "/",
    name: "HelloWorld",
    component: resolve => require(["@/components/HelloWorld/index"], resolve), //组件初始化模板
    children: [
      {
        path: "/food",
        name: "food",
        component: resolve => require(["@/components/food/index"], resolve) //组件初始化模板
      },
      {
        path: "/seller",
        name: "seller",
        component: resolve => require(["@/components/seller/index"], resolve) //组件初始化模板
      },
      {
        path: "/rating",
        name: "rating",
        component: resolve => require(["@/components/rating/index"], resolve) //组件初始化模板
      }
    ]
  },

  {
    path: "/user/:id",
    component: resolve => require(["@/components/User/index"], resolve)
  },

  {
    path: "/params/:newsId/:userName/:a/:b/:c/:d/:e/:f/:g",
    component: resolve => require(["@/components/Params/index"], resolve)
  },

  {
    path: "/hi",
    // redirect: "/user/abcd",
    component: resolve => require(["@/components/Hi/index"], resolve),
    alias: ["/aaa", "/bbb"] // 别名
  },

  {
    path: "/app",
    component: resolve => require(["@/components2/App"], resolve)
  },

  {
    path: "/abc",
    component: resolve => require(["@/components2/ABC"], resolve)
  },

  {
    path: "/components3",
    component: resolve => require(["@/components3"], resolve)
  },

  {
    path: "/components4/a",
    component: resolve => require(["@/components4/a"], resolve)
  },

  {
    path: "/components5",
    component: resolve => require(["@/components5"], resolve)
  },

  {
    path: "/components6/A",
    component: resolve => require(["@/components6/A"], resolve)
  }
];
