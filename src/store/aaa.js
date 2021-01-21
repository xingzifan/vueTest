import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//创建VueX对象
const store = new Vuex.Store({
  state: {
    //存放的键值对就是所要管理的状态
    name: "helloVueX",
    bbb: 123
  },

  mutations: {
    //es6语法，等同edit:funcion(){...}
    edit(state) {
      console.log(999, state);
      state.name = "jack";
    }
  },

  getters: {
    nameInfo(state) {
      return "姓名:" + state.name;
    },
    fullInfo(state, getters) {
      return getters.nameInfo + "年龄:" + state.age;
    }
  },

  actions: {
    aEdit(context, payload) {
      setTimeout(() => {
        context.commit("edit", payload);
      }, 2000);
    }
  }
});

export default store;
