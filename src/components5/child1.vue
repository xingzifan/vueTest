<template>
  <div class="child-1">
    <p>$attrs: {{ $attrs }}</p>
    <Child2 v-bind="$attrs" v-on="$listeners"></Child2>
  </div>
</template>

<script>
import Child2 from "./child2";
export default {
  components: { Child2 },

  mounted() {
    this.$emit("test1", "嘻嘻");
  }
};
</script>
