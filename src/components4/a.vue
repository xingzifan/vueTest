<template>
  <component-a aaa="123" ref="comA"></component-a>
</template>

<script>
import componentA from "./b";
export default {
  components: {
    componentA
  },

  data() {
    return {
      ddd: 666
    };
  },

  mounted() {
    console.log(66666, this.$children[0].sayHello(900));

    const comA = this.$refs.comA;
    console.log(comA.title); // Vue.js
    comA.sayHello(999); // 弹窗
  }
};
</script>
