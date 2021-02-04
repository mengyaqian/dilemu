import Vue from "vue";
import VueRouter from "vue-router";
import "../plugins/cookies";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: (resolve) => require(["@/views/login"], resolve),
    meta: { title: "登录" },
  },
  {
    path: "/control",
    name: "control",
    component: (resolve) => require(["@/views/control"], resolve),
    meta: { title: "控件页" },
  },
  {
    path: "/library",
    name: "library",
    component: (resolve) => require(["@/views/library"], resolve),
    meta: { title: "库" },
  },
  {
    path: "/setting",
    name: "setting",
    component: (resolve) => require(["@/views/setting"], resolve),
    meta: { title: "设置" },
  },
];

const router = new VueRouter({
  routes,
});
//路由拦截
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if ($cookies.get("token")) {
    //有token
    if (to.path == "/" || to.path == "/login") {
      next({ path: "/control" });
    } else {
      next();
    }
  } else {
    if (to.path != "/login") {
      next({ path: "/login" });
    } else {
      next();
    }
  }
});

export default router;
