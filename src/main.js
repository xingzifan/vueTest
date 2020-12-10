// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import "@/assets/css/flex.css";
import "@/assets/css/bkgColor.css";
import "@/assets/css/fontSize.css";
import "@/assets/css/fontColor.css";
import "@/assets/css/fontFamily.css";
import "@/assets/css/reset.css";

// 关键在这里，设置afterEach钩子函数
router.afterEach((to, from, next) => {
  document.title = to.name;
  document.icon = "./assets/img/document/clock.png";
});

Vue.config.productionTip = false;

var Event = new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

Vue.prototype.$Event = Event;
