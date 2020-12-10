<template>
  <div>
    <!-- 前者自定义名称便于子组件调用，后者要传递数据名 -->
    <users :fff="sss" @titleChanged="titleChanged"></users>
  </div>
</template>

<script>
import users from "../users/index";

export default {
  name: "App",
  components: { users },

  data() {
    return {
      sss: ["Henry", "Bucky", "Emily"]
    };
  },

  methods: {
    titleChanged(e) {
      console.log(1111, e);
    }
  }
};
</script>
