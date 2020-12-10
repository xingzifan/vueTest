<template>
  <div>{{ aaa }}</div>
</template>

<script>
export default {
  props: {
    aaa: String
  },

  data() {
    return {
      sss: this.aaa,
      title: "Vue.js"
    };
  },
  methods: {
    sayHello(qqq) {
      console.log(4444, this.$parent.$data.ddd);
      console.log(qqq, this.sss, this.aaa);
    }
  }
};
</script>
