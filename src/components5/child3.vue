<template>
  <div class="child-3">
    <p>$attrs: {{ $attrs }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$emit("test1", "吼吼");
  }
};
</script>
