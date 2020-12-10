<template>
  <div>
    <Child1
      child1Info="111111"
      child2Info="222222"
      v-on:test1="onTest1"
      v-on:test2="onTest2"
    >
    </Child1>
  </div>
</template>

<script>
import Child1 from "./child1";
export default {
  components: { Child1 },
  methods: {
    onTest1(msg) {
      console.log("test1 running", msg);
    },

    onTest2(msg) {
      console.log("test2 running", msg);
    }
  }
};
</script>
