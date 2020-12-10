<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="send">将数据发送给A组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "zifan",
      age: "24"
    };
  },

  mounted() {
    //在模板编译完成后执行
    this.$Event.$on("data-a", name => {
      this.name = name; //箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
    });

    this.$Event.$on("data-b", age => {
      this.age = age;
    });
  },

  methods: {
    send() {
      this.$Event.$emit("data-c", "ccc");
    }
  }
};
</script>
