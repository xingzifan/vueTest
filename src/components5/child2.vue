<template>
  <div class="child-2">
    <p>$attrs: {{ $attrs }}</p>
    <Child3 v-bind="$attrs" v-on="$listeners"></Child3>
  </div>
</template>

<script>
import Child3 from "./child3";
export default {
  components: { Child3 },

  mounted() {
    this.$emit("test2", "哈哈");
  }
};
</script>
