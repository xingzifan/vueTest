import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

export default new Router({
  routes,
  mode: "history", //历史模式

  // * 不是所有流浪器都支持 history 模式，如果遇到不支持的时候，需要设置 fallback 为 true，它会自动帮我们转成哈希去处理
  // * 如果你设置成 false，在不支持的情况下，那么单应用就会变成多应用，你每次路由跳转都会去后端然后返回新的内容，所以一般都是设置成 ture 要它去自动处理就好了
  fallback: true,

  // * 未添加 base: 链接与（未添加 mode || 添加 mode）时无变化
  // * 添加 base: http://localhost:8080/base/login
  base: process.env.BASE_URL,

  // * linkActiveClass & linkExactActiveClass 这两个都是用来配置可点击链接的类名的
  // * 例如： <router-link to="/login">跳转Login</router-link>
  // * 在源码中默认是这么显示的： <a href="/login" class="router-link-exact-active router-link-active">跳转Login</a>
  // * 可以看到里面的 class 默认是 router-link-exact-active 以及 router-link-active
  // * 但是如果使用下面的两个属性配置之后则会显示成：<a href="/login" class="exact-active-link active-link">跳转Login</a>
  // * 可以看到里面的 class 现在是 exact-active-link 以及 active-link
  // * 这样就方便我们自己自定义类名了
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",

  scrollBehavior(to, form, savedPosition) {
    //scrollBehavior方法接收to，form路由对象
    //第三个参数savedPosition当且仅当在浏览器前进后退按钮触发时才可用
    //该方法会返回滚动位置的对象信息，如果返回false，或者是一个空的对象，那么不会发生滚动
    //我们可以在该方法中设置返回值来指定页面的滚动位置，例如：
    return { x: 0, y: 0 };

    //表示在用户切换路由时让是所有页面都返回到顶部位置
    //如果返回savedPosition,那么在点击后退按钮时就会表现的像原生浏览器一样，返回的页面会滚动过到之前按钮点击跳转的位置，大概写法如下：
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }

    //如果想要模拟滚动到锚点的行为:
    if (to.hash) {
      return {
        selector: to.hash
      };
    }

    // * 什么叫Query？ 就是 http://localhost:8080/login?a=xxx&p=xxx 链接 ？后面的搜索参数
    // * 如果有什么特殊需求可以通过这两个函数进行自定义
    // parseQuery (query) {
    //   // 接收到的参数 query 是一个字符串
    // },
    // stringifyQuery (obj) {
    //   // 接收到的参数 obj 是一个对象
    // }
  }
});
