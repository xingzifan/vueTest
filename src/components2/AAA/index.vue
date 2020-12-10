<template>
  <div>
    <button @click="send">将数据发送给C组件</button>
    <div>{{ c }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "tom",
      c: "c"
    };
  },

  mounted() {
    this.$Event.$on("data-c", c => {
      this.c = c;
    });
  },

  methods: {
    send() {
      this.$Event.$emit("data-a", this.name);
    }
  }
};
</script>
