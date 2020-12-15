<template>
  <div>
    <h1>A 组件{{ this.color }}</h1>
    <button @click="() => changeColor()">改变color</button>
    <ChildrenB />
    <h1>{{ $store.state.name }}</h1>
    <h1>{{ $store.state.bbb }}</h1>
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

  mounted() {
    console.log(88888, this.$store.state.name);
    this.$store.commit("edit");
    console.log(this.$store.getters.fullInfo);
    this.$store.dispatch("aEdit", { age: 15 });
  },

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
