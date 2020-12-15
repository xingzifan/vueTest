<template functional>
  <div>
    <h3 :style="{ color: injections.theme.color }">F 组件</h3>
  </div>
</template>

<script>
export default {
  inject: {
    theme: {
      //函数式组件取值不一样
      default: () => ({})
    }
  },

  mounted() {
    console.log(1111, this.injections.theme.color);
  }
};
</script>
