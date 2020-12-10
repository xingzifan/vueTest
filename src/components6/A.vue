<template>
  <div>
    <h1>A 组件{{ this.color }}</h1>
    <button @click="() => changeColor()">改变color</button>
    <ChildrenB />
  </div>
</template>

<script>
import ChildrenB from "./B";

export default {
  components: {
    ChildrenB
  },

  data() {
    return {
      color: "blue"
    };
  },

  provide() {
    return {
      theme: this //方法一：提供祖先组件的实例
    };
  },

  mounted() {},

  methods: {
    changeColor(color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === "blue" ? "red" : "blue";
      }
    }
  }
};
</script>
